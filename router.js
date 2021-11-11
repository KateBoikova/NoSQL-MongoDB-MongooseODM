const { Router } = require('express');
const phoneRouter = require('./routes/phoneRouter');
const processorRouter = require('./routes/processorRouter');

const router = Router();

router.use('/phones', phoneRouter);
router.use('/processors', processorRouter);

module.exports = router;
