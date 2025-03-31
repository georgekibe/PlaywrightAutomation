// @ts-check
import {  devices } from '@playwright/test';


const config = ({
  testDir: './tests',
  timeout: 40 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',

  use: {
    browserName: 'chromium'

  },


});

module.exports = config

