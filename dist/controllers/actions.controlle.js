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
exports.putAction = exports.postAction = exports.deleteAction = exports.getAction = exports.getActions = void 0;
const action_1 = __importDefault(require("../models/action"));
const getActions = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listAction = yield action_1.default.findAll();
    response.json({
        listAction
    });
});
exports.getActions = getActions;
const getAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const listAction = yield action_1.default.findByPk(id);
    if (listAction) {
        response.json({
            listAction
        });
    }
    else {
        response.status(404).json({
            msg: `El dato no existe ${id}`
        });
    }
});
exports.getAction = getAction;
const deleteAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const listAction = yield action_1.default.findByPk(id);
    if (!listAction) {
        response.status(404).json({
            msg: `El dato no existe ${id}`
        });
    }
    else {
        yield listAction.destroy();
        response.json({
            msg: `La acción se ejecutó con éxito `
        });
    }
});
exports.deleteAction = deleteAction;
const postAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = request;
    try {
        yield action_1.default.create(body);
        response.json({
            msg: `La acción se ejecutó con éxito `
        });
    }
    catch (error) {
        response.status(404).json({
            msg: `Error`,
            error
        });
    }
});
exports.postAction = postAction;
const putAction = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const { body } = request;
    const listAction = yield action_1.default.findByPk(id);
    if (!listAction) {
        response.status(404).json({
            msg: `El dato no existe ${id}`
        });
    }
    else {
        yield listAction.update(body);
        response.json({
            msg: `La acción se ejecutó con éxito `
        });
    }
});
exports.putAction = putAction;
