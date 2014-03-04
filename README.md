# Testing nodecr on AWS EC2 instance #

## Installing nodecr ##

**nodecr** requires [tesseract-ocr](https://code.google.com/p/tesseract-ocr/) which in turn requires [Leptonica](http://leptonica.com/)

***Packages needed for compile to work***

	    # May not required for you
	    sudo yum -y update 
	    sudo yum -y install libtiff libtiff-devel libjpeg-devel libpng-devel gcc gcc-c++ libtool

***Install Leptonica***

	    cd /tmp
	    wget http://www.leptonica.org/source/leptonlib-1.67.tar.gz
        sudo gunzip leptonlib-1.67.tar.gz
        $sudo tar -xvf leptonlib-1.67.tar
        cd leptonlib-1.67/
        sudo ./configure
        sudo make 
        # Takes a little while
        sudo make install

***Install tesseract-ocr***

        cd /tmp/
        sudo wget http://tesseract-ocr.googlecode.com/files/tesseract-3.00.tar.gz
        sudo gunzip tesseract-3.00.tar.gz
        sudo tar -xvf tesseract-3.00.tar
        cd tesseract-3.00/
        sudo ./runautoconf
        sudo ./configure
        sudo make
        # Takes a little while
        sudo make install 

        # Install English Data
        cd /tmp
        sudo wget http://tesseract-ocr.googlecode.com/files/eng.traineddata.gz
        cd /usr/local/share/tessdata
        sudo gzip -d /tmp/eng.traineddata.gz

***Install nodecr***

        sudo npm install -g nodecr

###Running Test script###

        cd /tmp
        # copy a jpg file to /tmp/image.jpg

        git clone https://github.com/nanusdad/ocr.git
        cd ocr
        node cr.js

        # All done ! 
