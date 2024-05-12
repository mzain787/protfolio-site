import React from 'react';
import Myskill from '../Childcomps/Myskill';
import HomeComponentsHeading from '../Childcomps/HomeComponentsHeading';
const Skills = () => {
  const skills = [
    {
      number: "01",
      skill: "UI Design",
      description: "Crafting seamless user experiences with precision and creativity using a toolbox filled with Figma's collaborative power, Adobe XD's intuitive interface, Miro's strategic planning, and Adobe Illustrator's fine-tuned design capabilities."
    },
    {
      number: "02",
      skill: "Frontend Dev",
      description: "Mastering the art of frontend development with a command over HTML, CSS, and JavaScript, bolstered by proficiency in popular frameworks like React.js, Next.js, Gatsby, to craft engaging and innovative user interfaces"
    },
    {
      number: "03",
      skill: "Backend",
      description: "Empowering digital solutions from the ground up, leveraging the robustness of Node.js with Nest.js and the elegance of Python with Django and Flask, to architect efficient backend systems that seamlessly support complex functionalities and scale effortlessly."
    },
    {
      number: "04",
      skill: "Databases",
      description: "Driving data-driven applications forward by expertly navigating the realms of SQL and NoSQL databases, including the reliability of PostgreSQL and MySQL, alongside the agility of Elasticsearch. Proficiently designing and optimizing database architectures to ensure seamless performance and scalability."
    },
    {
      number: "05",
      skill: "JAMstack",
      description: "Mastering JAMstack development with seamless integration of Contentful and Netlify CMS for efficient content management. Leveraging the power of static site generators and CDN delivery, ensuring high-performance, scalable, and easily maintainable web applications. "
    },
    {
      number: "06",
      skill: "API Testing Tools",
      description: "Proficient in API documentation and testing tools such as Swagger and Postman, ensuring seamless communication and reliable performance between frontend and backend systems. Skill: API Documentation and Testing."
    },
    {
      number: "07",
      skill: "System Architect",
      description: "From conceptualization to deployment, adept at orchestrating comprehensive system architectures that seamlessly integrate various components for optimal performance and scalability. Proficient in designing robust, high-availability systems, implementing efficient workflows, and ensuring smooth transitions from development to production environments."
    },
    {
      number: "08",
      skill: "Mobile App Dev",
      description: "Proficient in cross-platform mobile app development using React Native and Flutter frameworks, crafting engaging and feature-rich applications for iOS and Android platforms. Skill: Cross-Platform Mobile App Development with React Native and Flutter."
    },
    
   
  ];

  return (
    <>
      <section className="skills-section basic-padding wrapper">
        <div className='text-center'>
        <HomeComponentsHeading smallheading="🗓️ WHAT I DO" heading="My" subheading="Skillset"/>
        </div>
       <div className='flex justify-start gap-10 flex-wrap w-full'>
        {skills.map((skill) => (
          <Myskill
            key={skill.number}
            number={skill.number}
            skill={skill.skill}
            description={skill.description}
          />
        ))}
        </div>
      </section>
    </>
  );
}

export default Skills;
