const createError = require('http-errors');
const mongoose = require('mongoose');
const { Processor } = require('./../models');

module.exports.createProcessor = async (req, res, next) => {
  const { body } = req;
  try {
    const newProcessorInstance = new Processor(body);
    const createdProcessor = await newProcessorInstance.save();
    if (createdProcessor) {
      return res.status(200).send(createdProcessor);
    }
    next(createError(400, 'Bad request'));
  } catch (e) {
    next(e);
  }
};

module.exports.getProcessors = async (req, res, next) => {
  try {
    const foundProcessors = await Processor.find();
    res.status(200).send({ data: foundProcessors });
  } catch (e) {
    next(e);
  }
};

module.exports.getProcessorById = async (req, res, next) => {
  const {
    params: { processorId },
  } = req;
  try {
    const foundProcessor = await Processor.findById(processorId);
    if (foundProcessor) {
      res.status(200).send(foundProcessor);
    }
    next(createError(404, 'Not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.updateProcessorById = async (req, res, next) => {
  const {
    params: { processorId },
  } = req;
  try {
    const updatedProcessor = await Processor.findOneAndUpdate(
      processorId,
      body,
      {
        runValidators: true,
        new: true,
      }
    );
    if (updatedProcessor) {
      return res.status(200).send({ data: updatedProcessor });
    }
    next(createError(404, 'Not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.deleteProcessorById = async (req, res, next) => {
  const {
    params: { processorId },
  } = req;
  try {
    const deletedProcessor = await Processor.findByIdAndDelete(processorId);
    if (deletedProcessor) {
      return res.status(200).send({ data: deletedProcessor });
    }
    next(createError(404, 'Not found'));
  } catch (e) {
    next(e);
  }
};

module.exports.getPhonesWithThisProcessor = async (req, res, next) => {
  const {
    params: { processorId },
  } = req;
  try {
    const foundProcessor = await Processor.findById(processorId);
    if (foundProcessor) {
      const foundProcessorPhones = await Processor.aggregate()
        .match({ _id: mongoose.Types.ObjectId(processorId) })
        .lookup({
          from: 'phones',
          localField: '_id',
          foreignField: 'processorId',
          as: 'processorPhones',
        })
        .project({
          _id: 0,
          processorPhones: {
            model: 1,
            brand: 1,
            year: 1,
            memoryStorageCapacity: 1,
            screenSize: 1,
            NFC: 1,
          },
        });
      return res.status(200).send(foundProcessorPhones);
    }
    next(createError(404, 'Not found'));
  } catch (e) {
    next(e);
  }
};
