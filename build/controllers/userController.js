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
exports.userController = void 0;
const userModel_1 = require("../entity/userModel");
class userController {
    static createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.UserModel.create(req.body);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    static getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.UserModel.findAll();
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    static getUserByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userModel_1.UserModel.findByName(req.body.fname);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ message: 'User not Found' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
    static deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield userModel_1.UserModel.delete(req.body.fname);
                res.status(200).json({ message: 'User deleted' });
            }
            catch (error) {
                res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.userController = userController;
