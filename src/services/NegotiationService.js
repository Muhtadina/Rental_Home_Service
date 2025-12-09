import supabase from "../config/SupabaseClient.js";
import NotificationCenter from "../observer/NotificationCenter.js";

const notifier = new NotificationCenter();

class NegotiationService {
  static async create(data) {
    const client = supabase.getClient();

    const { error } = await client.from("negotiations").insert(data);

    if (error) throw new Error(error.message);

    notifier.notify(`New negotiation for flat ${data.flat_id}`);

    return { message: "Negotiation submitted" };
  }

  static async getByFlat(flatId) {
    const client = supabase.getClient();

    const { data, error } = await client
      .from("negotiations")
      .select("*")
      .eq("flat_id", flatId);

    if (error) throw new Error(error.message);

    return data;
  }
}

export default NegotiationService;
