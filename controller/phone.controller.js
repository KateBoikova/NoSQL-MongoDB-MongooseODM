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
