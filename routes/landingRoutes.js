import express from 'express';

import { notify } from '../controllers/landingControllers.js';

const landingRouter = express.Router();

landingRouter.post('/', notify);

export default landingRouter;
