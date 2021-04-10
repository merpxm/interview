//const getinfo = require('../simpleGitLog');
import ApiGetLog from '../ApiGetLog';
const value = [];

  test ("gets log for merpxm/interview repository...", () => {
    const response = ApiGetLog.getLog();
    response.then(value =>{
      console.log(value);
    })
    expect(value.isArray.toBe(true)

  });
