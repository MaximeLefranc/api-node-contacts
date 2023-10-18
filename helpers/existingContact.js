import { StatusCodes } from 'http-status-codes';

/**
 * Check if this contact exist or not. If contact === null send at client a 404 code with message else if contact exist
 * send at client this contact
 * @param {Object | Null} contact
 * @param {Object} res Object response of express
 */
const existingContact = (contact, res) => {
  if (contact) {
    res.status(StatusCodes.OK).send(contact);
  } else {
    res.status(StatusCodes.NOT_FOUND).send('Contact Introuvable.');
  }
};

export default existingContact;
