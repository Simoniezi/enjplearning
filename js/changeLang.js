// Change between the languages script

function toggleLanguage(language) {
    let test = document.getElementById("test");
    let langOpt = document.getElementById("langOpt");
    let en = document.getElementById("en");
    let da = document.getElementById("da");
    let jp = document.getElementById("jp");
    if (language === "Danish") {
        window.location.replace("indexda.html");
    }
    else if (language === "Japanese") {
        window.location.replace("indexjp.html");
    }
    else {
        window.location.replace("index.html");
    }
}
