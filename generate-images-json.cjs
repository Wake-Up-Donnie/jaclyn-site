const fs = require('fs');
const path = require('path');

const pictureDir = './public/assets/pictures';
const outputFilePath = './src/images.json';

fs.readdir(pictureDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  const pngPictures = files.filter((file) => file.endsWith('.png'));
  fs.writeFile(outputFilePath, JSON.stringify(pngPictures), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }

    console.log('Generated images.json file.');
  });
});