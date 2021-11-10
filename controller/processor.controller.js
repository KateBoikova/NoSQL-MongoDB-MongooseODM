const createError = require('http-errors');
const { Processor } = require('./../models');

module.exports.createProcessor = async (req, res, next) => {
  const { body } = req;
  try {
    const newProcessorInstance = new Processor(body);
    const createdProcessor = await newProcessorInstance.save();
    if (createdProcessor) {
      res.status(200).send(createdProcessor);
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
