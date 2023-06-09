"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actions_controlle_1 = require("../controllers/actions.controlle");
const router = (0, express_1.Router)();
router.get('/', actions_controlle_1.getActions);
router.get('/:id', actions_controlle_1.getAction);
router.delete('/:id', actions_controlle_1.deleteAction);
router.post('/', actions_controlle_1.postAction);
router.put('/:id', actions_controlle_1.putAction);
exports.default = router;
