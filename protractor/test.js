var webdriver = require("webdriverio");
var option = {
    desiredCapabilities: {
        browserName: "firefox"
    }
};

webdriver
    .remote(option)
    .init()
    .url("http://www.google.com")
    .title(function (err, res) {
        console.log("the value " + res.value);
    }).end();
