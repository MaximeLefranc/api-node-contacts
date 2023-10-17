import { Router } from 'express';
import ContactController from '../Controllers/ContactController.js';

const contactRouter = Router();

contactRouter.get('/', ContactController.browse);
contactRouter.post('/', ContactController.add);

export default contactRouter;
