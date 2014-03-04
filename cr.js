var nodecr = require('nodecr');
var tmp_jpg = '/tmp/image.jpg';

// Recognise text of any language in any format
nodecr.process(tmp_jpg,function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});

// Need to install language packs in
// /usr/local/share/tessdata
// Recognise Eng text in a single uniform block of text
nodecr.process(tmp_jpg,function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
}, 'eng', 6);
