import { Router } from 'express';
import ContactController from '../Controllers/ContactController.js';

const contactRouter = Router();

contactRouter.post('/', ContactController.add);
contactRouter.get('/', ContactController.browse);
contactRouter.get('/:id', ContactController.read);
contactRouter.patch('/:id', ContactController.update);
contactRouter.delete('/:id', ContactController.delete);

export default contactRouter;
