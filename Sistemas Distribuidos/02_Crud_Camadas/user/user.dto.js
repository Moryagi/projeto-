class UserDTO {
  constructor({ id, email, password }, criar=false ) {
    this.setId(id);
    this.setEmail(email);
    if(criar){
      this.setPassword(password);
    } else {
      this.password = password;
    }
  }

  setId(id) {
    if (!id) throw new Error("ID is required");
    this.id = id;
  }

  setEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) throw new Error("Invalid email format");
    this.email = email;
  }
  
  setPassword(password) {
    const conterCarEsp = /[!@#$%^&*]/;
    if (password.length < 8)
      throw new Error("Password must be at least 8 characters long");
    if (!/[A-Z]/.test(password))
      throw new Error("Password must contain at least one uppercase letter");
    if (!/[a-z]/.test(password))
      throw new Error("Password must contain at least one lowercase letter");
    if (!/\d/.test(password))
      throw new Error("Password must contain at least one number");
    if (!conterCarEsp.test(password))
      throw new Error(
        "Password must contain at least one special character (!@#$%^&*)"
      );
    this.password = password;
  }
}

module.exports = UserDTO;
