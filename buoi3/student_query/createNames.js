const bl = require('bl');
const fs = require('fs');
const https = require('https')
function generateNames() {
  nameTypes = ['male', 'female', 'surnames']
  for(let i = 0; i < nameTypes.length; i ++) {
    https.get(getUrl(nameTypes[i]), function (response) {
      response.pipe(bl(function (error, data) {
        if (error) console.log(error)
        else{
          fs.writeFile('data/' + nameTypes[i] + '.json', data, 'utf8', function (err) {
            if (err) {
              console.log("An error occured while writing JSON Object to File.");
              return console.log(err);
            }
            console.log("JSON file has been saved.");
          })
        }
      }))
    })
  }
}

function getUrl(nameType) {
  return `https://www.randomlists.com/data/names-${nameType}.json`
}

generateNames()