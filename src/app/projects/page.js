// import React from 'react'

// export default function ProjectsPage() {
//   return (
//     <main>
//     <div className="my-9 text-4xl text-center">Projects Page</div>
//     <p className="my-10 text-3xl text-center">Check out some of my work! It's been fun creating these. I hope you enjoy.</p>
//     </main>
//   )
// }
// const projects = [
//   {
//     title: "Funny Socks",
//     description: "Duplicating a Webpage",
//     link: "https://github.com/JParker3110/funny-socks-css.git",
//  },

//  {
//   title: "Capstone2",
//   description: "Recipe Webpage",
//   link: "https://github.com/JParker3110/Capstone2.git",
// },

// {
//   title: "Capstone",
//   description: "Car Dealership Webpage",
//   link: "https://github.com/JParker3110/Capstone-Lab.git",
// },
  
// ];

// Project.js
import React from 'react';

function Project({ title, description, link }) {
  return (
    <div className="project-card">
      <h3>{Capstone}</h3>
      <p>{"Car Webpage"}</p>
      <a href={"https://github.com/JParker3110/Capstone-Lab.git"} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default Project;
