const mongoose = require('mongoose');
const { Phone } = require('./../models');

const phonesDb = [
  {
    model: 'Galaxy M22',
    brand: 'Samsung',
    year: 2021,
    memoryStorageCapacity: 128,
    processor: 'Mediatek',
    screenSize: 6.4,
    NFC: true,
  },
  {
    model: 'Redmi Note 10 Pro',
    brand: 'Xiaomi',
    year: 2021,
    memoryStorageCapacity: 64,
    processor: 'Qualcomm Snapdragon',
    screenSize: 6.67,
    NFC: true,
  },
  {
    model: 'Galaxy S20 FE',
    brand: 'Samsung',
    year: 2021,
    memoryStorageCapacity: 128,
    processor: 'Qualcomm Snapdragon',
    screenSize: 6.5,
    NFC: true,
  },
  {
    model: 'P Smart',
    brand: 'Huawei',
    year: 2021,
    memoryStorageCapacity: 128,
    processor: 'HiSilicon Kirin',
    screenSize: 6.67,
    NFC: true,
  },
  {
    model: '5.4',
    brand: 'Nokia',
    year: 2021,
    memoryStorageCapacity: 64,
    processor: 'Qualcomm Snapdragon',
    screenSize: 6.39,
    NFC: true,
  },
  {
    model: 'G30',
    brand: 'Motorola',
    year: 2021,
    memoryStorageCapacity: 128,
    processor: 'Qualcomm Snapdragon',
    screenSize: 6.5,
    NFC: true,
  },
  {
    model: '12 mini',
    brand: 'Apple',
    year: 2021,
    memoryStorageCapacity: 128,
    processor: 'Apple Ax',
    screenSize: 5.4,
    NFC: true,
  },
];

const phones = Phone.insertMany(phonesDb);
