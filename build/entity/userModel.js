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
exports.UserModel = void 0;
const database_1 = __importDefault(require("../config/database"));
class UserModel {
    static create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fname, lname, email, contact } = user;
            const result = yield database_1.default.query('INSERT INTO user(fname, lname, email, contact) VALUES ($1, $2, $3, $4) RETURNING *', [fname, lname, email, contact]);
            return result.rows[0];
        });
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM user');
            return result.rows;
        });
    }
    static findByName(fname) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('SELECT * FROM user WHERE fname = $1', [fname]);
            return result.rows[0];
        });
    }
    static delete(fname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('DELETE FROM user WHERE fname = $1', [fname]);
        });
    }
}
exports.UserModel = UserModel;
