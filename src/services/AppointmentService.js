import supabase from "../config/SupabaseClient.js";

class AppointmentService {
  static async create(data) {
    const client = supabase.getClient();

    const { error } = await client.from("appointments").insert(data);

    if (error) throw new Error(error.message);

    return { message: "Appointment created" };
  }
}

export default AppointmentService;
