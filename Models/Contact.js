import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, unique: true },
  phone: { type: Number },
});

const Contact = mongoose.Model('Contact', ContactSchema);

export default Contact;
