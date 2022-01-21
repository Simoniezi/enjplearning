// Change between the languages script

function toggleLanguage(language) {
    if (language === "Danish") {
        if (window.location === "index.html" || "indexjp.html") {
            window.location.replace("indexda.html");
        } else if (window.location === "../pages/about.html" || "../pages/aboutjp.html") {
            window.location.replace("../pages/aboutda.html");
        } else {
            return;
        };
    } else if (language === "Japanese") {
        if (window.location === "index.html" || "indexda.html") {
            window.location.replace("indexjp.html");
        } else {
            return;
        };
    } else {
        if (window.location === "indexda.html" || "indexjp.html") {
            window.location.replace("index.html");
        } else if (window.location === "../pages/aboutda.html" || "../pages/aboutjp.html") {
            window.location.replace("../pages/about.html");
        };
    };
};