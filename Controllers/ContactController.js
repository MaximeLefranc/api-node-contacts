import Contact from '../Models/Contact.js';
import catchAsync from '../helpers/catchAsync.js';

const ContactController = {};

ContactController.browse = catchAsync(async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

ContactController.add = catchAsync(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.send(contact);
});

ContactController.read = catchAsync(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  res.send(contact);
});

export default ContactController;
