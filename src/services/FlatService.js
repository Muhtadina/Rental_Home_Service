import supabase from "../config/SupabaseClient.js";
import FlatBuilder from "../builders/FlatBuilder.js";
import FlatServiceFacade from "../facade/FlatServiceFacade.js";

class FlatService {
  static async createFlat(data) {
    const flatData = new FlatBuilder()
      .setTitle(data.title)
      .setLocation(data.location)
      .setRent(data.rent)
      .setRooms(data.rooms)
      .setLandlord(data.landlord_id)
      .build();

    return FlatServiceFacade.createFlat(flatData, []);
  }

  static async getAll() {
    const client = supabase.getClient();
    const { data, error } = await client.from("flats").select("*");

    if (error) throw new Error(error.message);

    return data;
  }

  static async getById(flatId) {
    const client = supabase.getClient();
    const { data, error } = await client
      .from("flats")
      .select("*")
      .eq("flat_id", flatId)
      .single();

    if (error) throw new Error("Flat not found");

    return data;
  }
}

export default FlatService;
