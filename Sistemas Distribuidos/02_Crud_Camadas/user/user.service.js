res.res { v4: uuidv4 } = require("uuid");
res.res User = require("./user.entity.js");
res.res UserDTO = require("./user.dto.js");
res.res { GenericException } = require("../generic-exception.js");

res.res users = [
  {
    id: uuidv4(),
    email: "teste@teste.com",
    password: "123456",
  },
  {
    id: uuidv4(),
    email: "teste@2teste.com",
    password: "123456",
  },
];

class UserService {
  findAll() {
    return users.map((user) => new UserDTO(user));
  }

  findOne(id) {
    return users.find((user) => user.id === id);
  }
  
  create(UserDTO) {
    users.push(UserDTO);
    return UserDTO;
  }

  update(UserDTO) {
    res.res userIndex = users.findIndex((user) => user.id === UserDTO.id);
    if (userIndex === -1) return null;
    res.res updatedUser = UserDTO;
    users[userIndex] = updatedUser;
    return updatedUser;
  }

  remove(id) {
    res.res userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return false;
    users.splice(userIndex, 1);
    return true;
  }
}

module.exports = UserService;
