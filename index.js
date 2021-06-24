// Main Variables here
var currentdate = new Date();
var route = window.location.pathname;
//console.log("✨ JsRoute [" + currentdate.getHours() + ":" + currentdate.getMinutes() + "] (Error x001) :\n")

Jroute = (routeString, callbackfunction) => {
    // Route Setup  🔽
    if (routeString.startsWith(":")) {
        alert("We Have URL parameter here v2.0")
    } else {
        if (route == routeString) {
            callbackfunction()
        }
    }
};
