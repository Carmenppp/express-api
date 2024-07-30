import express from 'express';
import { findAll, findById, remove, add, updateItem } from './helpers.user.js';
import { checkAuthMidd } from '../../tokenManager/guard.js';
const router = express.Router();

router.get('/', findAll)

router.get('/:id', checkAuthMidd(), findById)
router.post('/', add)
router.put('/:id', checkAuthMidd(), updateItem)
router.delete('/:id', checkAuthMidd(), remove);


export default router;