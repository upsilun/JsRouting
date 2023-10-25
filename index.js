// Main Variables here
var currentdate = new Date();
var route = window.location.pathname;

class JsRoute {
    get = (routeString, callbackfunction) => {
        if (routeString.startsWith("/:")) {
            var parameterRoute = route.replace("/", "");
            callbackfunction(parameterRoute);
            return parameterRoute
        } else {
            if (route == routeString) {
                callbackfunction()
            } else {
                console.log("✨ JsRoute [" + currentdate.getHours() + ":" + currentdate.getMinutes() + "] :\nRouting System Is Active");
                console.log("\n");
            }
        }
    };
}
