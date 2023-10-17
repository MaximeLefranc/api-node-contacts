import Contact from '../Models/Contact.js';

const ContactController = {};

ContactController.create = async (req, res) => {
  console.log('req.body = ', req.body);
  const contact = await Contact.create(req.body);
  res.send(contact);
};

export default ContactController;
