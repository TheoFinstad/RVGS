const people = [
    { name: 'Laila Johanne Handelsby', title: 'Rektor', img: 'bilde1.jpg' },
    { name: 'Torben Andersen', title: 'Assisterende rektor', img: 'bilde2.jpg' },
    { name: 'Martin Sandø-Frank', title: 'Studieleder', img: 'bilde3.jpg' },
    { name: 'Cathrine Mannsåker', title: 'Undervisningsleder', img: 'bilde4.jpg' },
    { name: 'Anette Øwre Bollvåg', title: 'Undervisningsleder', img: 'bilde5.jpg' },
    { name: 'Anne Raastad-Hoel', title: 'Undervisningsleder', img: 'bilde6.jpg' },
    { name: 'Erik Bergerud', title: 'Undervisningsleder', img: 'bilde7.jpg' },
    { name: 'Camilla Engberg', title: 'Undervisningsleder', img: 'bilde8.jpg' },
    { name: 'Sissel Moen', title: 'Administrasjonsleder', img: 'bilde9.jpg' },
];

function displayResults(matches) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (matches.length === 0) {
        resultsContainer.innerHTML = '<p>Ingen personer funnet.</p>';
        return;
    }

    matches.forEach(person => {
        const personCard = document.createElement('div');
        personCard.classList.add('result');
        personCard.innerHTML = `
            <img src="${person.img}" alt="${person.name}">
            <h3>${person.name}</h3>
            <p>${person.title}</p>
        `;
        resultsContainer.appendChild(personCard);
    });
}

function handleSearch() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    
    if (searchTerm === '') {
        document.getElementById('results').innerHTML = '<p>Vennligst skriv inn et navn for å søke.</p>';
        return;
    }

    const matches = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm)
    );

    displayResults(matches);
}

document.getElementById('searchButton').addEventListener('click', handleSearch);

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleSearch();
    }
});
