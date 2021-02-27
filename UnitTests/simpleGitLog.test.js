//const getinfo = require('../simpleGitLog');
import '../simpleGitLog.js';

test ("gets log for merpxm/interview repository...", () => {
  expect(gitinfo()).isArray.toBe(true);
});
