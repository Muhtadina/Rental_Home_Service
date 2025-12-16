export default class Landlord {
  constructor({ full_name, email, password, username}) {
    this.full_name = full_name;
    this.email = email;
    this.password_hash = password;
    this.username = username;
    this.account_type = "landlord";
  }

  toBaseUserRow() {
    return {
      full_name: this.full_name,
      email: this.email,
      password_hash: this.password_hash,
      username: this.username,
      account_type: this.account_type
    };
  }
}
