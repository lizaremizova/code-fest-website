window.onload = () => {
    const countdownElement = document.getElementById('countdown');
    const startDate = new Date('2025-04-14T10:00:00Z'); 

    function updateCountdown() {
        let now = new Date();
        let difference = startDate - now; 

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        countdownElement.textContent = `${days} days ${minutes} min.`;
    }

    setInterval(updateCountdown, 60000);
    updateCountdown();
};
    async function getCatFact() {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const data = await response.json();
            document.getElementById('fact').innerText = data.fact;
        } catch (error) {
            console.error('Error fetching cat fact:', error);
            document.getElementById('fact').innerText = 'Failed to load cat fact.';
        }
    }
