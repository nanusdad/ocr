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
sudo tar -xvf leptonlib-1.67.tar
cd leptonlib-1.67/
sudo ./configure
sudo make
=== WAIT 10 min ===
sudo make install

cd /tmp/
sudo wget http://tesseract-ocr.googlecode.com/files/tesseract-3.00.tar.gz
sudo gunzip tesseract-3.00.tar.gz
sudo tar -xvf tesseract-3.00.tar
cd tesseract-3.00/
sudo ./runautoconf
sudo ./configure
sudo make
=== WAIT 20 min ===
sudo make install

#===================
#Install English Data
#===================
cd /usr/local/share/tessdata
sudo wget http://tesseract-ocr.googlecode.com/files/eng.traineddata.gz
sudo gzip -d eng.traineddata.gz