function checkMood() {
    const mood = document.getElementById("mood-select").value;
    const messageElement = document.getElementById("message");

    if (mood === "happy") {
        messageElement.textContent = "Yay! Keep smiling☺️";
    }else if (mood === "sad") {
        messageElement.textContent = "Aww, it's okay to feel sad sometimes. Here's a hug😢";
    }else if (mood === "excited") {
        messageElement.textContent = "Woohoo! Enjoy your excitement🎉";
    }else if (mood === "tired") {
        messageElement.textContent = "Time to rest! Sweet dreams😴";
    }else {
        messageElement.textContent = "";
    }
}