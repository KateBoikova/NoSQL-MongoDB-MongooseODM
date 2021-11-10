const { Router } = require('express');
const phoneRouter = require('./routes/phoneRouter');

const router = Router();

router.use('/phones', phoneRouter);
router.use('/processors', processorController);

module.exports = router;
