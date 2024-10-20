const preview = document.querySelector(".preview");
const para = document.createElement("p");
let bandInfo;



// Add your code here
const band = {
    name: "SunKissed Lola",
    nationality: "Filipino",
    genre: "Indie Pop, Alternative Rock, Pop Rock",
    members: 6,
    formed: 2021,
    split: false,
    albums: [
        {
            name: "Makalimutan Ka",
            released: 2022,
        },
        {
            name: "HKP",
            released: 2022,
        },
        {
            name: "Pasilyo",
            released: 2022,
        },
        {
            name: "White Toyota",
            released: 2023,
        },
        {
            name: "Damag",
            released: 2023,
        },
        {
            name: "Paki Sabi",
            released: 2023,
        },
        {
            name: "Luna",
            released: 2023,
        },
        {
            name: "Dal'wang Patinig",
            released: 2023,
        },
        {
            name: "Nene",
            released: 2024,
        }
    ]
};

const albumNames = band.albums.map((album) => album.name).join(", ").replace(", Nene", ", and Nene");

bandInfo = `${band.name} is a ${band.nationality} band consisting of ${band.members} members that 
delves in the the ${band.genre} genre. Having only been formed last ${band.formed}  
they have already released 9 songs namely, ${albumNames}.`;

para.textContent = bandInfo;
preview.append(para);
// Don't edit the code below here!