// Change between the languages script

function toggleLanguage(language) {
    let test = document.getElementById("test");
    let langOpt = document.getElementById("langOpt");
    let en = document.getElementById("en");
    let da = document.getElementById("da");
    let jp = document.getElementById("jp");
    if (language === "Danish") {
        test.innerHTML = "DET HER ER HJEM";
        langOpt.innerHTML = "Sprog" + "<i class='fa fa-caret-down' style='padding-left: 4px;'></i>";
        en.innerHTML = "Engelsk";
        da.innerHTML = "Dansk";
        jp.innerHTML = "Japansk";
    }
    else if (language === "Japanese") {
        test.innerHTML = "これはホームだ";
        langOpt.innerHTML = "言語" + "<i class='fa fa-caret-down' style='padding-left: 4px;'></i>";
        en.innerHTML = "英語";
        da.innerHTML = "デンマーク語";
        jp.innerHTML = "日本語";
    }
    else {
        test.innerHTML = "THIS IS HOME";
        langOpt.innerHTML = "Language" + "<i class='fa fa-caret-down' style='padding-left: 4px;'></i>";
        en.innerHTML = "English";
        da.innerHTML = "Danish";
        jp.innerHTML = "Japanese";
    }
}
