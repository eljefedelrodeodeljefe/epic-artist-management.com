const fs = require('fs')

fs.createReadStream(__dirname + '/index.html')
  .pipe(fs.createWriteStream(__dirname + '/build/index.html'))
