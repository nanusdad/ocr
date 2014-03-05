#nodecr on AWS EC2 instance#

##Installing nodecr##

**nodecr** requires [tesseract-ocr](https://code.google.com/p/tesseract-ocr/) which in turn requires [Leptonica](http://leptonica.com/)

***Packages needed for compile to work***

	    # May not be required for you
	    sudo yum -y update 
	    sudo yum -y install libtiff libtiff-devel libjpeg-devel libpng-devel gcc gcc-c++ libtool

***Install Leptonica***

	    cd /tmp
	    wget http://www.leptonica.com/source/leptonica-1.70.tar.gz
        sudo gunzip leptonlib-1.70.tar.gz
        $sudo tar -xvf leptonlib-1.70.tar
        cd leptonica-1.70/
        sudo ./configure
        sudo make 
        # Takes a little while
        sudo make install

***Install tesseract-ocr***

        cd /tmp/
        sudo wget https://tesseract-ocr.googlecode.com/files/tesseract-ocr-3.02.02.tar.gz
        sudo gunzip tesseract-3.02.02.tar.gz
        sudo tar -xvf tesseract-3.02.02.tar
        cd tesseract-3.02.02/
        sudo ./autogen.sh
        sudo ./configure
        sudo make
        # Takes a little while
        sudo make install 

        # Install English Data
        cd /tmp
        sudo wget https://tesseract-ocr.googlecode.com/files/tesseract-ocr-3.02.eng.tar.gz
        cd /usr/local/share/tessdata
        gzip -d /tmp/tesseract-ocr-3.02.eng.tar.gz
	tar xfv /tmp/tesseract-ocr-3.02.eng.tar

***Install nodecr***

        sudo npm install -g nodecr

###Running Test script###

        cd /tmp
        # copy a jpg file to /tmp/image.jpg

        git clone https://github.com/nanusdad/ocr.git
        cd ocr
        node cr.js

        # All done !

__Thanks to info at [silverbiology](http://www.silverbiology.com/blog/2011/03/10/amazon-ec2-tesseract-ocr-thank-you/)__
