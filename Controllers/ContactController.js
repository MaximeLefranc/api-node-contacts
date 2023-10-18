import Contact from '../Models/Contact.js';
import catchAsync from '../helpers/catchAsync.js';
import existingContact from '../helpers/existingContact.js';
import checkIsMongooseIdType from '../helpers/checkIsMongooseIdType.js';
import { StatusCodes } from 'http-status-codes';

const ContactController = {};

ContactController.browse = catchAsync(async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts);
});

ContactController.add = catchAsync(async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    res.send(await newContact.save());
  } catch (err) {
    console.error(err.message);
    res.status(StatusCodes.BAD_REQUEST).send(err.message);
  }
});

ContactController.read = catchAsync(async (req, res) => {
  const { id } = req.params;
  checkIsMongooseIdType(id, res);
  const contact = await Contact.findById(id);
  existingContact(contact, res);
});

ContactController.update = catchAsync(async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  checkIsMongooseIdType(id, res);
  const contact = await Contact.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });
  existingContact(contact, res);
});

ContactController.delete = catchAsync(async (req, res) => {
  const { id } = req.params;
  checkIsMongooseIdType(id, res);
  const contact = await Contact.findByIdAndDelete(id);
  existingContact(contact, res);
});

export default ContactController;
