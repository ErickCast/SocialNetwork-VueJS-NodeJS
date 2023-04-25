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
exports.emailExists = void 0;
const post_1 = __importDefault(require("../models/post"));
const emailExists = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const userEmail = yield post_1.default.findOne({
        where: {
            email
        }
    });
    console.log(userEmail);
    if (userEmail) {
        throw new Error('El email de ese usuario ya existe');
    }
});
exports.emailExists = emailExists;
//# sourceMappingURL=db-validators.js.map