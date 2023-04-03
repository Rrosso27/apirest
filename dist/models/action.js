"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Action = connection_1.default.define('Action', {
    date: {
        type: sequelize_1.DataTypes.STRING
    },
    method: {
        type: sequelize_1.DataTypes.STRING
    },
    consulted: {
        type: sequelize_1.DataTypes.STRING
    },
    returned_data: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Action;
