var page = require('webpage').create();  
page.open('http://www.amazon.com/dp/B00DTPYT78/', function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var p = page.evaluate(function () {
            return document.getElementById('priceblock_ourprice').innerHTML
        });
        console.log(p);
    }
    phantom.exit();
});
