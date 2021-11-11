const { Router } = require('express');
const { processorController } = require('../controller');

const processorRouter = Router();

processorRouter
  .route('/')
  .get(processorController.getProcessors)
  .post(processorController.createProcessor);

processorRouter
  .route('/:processorId')
  .get(processorController.getProcessorById)
  .patch(processorController.updateProcessorById)
  .delete(processorController.deleteProcessorById);

processorRouter.get(
  '/:processorId/phones',
  processorController.getPhonesWithThisProcessor
);

module.exports = processorRouter;
