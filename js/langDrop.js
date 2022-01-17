// Language menu

function langDropdown() {
    document.getElementById("langDropdwn").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        var langDropdown = document.getElementById("langDropdwn");
        if (langDropdown.classList.contains("show")) {
            langDropdown.classList.remove("show");
        }
    }
}