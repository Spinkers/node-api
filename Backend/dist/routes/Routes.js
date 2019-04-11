"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContatoController_1 = require("../controllers/ContatoController");
class Routes {
    constructor() {
        this.ContatoController = new ContatoController_1.ContatoController();
    }
    routes(app) {
        // Rota de Contato
        app.route('/contato')
            .get(this.ContatoController.obterContatos)
            .post(this.ContatoController.inserirContato);
        // GET, PUT, DELETE por ID
        app.route('/contato/:idContato')
            .get(this.ContatoController.obterContatoPorId)
            .put(this.ContatoController.atualizarContato)
            .delete(this.ContatoController.deletarContato);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map