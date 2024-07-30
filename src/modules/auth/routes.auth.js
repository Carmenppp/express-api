import express from 'express';
import { loginUser} from './helpers.auth.js';

const router = express.Router();

router.get('/login', loginUser);



export default router;