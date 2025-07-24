const yes = document.getElementById("yes");
const no = document.getElementById("no");
const h1 = document.getElementById("h");
const p = document.getElementById("text");
const gif = document.getElementById("gif");

let noClickCount = 0;

const noMessages = [
    "Are you sure? :(( pls forgib me",
    "Really sure? :(",
    "Please? 🥺",
    "I'll feed you pani puri",
    "BABY STOP",
    "Please? 😔"
];
const nogifs = [
    "Images/sad.gif",
    "Images/sad1.gif",
    "Images/sad2.gif",
    "Images/sad3.gif",
    "Images/sad4.gif",
    "Images/sad5.gif"
];
yes.addEventListener("click", () => {
    p.textContent = "Yayyyy!! I love you so much mwaaahhhh";
    p.style.fontSize = "30px";
    p.style.fontWeight = "bold";
    p.style.marginLeft = "60px";
    h1.textContent = "";
    gif.src = "Images/cat-dance-cat.gif";
    yes.remove();
    no.remove();
});

no.addEventListener("click", () => {
    

    // Shrink the "No" button
    const scale = Math.max(0.2, 1 - noClickCount * 0.1); // Minimum scale is 0.2
    no.style.transform = `scale(${scale})`;

    // Change the message
    if (noClickCount < noMessages.length) {
        p.textContent = noMessages[noClickCount];
        gif.src = nogifs[noClickCount];
    } else {
        p.textContent = "okay click kar chup chaap";
        no.remove();
        gif.src = "Images/angry.gif";
    }

    p.style.fontSize = "30px";
    p.style.fontWeight = "bold";
    p.style.marginLeft = "40px";
    h1.textContent = "";
    

    // Optional: disable the "no" button after too many clicks
    if (scale <= 0.2) {
        no.disabled = true;
    }

    // Also change "Yes" button text to be more tempting
    yes.textContent = "okayy :)";
    noClickCount++;
});
