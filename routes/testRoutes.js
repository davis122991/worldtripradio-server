import express from 'express';

import { test } from '../controllers/testControllers.js';

const testRouter = express.Router();

testRouter.get('/', test);

export default testRouter;
