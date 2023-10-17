import Contact from '../Models/Contact.js';
import catchAsync from '../helpers/catchAsync.js';

const ContactController = {};

ContactController.browse = catchAsync(async (req, res) => {
  const contacts = await Contact.find();
  console.log(contacts);
  res.send(contacts);
});

ContactController.add = catchAsync(async (req, res) => {
  console.log('req.body = ', req.body);
  const contact = await Contact.create(req.body);
  res.send(contact);
});

export default ContactController;
