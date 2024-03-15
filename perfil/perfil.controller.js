const PerfilService = require('./perfil.service');
const perfilService = new PerfilService();

class PerfilController {
    createPerfil(req, res) {
        const { profile_endereco, profile_cidade, country_id } = req.body;
        const perfil = perfilService.create(profile_endereco, profile_cidade, country_id);
        res.json(perfil);
    }

    getAllPerfil(req, res) {
        const perfil = perfilService.findAll();
        res.json(perfil);
    }

    getPerfilByID(req, res) {
        const { country_id } = req.params;
        const perfil = perfilService.findOne(country_id);

        if (!perfil) {
            return res.status(404).send('register not fund');
        }
        res.json(perfil);
    }

    updatePerfil(req, res) {
        const { country_id } = req.params;
        const { profile_endereco, profile_cidade } = req.body;
        const updatePerfil = perfilService.update(profile_endereco, profile_cidade, country_id);
        if (!updatePerfil) return res.status(404).send('User not found');
        console.log("jose");
        res.status(200).json(updatePerfil);
    }

    deletePerfil(req, res) {
        const { country_id } = req.params;
        const result = perfilService.remove(country_id);
        if (!results) return res.status(404).send('Use not found');
        res.status(204).send();

    }
}

module.exports = PerfilController