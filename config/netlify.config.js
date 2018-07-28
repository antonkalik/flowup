const fs = require('fs');
const fileName = '_redirects';

fs.copyFile(`config/${fileName}`, `dist/${fileName}`, e => {
  if (e) throw e;
  console.log(`Saving netlify ${fileName} file...`);
});