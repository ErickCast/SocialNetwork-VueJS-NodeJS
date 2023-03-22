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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.searchUser = exports.getUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const sequelize_1 = require("sequelize");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        return res.status(404).json({
            msg: 'No se encontro ningun usuario'
        });
    }
});
exports.getUser = getUser;
const searchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    const user = yield user_1.default.findAll({
        where: {
            name: {
                [sequelize_1.Op.like]: `%${name}%`
            }
        }
    });
    if (user) {
        res.json(user);
    }
    else {
        return res.status(404).json({
            msg: 'No se encontro ningun usuario'
        });
    }
});
exports.searchUser = searchUser;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const userAdd = yield user_1.default.create(Object.assign({}, user));
    if (userAdd) {
        res.json(user);
    }
    else {
        return res.status(404).json({
            msg: 'No se inserto ningun usuario'
        });
    }
});
exports.registerUser = registerUser;
//# sourceMappingURL=user.js.map