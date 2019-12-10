function booksFunction() {
    var checkBox = document.getElementById("bok");
    var text = document.getElementById("books");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function tabletFunction() {
    var checkBox = document.getElementById("tab")
    var text = document.getElementById("tablets");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function softFunction() {
    var checkBox = document.getElementById("soft")
    var text = document.getElementById("software");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function noteFunction() {
    var checkBox = document.getElementById("not")
    var text = document.getElementById("notebook");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function creiFunction() {
    var checkBox = document.getElementById("crei")
    var text = document.getElementById("crions");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}