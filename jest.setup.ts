import '@testing-library/jest-dom';

require('jest-fetch-mock').enableMocks();
require('mutationobserver-shim');

jest.mock('axios');
jest.setTimeout(8000);

// eslint-disable-next-line no-console
const consoleError = console.error;
// eslint-disable-next-line no-console
console.error = jest.fn((...args) => {
  const [error] = args;
  const skipMessages = [
    'Browser does not support SVG',
    "Content type isn't valid",
    'Could not convert the src',
    'Error parsing input',
    'Expected `%s` listener',
    'fetch is not a function',
    'Missing src',
    'Not found',
  ];

  if (!skipMessages.some((d) => error.toString().includes(d))) {
    // consoleError(...args);
  }
});
