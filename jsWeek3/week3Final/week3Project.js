const quoteText = document.getElementById('quote-text');
const fetchBtn = document.getElementById("fetch-btn");


async function fetchQuote(){
    quoteText.textContent = "Loading...";

    try {
        const res = await fetch("https://type.fit/api/quotes");

        if (!res.ok) {
            throw new Error(`Error ${res.status}`);
        }

        const data = await res.json();
        const randomQuote = data[Math.random() * data.length];
        quoteText.textContent = `"${randomQuote.text}" — ${randomQuote.author || "Unknown"}`;
    } catch (err){
        quoteText.textContent = "Could not fetch quote";
        console.error("Error:", err.message);
    }
}

fetchBtn.addEventListener('click', fetchQuote);