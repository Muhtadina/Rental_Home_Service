import sql from "./config/db.js";

const test = async () => {
  try {
    // Test connection time
    const timeResult = await sql`SELECT NOW()`;
    console.log("DB Time:", timeResult);

    // Fetch all flats
    const flatsResult = await sql`SELECT * FROM flats`;
    console.log("Flats:", flatsResult);

  } catch (err) {
    console.error("DB error:", err);
  } finally {
    process.exit();
  }
};

test();
