// Code written by Kwdk with simple logic of a free API from unshorten.me

function unshorten() {
    const container = document.querySelector('.container');
    container.classList.add('active');

    const shortenedLink = document.getElementById('shortenedLink').value;

    //Start API request from Unshorten.me
    //fetch(`https://oxuyz.ca/api/${crypteds(Link)}`)
        
fetch(`https://unshorten.me/json/${encodeURIComponent(shortenedLink)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('API request failed.');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                const unshortenedLink = data.resolved_url;
                document.getElementById('result').textContent = `Unshortened URL: ${unshortenedLink}`;
            } else {
                document.getElementById('result').textContent = 'Not able to unshort the URL.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred.';
        });
}