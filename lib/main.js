// Import the page-mod API
var pageMod = require("sdk/page-mod");

// Import the self API
var data = require("sdk/self").data;

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: "*.talkgadget.google.com",
    contentScriptFile: [
        data.url("jquery-2.1.1.min.js"),
        data.url("hang-notify.js")
    ],
    contentScriptWhen: "ready"
});