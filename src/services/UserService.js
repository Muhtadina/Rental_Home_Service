import supabase from "../config/SupabaseClient.js";
import UserFactory from "../factories/UserFactory.js";

class UserService {
  static async register(data) {
    const client = supabase.getClient();

    const { username, email, password, role } = data;

    const userObj = UserFactory.createUser(role, data);

    const { error } = await client.from("base_users").insert({
      username,
      full_name: data.full_name,
      email,
      password_hash: password,
      role,
    });

    if (error) throw new Error(error.message);

    return { message: "Registration successful" };
  }

  static async login({ username, password }) {
    const client = supabase.getClient();

    const { data, error } = await client
      .from("base_users")
      .select("*")
      .eq("username", username)
      .single();

    if (error) throw new Error("User not found");
    if (data.password_hash !== password)
      throw new Error("Invalid credentials");

    return data;
  }

  static async getProfile(id) {
    const client = supabase.getClient();

    const { data, error } = await client
      .from("base_users")
      .select("*")
      .eq("user_id", id)
      .single();

    if (error) throw new Error("User not found");

    return data;
  }
}

export default UserService;
