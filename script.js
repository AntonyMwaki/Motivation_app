// Define arrays of motivational quotes
const successQuotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const perseveranceQuotes = [
    "Perseverance is the hard work you do after you get tired of doing the hard work you already did. - Newt Gingrich",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot"
];

const positivityQuotes = [
    "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt"
];

// Function to generate a random motivational message
function generateMotivationalMessage() {
    // Select a random quote from each category
    const randomSuccessQuote = successQuotes[Math.floor(Math.random() * successQuotes.length)];
    const randomPerseveranceQuote = perseveranceQuotes[Math.floor(Math.random() * perseveranceQuotes.length)];
    const randomPositivityQuote = positivityQuotes[Math.floor(Math.random() * positivityQuotes.length)];

    // Combine the quotes into a single message
    const motivationalMessage = `${randomSuccessQuote}\n${randomPerseveranceQuote}\n${randomPositivityQuote}`;

    return motivationalMessage;
}

// Generate and output a motivational message
console.log(generateMotivationalMessage());
