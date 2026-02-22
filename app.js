function sendMessage() {
    var message = document.getElementById("message").value;

    if (message.trim() !== "") {
        alert("You wrote: " + message);
        document.getElementById("message").value = "";
    } else {
        alert("Please write something!");
    }
}
