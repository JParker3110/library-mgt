import React from 'react'


const projects = [
  {
    title: "FUNNY SOCKS",
    description: "Duplicating a Webpage",
    link: "https://github.com/JParker3110/funny-socks-css.git",
 },

 {
  title: "CAPSTONE2",
  description: "Recipe Webpage",
  link: "https://github.com/JParker3110/Capstone2.git",
},

{
  title: "CAPSTONE",
  description: "Car Dealership Webpage",
  link: "https://github.com/JParker3110/Capstone-Lab.git",
},
  
];

const Projects = () => {
  return (
    <div>
     <h1 className="my-9 text-4xl text-center text-red-900">MY PROJECTS PAGE</h1> 
     <p className="my-10 text-3xl text-center text-yellow-800">Check out some of my work! It's been fun creating these. I hope you enjoy!</p>
      <br></br>
      {projects.map((project, index) => (
        <div key={index}>
          <h2 style={{ fontSize: '1em'}}>{project.title}</h2>
          {/* <br></br> */}
          <p style={{color: 'salmon' }}>{project.description}</p>
          <a className="m-1 text-pink-500 hover:text-pink-700" href={project.link}>View Project</a>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default Projects;