const mongoose = require('mongoose');
const { Phone } = require('../models');

const phonesDb = [
  {
    model: 'Galaxy M22',
    brand: 'Samsung',
    year: 2021,
    memoryStorageCapacity: 128,
    processorId: mongoose.Types.ObjectId('618c19159f1e65eb3968754d'),
    screenSize: 6.4,
    NFC: true,
  },
  {
    model: 'Redmi Note 10 Pro',
    brand: 'Xiaomi',
    year: 2021,
    memoryStorageCapacity: 64,
    processorId: mongoose.Types.ObjectId('618c19979f1e65eb39687550'),
    screenSize: 6.67,
    NFC: true,
  },
  {
    model: 'Galaxy S20 FE',
    brand: 'Samsung',
    year: 2021,
    memoryStorageCapacity: 128,
    processorId: mongoose.Types.ObjectId('618c19979f1e65eb39687550'),
    screenSize: 6.5,
    NFC: true,
  },
  {
    model: 'P Smart',
    brand: 'Huawei',
    year: 2021,
    memoryStorageCapacity: 128,
    processorId: mongoose.Types.ObjectId('618c19bd9f1e65eb39687552'),
    screenSize: 6.67,
    NFC: true,
  },
  {
    model: '5.4',
    brand: 'Nokia',
    year: 2021,
    memoryStorageCapacity: 64,
    processorId: mongoose.Types.ObjectId('618c19979f1e65eb39687550'),
    screenSize: 6.39,
    NFC: true,
  },
  {
    model: 'G30',
    brand: 'Motorola',
    year: 2021,
    memoryStorageCapacity: 128,
    processorId: mongoose.Types.ObjectId('618c19979f1e65eb39687550'),
    screenSize: 6.5,
    NFC: true,
  },
  {
    model: '12 mini',
    brand: 'Apple',
    year: 2021,
    memoryStorageCapacity: 128,
    processorId: mongoose.Types.ObjectId('618c19d99f1e65eb39687555'),
    screenSize: 5.4,
    NFC: true,
  },
];

const phones = Phone.insertMany(phonesDb);
