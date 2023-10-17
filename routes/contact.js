import { Router } from 'express';
import ContactController from '../Controllers/ContactController.js';

const contactRouter = Router();

contactRouter.post('/', ContactController.create);

export default contactRouter;
