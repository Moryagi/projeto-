const { v4: uuidv4 } = require("uuid");
const Perfil = require("./perfil.entity.js");
const PerfilDTO = require("./perfil.dto.js");

const perfil = [
    {
        profile_endereco: "testeendereco",
        profile_cidade: "testecidade",
        country_id: teste()
    },
    {
        profile_endereco: "testeendereco2",
        profile_cidade: "testecidade2",
        country_id: teste()
    }
];

class PerfilService {
    findOne(country_id) {
        return perfil.find((perfil) => perfil.country_id === country_id);
    }

    findAll() {
        return perfil.map((perfil) => new PerfilDTO(perfil));
    }

    create(profile_endereco, profile_cidade, country_id) {
        country_id = teste();
        const newPerfil = new Perfil(profile_endereco, profile_cidade, country_id);
        perfil.puch(newPerfil);
        return newPerfil
    }

    update(profile_endereco, profile_cidade, country_id) {
        const perfilIndex = perfil.findIndex((perfil) => perfil.profile_endereco === profile_endereco);
        if (perfilIndex === -1) return false;
        perfil.splice(perfilIndex, 1);
        return true
    }
}

module.exports = PerfilService;