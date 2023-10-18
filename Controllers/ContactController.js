import Contact from '../Models/Contact.js';
import catchAsync from '../helpers/catchAsync.js';
import existingContact from '../helpers/existingContact.js';

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
  existingContact(contact, res);
});

ContactController.update = catchAsync(async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, body, { new: true });
  existingContact(contact, res);
});

ContactController.delete = catchAsync(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findByIdAndDelete(id);
  existingContact(contact, res);
});

export default ContactController;
