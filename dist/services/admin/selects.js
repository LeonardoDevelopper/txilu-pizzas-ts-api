"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminSelects = void 0;
const server_1 = require("../../server/server");
const { randomUUID } = require("crypto");
const sequelize_1 = require("sequelize");
class AdminSelects {
    constructor() {
        this.UUID = randomUUID;
    }
    getTable(name) {
        console.log(server_1.Server.getDatabaseTables());
        const aux = server_1.Server.getDatabaseTables().find((model) => name == model.getTableName());
        return aux;
    }
    response(status, message, data) {
        if (status) {
            return {
                OK: status,
                message: message,
                data: data
            };
        }
        else {
            return {
                OK: status,
                messageError: message
            };
        }
    }
    getAccount(any, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const admins = this.getTable('ADMINs');
            if (typeof admins != 'undefined') {
                return yield admins.findOne({
                    where: {
                        [sequelize_1.Op.or]: [
                            { EMAIL: any },
                            { PHONE_NUMBER: any },
                        ],
                        PASS_WORD: password,
                    }
                })
                    .then((data) => data ? this.response(true, 'Logado com sucesso!', data) : this.response(true, 'Email ou senha errada'))
                    .catch((error) => this.response(false, error.name));
            }
            return this.response(false, 'Error: model is type of undefined  : (');
        });
    }
    getEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const admins = this.getTable('ADMINs');
            if (typeof admins != 'undefined') {
                return yield admins.findOne({
                    attributes: ['EMAIL'],
                    where: {
                        EMAIL: email
                    }
                })
                    .then((data) => data ? this.response(true, 'Encontramos a sua conta ', data) : this.response(false, 'Não existe nenhum usuário com este Email'))
                    .catch((error) => this.response(false, error.name));
            }
            return this.response(false, 'Error: model is type of undefined  : (');
        });
    }
    getCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            const categories = this.getTable('CATEGORies');
            if (typeof categories != 'undefined') {
                return yield categories.findAll()
                    .then((data) => this.response(true, 'Todas as categorias', data))
                    .catch((error) => this.response(false, error.name));
            }
            return this.response(false, 'Error: model is type of undefined  : (');
        });
    }
    getPizzas() {
        return __awaiter(this, void 0, void 0, function* () {
            const pizzas = this.getTable('PIZZAs');
            if (typeof pizzas != 'undefined') {
                return yield pizzas.findAll()
                    .then((data) => this.response(true, 'Todas as pizzas', data))
                    .catch((error) => this.response(false, error.name));
            }
            return this.response(false, 'Error: model is type of undefined  : (');
        });
    }
    getPizzaInfo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const pizzas = this.getTable('PIZZAs');
            const igredients = this.getTable('IGREDIENTs');
            const categories = this.getTable('CATEGORies');
            if (typeof pizzas != 'undefined' && typeof igredients != 'undefined' && typeof categories != 'undefined') {
                return yield pizzas.findByPk(id, { include: [categories, igredients] })
                    .then((data) => this.response(true, 'Todas as pizzas', data))
                    .catch((error) => this.response(false, error.name));
            }
            return this.response(false, 'Error: model is type of undefined  : (');
        });
    }
}
exports.AdminSelects = AdminSelects;
