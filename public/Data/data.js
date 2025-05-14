const organization = {
    name: "Community Connect Hub",
    mission: "To transform ideas into immersive events that inspire, entertain, and connect.",
    vision: "To be the leading choice for unforgettable, meticulously planned events that leave lasting memories.",
    values: [ 
      {tile: 'Creativity:', explanation: 'Embracing innovative ideas to make each event unique.'},
      {tile: 'Collaboration: ', explanation: 'Working closely with clients and partners to deliver seamless experiences.'},
      {tile: 'Passion: ', explanation: 'Committing to excellence and enthusiasm in every project.'},
      {tile: 'Professionalism: :', explanation: 'Maintaining integrity, transparency, and reliability.'},
      {tile: 'Client-Centric: ', explanation: 'Prioritizing client needs and customizing solutions for their vision.'},
      {tile: 'Sustainability:', explanation: 'Hosting events that are environmentally responsible and impactful.'},
    ]
} 


const team = [
    { name: "Jean Paul Smit", role: "Backend Developer", image: "image3.png" },
    { name: "Vaughn du Preez", role: "Team Lead", image: "image4.png" },
    { name: "Joseph Pereira", role: "Data Manager", image: "image1.png" },
    { name: "Neo Polori", role: "Frontend Developer", image: "image2.png" }
];

let events = [
  {
    id: 1,
    name: "Rock Concert",
    date: "2025-03-01",
    time: "19:00",
    location: "Cape Town International Convention Centre (CTICC) - Cape Town",
    image: "rock-concert.png"
  },
  {
    id: 2,
    name: "Comedy Night",
    date: "2025-03-15",
    time: "20:00",
    location: "Gallagher Convention Centre - Midrand, Johannesburg",
    image: "comedy-night.png"
  },
  {
    id: 3,
    name: "Theater Play",
    date: "2025-03-20",
    time: "18:00",
    location: "Durban International Convention Centre (Durban ICC) - Durban",
    image: "theatre-play.png"
  },
  {
    id: 4,
    name: "Music Festival",
    date: "2025-04-01",
    time: "12:00",
    location: "Sandton Convention Centre - Johannesburg",
    image: "music-festival.png"
  },
  {
    id: 5,
    name: "Dance Performance",
    date: "2025-04-10",
    time: "09:00",
    location: "Ticketpro Dome - Johannesburg",
    image: "dance-performance.png"
  },
  {
    id: 6,
    name: "Film Premiere",
    date: "2025-04-15",
    time: "21:00",
    location: "Artscape Theatre Centre - Cape Town",
    image: "film-premiere.png"
  },
  {
    id: 7,
    name: "Art Exhibition",
    date: "2025-04-20",
    time: "10:00",
    location: "Nelson Mandela Bay Stadium - Port Elizabeth",
    image: "art-primiere.png"
  },
  {
    id: 8,
    name: "Gaming Tournament",
    date: "2025-04-25",
    time: "14:00",
    location: "Loftus Versfeld Stadium - Pretoria",
    image: "gaming-tournament.png"
  },
  {
    id: 9,
    name: "Food Festival",
    date: "2025-05-01",
    time: "11:00",
    location: "Montecasino Events Centre - Fourways, Johannesburg",
    image: "food-festival.png"
  },
  {
    id: 10,
    name: "Sporting Event",
    date: "2025-05-10",
    time: "17:00",
    location: "Sun City Resort - North West Province",
    image: "sporting-event.png"
  }
];

module.exports = {organization, team, events}