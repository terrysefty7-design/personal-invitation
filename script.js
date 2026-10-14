
const openButton = document.getElementById("openButton");
const openingScreen = document.getElementById("openingScreen");
const invitationCard = document.getElementById("invitationCard");
const tapHint = document.getElementById("tapHint");

let invitationOpened = false;

// ===== OPEN INVITATION =====
openButton.addEventListener("click", () => {
    if (invitationOpened) return;

    invitationOpened = true;
    openButton.classList.add("opening");
    tapHint.textContent = "Your little surprise is opening... ♡";
    createHearts(15);

    setTimeout(() => {
        openingScreen.hidden = true;
        invitationCard.hidden = false;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createHearts(12);
    }, 1000);
});

// ===== FLOATING HEARTS =====
function createHearts(amount) {
    const container = document.getElementById("floatingHearts");
    const symbols = ["♡", "♥", "✿", "୨୧"];

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "heart-particle";
        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (12 + Math.random() * 16) + "px";
        heart.style.animationDuration = (5 + Math.random() * 5) + "s";
        heart.style.animationDelay = (Math.random() * 2) + "s";

        container.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}