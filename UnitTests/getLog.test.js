const getInfo = require('../getLog');

test ("gets log for merpxm/interview repository...", () => {
  expect(getInfo()).isArray.toBe(true);
});
