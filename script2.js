const people = [
    {
        name: "Laila Johanne Handelsby",
        role: "Rektor",
        image: "bilde1.JPG",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Torben Andersen",
        role: "Assisterende rektor",
        image: "bilde2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Martin Sandø-Frank",
        role: "Studieleder",
        image: "bilde3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Cathrine Mannsaker",
        role: "Undervisningsleder",
        image: "bilde4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Anette Øwre Bollvåg",
        role: "Undervisningsleder",
        image: "bilde5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Anne Raastad-Hoel",
        role: "Undervisningsleder",
        image: "bilde6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Erik Bergerud",
        role: "Undervisningsleder",
        image: "bilde7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Camilla Engberg",
        role: "Undervisningsleder",
        image: "bilde8.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        name: "Sissel Moen",
        role: "Administrasjonsleder",
        image: "bilde9.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

function findPerson() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const personInfo = document.getElementById("personInfo");
    const personName = document.getElementById("personName");
    const personRole = document.getElementById("personRole");
    const personDescription = document.getElementById("personDescription");
    const personImage = document.getElementById("personImage");

    const person = people.find(p => p.name.toLowerCase().includes(input));

    if (person) {
        personInfo.style.display = "flex";
        personName.textContent = person.name;
        personRole.textContent = person.role;
        personDescription.textContent = person.description;
        personImage.src = person.image;
        personImage.style.display = "block";
    } else {
        personInfo.style.display = "none";
        alert("Person ikke funnet.");
    }
}
