document.getElementById('url-shortner').addEventListener('submit', function(e) {
    e.preventDefault();

    let longUrl = document.getElementById('long-url').value;

    if (longUrl){
        const shortUrl = generateShortUrl(longUrl);
        displayShortUrl(shortUrl);
    }
});

function generateShortUrl(longUrl) {
    // Generate a short url
    // A simple hash function to create a short URL 
    const hash = btoa(longUrl).slice(0, 8);
    return `https://short.url/${hash}`;
}

function displayShortUrl(shortUrl) {
    // Display the short url
    const resultDiv = document.getElementById('url-result');
    const shortUrlLink = document.getElementById('shortened-url');

    shortUrlLink.href = shortUrl;
    shortUrlLink.textContent = shortUrl;
    resultDiv.classList.remove('hidden');
}