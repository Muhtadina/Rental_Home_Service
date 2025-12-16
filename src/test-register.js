import sql from "./config/db.js";
import UserFactory from "./factories/UserFactory.js";

// =======================
// REGISTER
// =======================
async function testRegister() {
  try {
    const data = {
      full_name: "M S Tasin",
      email: "tasin2@gmail.com",
      password: "232323",
      account_type: "renter",
    };

    // 1. Insert user (without username)
    const inserted = await sql`
      INSERT INTO base_users (full_name, email, password_hash, account_type)
      VALUES (${data.full_name}, ${data.email}, ${data.password}, ${data.account_type})
      RETURNING user_id;
    `;

    if (!inserted[0]?.user_id) {
      throw new Error("User insert failed");
    }

    const user_id = inserted[0].user_id;

    // 2. Generate username
    const userObj = UserFactory.createUser(data.account_type, {
      ...data,
      user_id,
    });

    if (!userObj?.username) {
      throw new Error("Username generation failed");
    }

    const username = userObj.username; 


    // 3. Update username and VERIFY update
    const updated = await sql`
      UPDATE base_users
      SET username = ${username}
      WHERE user_id = ${user_id}
      RETURNING username;
    `;

    if (!updated[0]) {
      throw new Error("Username update failed");
    }

    console.log("[User registered successfully] username:", updated[0].username);

  } catch (err) {
    console.error("[Registration failed]:", err.message);
  }
}

// =======================
// LOGIN
// =======================
async function testLogin() {
  try {
    const email = "tasin2@gmail.com";
    const password = "232323";

    const result = await sql`
      SELECT user_id, username, email, account_type
      FROM base_users
      WHERE email = ${email}
        AND password_hash = ${password};
    `;

    if (!result[0]) {
      throw new Error("Invalid email or password");
    }

    console.log("!!! Login successful:", result[0]);
  } catch (err) {
    console.error("*** Login failed:", err.message);
  }
}

// =======================
// RUN
// =======================
await testRegister();
await testLogin();
process.exit();
