import mongoose, { Schema } from 'mongoose';

const ContactSchema = new Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: {
    type: String,
    required: [true, "L'email est obligatoire"],
    unique: true,
  },
  phone: { type: Number },
});

const Contact = mongoose.model('Contact', ContactSchema);

export default Contact;
