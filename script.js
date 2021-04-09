var correctButton = 0

function selectCorrectButton() {
    correctButton = Math.floor((Math.random() * 3) + 1)
}

function showMessage(clicked_id) {
    if (clicked_id == correctButton) {
        document.getElementById("message").innerHTML = "You win!"
        document.getElementById("message").style.color = "green"
        document.getElementById("1").disabled = "true"
        document.getElementById("2").disabled = "true"
        document.getElementById("3").disabled = "true"
    } else {
        document.getElementById("message").innerHTML = "Wrong button. Try again!"
        document.getElementById("message").style.color = "red"
    }
}