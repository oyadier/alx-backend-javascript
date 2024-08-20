
// Date: 2021-06-13
const displayMessage = require('./0-console');
test('synchronous passing test', () => {
  const originalLog = console.log;
  console.log = jest.fn(); // Mock console.log

  // Call the function
  displayMessage('Hello JS!');

  // Verify the output
  expect(console.log).toHaveBeenCalledWith('Hello JS!');

  // Restore the original console.log
  console.log = originalLog;
});
