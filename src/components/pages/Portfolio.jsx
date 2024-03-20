import React from 'react';
import '../styles/Portfolio.css'; 
import Footer from './Footer'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: 'Weather App', 
      description: 'This Weather App allows travelers to check the weather outlook for multiple cities, helping them plan their trips accordingly. Users can search for a city and view both current and future weather conditions. The application also keeps track of the search history, allowing users to quickly access weather information for previously searched cities.',
      link: 'https://thomasjholtamiii.github.io/Weather-App/',
      git: 'https://github.com/ThomasJHoltamIII/Weather-App' 
    },
    {
      id: 2,
      name: 'J.A.T.E (Just Another Text Editor)',
      description: 'J.A.T.E (Just Your Average Text Editor), can be downloaded and used offline. J.A.T.E is a progressive web application that saves your text and notes to a persistent storage.',
      link: 'https://j-a-t-e-o6lc.onrender.com/',
      git: 'https://github.com/YourGitHub/JATE' 
    },
    {
      id: 3,
      name: 'Social Network API',
      description: 'The social network api uses mongoose to communicate with a database that allows you to share thoughts, make and remove friends and react to others posts.',
      link: 'https://github.com/ThomasJHoltamIII/Social-Network-API', 
      git: 'https://github.com/ThomasJHoltamIII/Social-Network-API'
    },
    {
      id: 4,
      name: 'Wags to Riches',
      description: 'This app is designed to help connect adorable pets with loving families. The website is built using Handlebars for templating and MySQL for data storage.',
      link: 'https://github.com/S10skeleton/Wags-to-Riches', 
      git: 'https://wags-to-riches-e18aa5042031.herokuapp.com/'
    },
    {
      id: 5,
      name: 'Beat Buddy',
      description: 'This webpage is designed to be your friendly music hub for new music! Simply enter your favorite (or second favorite!) song and artist and let BeatBuddy take over. You will now be displayed an array of different music videos and artist info for your listening pleasure. Happy listening!.',
      link: 'https://33649ek.github.io/beat-buddy/', 
      git: 'https://github.com/33649EK/beat-buddy'
    },
    {
      id: 6,
      name: 'Note Taker',
      description: 'The Note Taker allows you to write, save and delete notes..',
      link: 'https://serene-citadel-69965-db6ffbdd1467.herokuapp.com/', 
      git: 'https://github.com/ThomasJHoltamIII/Note-Taker'
    },
  ];

  return (
    <div className="portfolio">
      <h1>Portfolio Page</h1>
      <div className="projects">
        {projects.map(project => (
          <div key={project.id} className="project">
            <h2 className="project-name">{project.name}</h2> 
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
            <a href={project.git} className="project-link">-View Repo</a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

