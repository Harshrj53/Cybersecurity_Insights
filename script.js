document.addEventListener("DOMContentLoaded", () => {
    const movingText = document.querySelector(".moving-text");

    setInterval(() => {
        const colors = ["#a020f0", "#b567ff", "#9d4edd"];
        movingText.style.color = colors[Math.floor(Math.random() * colors.length)];
    }, 1000);
});
