/* eslint no-console: 0 */
/* eslint unicorn/no-process-exit: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
const ghPages = require('gh-pages');

ghPages.publish(
  'public',
  {
    branch: 'master',
  },
  error => {
    if (error) {
      console.error(error);
      process.exit(1);
    }
    console.log('\nPublished to master\n');
  }
);
