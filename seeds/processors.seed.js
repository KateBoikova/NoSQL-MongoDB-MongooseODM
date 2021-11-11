const { Processor } = require('./models');

const processorsDb = [
  {
    name: 'Apple Ax',
    brand: 'Apple',
  },
  {
    name: 'Mediatek',
    brand: 'Mediatek Inc.',
  },
  {
    name: 'Qualcomm Snapdragon',
    brand: 'Qualcomm Technologies Inc.',
  },
  {
    name: 'HiSilicon Kirin',
    brand: 'HiSilicon Technologies',
  },
];

const processors = Processor.insertMany(processorsDb);
