import { StatusCodes } from 'http-status-codes';
import { Types } from 'mongoose';

/**
 * Check if ID given have a good format type for mongoDB
 * @param {String} id Contact id
 * @param {Object} res Object response of express
 */
const checkIsMongooseIdType = (id, res) => {
  try {
    new Types.ObjectId(id);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.BAD_REQUEST).send("Format de l'id invalide");
  }
};

export default checkIsMongooseIdType;
