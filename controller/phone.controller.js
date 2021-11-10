const createError = require('http-errors');
const { Phone } = require('./../models');

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const newPhoneInstance = new Phone(body);
    const createdPhone = await newPhoneInstance.save();
    if (createdPhone) {
      res.status(200).send(createdPhone);
    }
    next(createError(400, 'Bad request'));
  } catch (e) {
    next(e);
  }
};

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.find();
    res.status(200).send({ data: foundPhones });
  } catch (e) {
    next(e);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  try {
    const foundPhone = await Phone.findById(phoneId);
    if (foundPhone) {
      res.status(200).send({ data: foundPhone });
    }
    next(createError(404, 'Phone not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.updatePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const updatedPhone = await Phone.findOneAndDelete(phoneId, body, {
      runValidators: true,
      new: true,
    });
    if (updatedPhone) {
      return res.status(200).send({ data: updatedPhone });
    }
    next(createError(404, 'Not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;

  try {
    const deletedPhone = await Phone.findByIdAndDelete(phoneId);
    if (deletedPhone) {
      return res.status(200).send({ data: deletedPhone });
    }
    next(createError(404, 'Not found'));
  } catch (err) {
    next(err);
  }
};
