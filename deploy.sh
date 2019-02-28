rsync -v -i dist/.htaccess mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/ltd-llc/
rsync -v -i -r \
  --exclude="*.liquid" --exclude="*.psd" --exclude="*.ai" --exclude="*.sh" \
  dist/ mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/thriftbear/

#rsync -v -i -r .htaccess mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/thriftbear/
#rsync -v -i -r *.{html,png,jpg,ico,json} mpeteu@uzabl.com@delta.hostineer.com:/var/www/html/thriftbear/
