var nodecr = require('nodecr');

// Recognise text of any language in any format
nodecr.process('/path/to/image.jpg',function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});

// Need to install language packs in
// /usr/local/share/tessdata
// Recognise Eng text in a single uniform block of text
nodecr.process('/path/to/image.jpg',function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
}, 'eng', 6);
