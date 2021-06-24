// Main Variables here
var currentdate = new Date();
var route = window.location.pathname;
//console.log("✨ JsRoute [" + currentdate.getHours() + ":" + currentdate.getMinutes() + "] (Error x001) :\n")

Jroute = (routeString, callbackfunction) => {
    alert(route)
    // Route Setup  🔽
    if (routeString.startsWith(":")) {
        alert("We Have URL parameter here")
    } else {
        if (route == routeString) {
            callbackfunction()
        } else {
            // Route is Wrong
            console.warn("✨ JsRoute [" + currentdate.getHours() + ":" + currentdate.getMinutes() + "] :\n")
        }
    }
};
