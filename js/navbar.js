// The main dropdown menu

function mainDropdown() {
    document.getElementById("mainDropdown").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        var mainDropdown = document.getElementById("mainDropdown");
        if (mainDropdown.classList.contains("show")) {
            mainDropdown.classList.remove("show");
        }
    }
}