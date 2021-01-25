import photo from '../assets/images/jason-neal-software-engineer-charlotte-nc.jpg';
import './About.scss';

function About() {
  return (
    <section className="about">
      <h1>About</h1>
      <div className="card">
        <img alt="Headshot of Jason Neal" src={photo} />
        <div className="card-header">
          <h2>Software Engineer, Charlotte, NC</h2>
        </div>
        <p>Hello, my name is Jason Neal. Welcome to my home on the web!</p>
        <p>I'm a web developer, software engineer, quality aficionado, solution architect, mentor, and more depending on who you ask. I'm located in Charlotte, NC, but originally from Greenville, SC. I find enjoyment working with a wide variety of technologies including Angular, TypeScript, Node, PHP, Docker, AWS, Linux, and many more.</p>
        <p className="final">I consider myself a clean coder. I follow standards and style guides. I write clean, consistent, and secure code. I pride myself on maintaining 100% unit test code coverage across all of my projects. I am a professional that takes my career very seriously. I am an extremely passionate individual, and I believe it really shows through in my work.</p>
      </div>
    </section>
  );
}

export default About;
