var http = require('http');
var url = require('url');
var request = require('request');

var useragent = [];
useragent['iPhone'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';
useragent['iPad'] = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  pathname = pathname.split('/');

  res.writeHead(200, { 'Content-Type': 'text/html' });

  if(pathname.length > 0) {
    device = pathname[1];
    target = pathname[2];

    var options = {
        url: 'http://' + target,
        followRedirect: true,
        followAllRedirects: true,
        headers: {
            'User-Agent': useragent[device]
        }
    };

    request(options).pipe(res);
  }
}).listen(9000);
