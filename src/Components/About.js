import dana from "../assets/Dana-Feldman.jpg";
import tina from "../assets/tina.jpg";
import char from "../assets/char.png"
import jen from "../assets/jen.jpeg"

const About = () => {
  return (
    <>
      <section className="about">
        <div className="aboutIntro">
        <h2>About Refrigeration Versification!</h2>
          <p>Welcome to Refrigeration Versification, a virtual magnetic poetry app designed by Tina, Jen, Charlotte, and Dana from Juno College!This web-app works the same way Magnetic Poetry&#174; does in real life - for those of you who were lucky enough to have those sweet tiny magnets stuck to your fridge - but now with a few virtual-perks, of course!Enter a word and get an assortment of related words returned in the word bank, which you can mix and match with some connecting suffixes and transition words to get your poetry onto the fridge.You can even save your poem, as specifically-yours, or anonymously, to share with friends and family through our online-gallery! Try it yourself on our home page.</p>
        <h2>About the Developers</h2>
        </div>

        <div className= "topRow">
        <div className="profileMagnet char">
          <div className="profileTop">
            <img src={char} alt="headshot profile picture" />
              <h3>Charlotte Duppre</h3>
          </div>
            <p>I am a bilingual Front-End Developer who brings 10+ years of international experience in Business and Financial Analysis roles - most of which in the tech industry - as well as recent experience developing responsive, accessible web applications using JavaScript, React, HTML and CSS. I am a detail oriented developer who writes clean and organized code and a team player who excels at communicating with team members across all levels of management and technical abilities.</p>
          <a href="https://github.com/chaarz" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/charlotteduppre/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://charlotteduppre.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-address-card"></i>
          </a>
        </div>

        <div className="profileMagnet dana">
          <div className="profileTop">
            <img src={dana} alt="headshot profile picture" />
          <h3>Dana Filatov</h3>
            </div>
            
            <p>Hey! My name is Dana (she/her), and I'm an artist turned Front-end Web Developer navigating my way from an ocean of paint and clay to a sea of zeros and ones.

              Trained in visual communicaton and creative problem-solving, I'm shifting my analogue skills to the screen🪄✨ Based in Toronto, when I'm not coding or making art, you can find me cooking, traveling, hiking, or maybe even hiking on my travels after cooking😉 </p>
          <a href="https://github.com/DanaFCodes" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/dana-filatov/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://danafilatov.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-address-card"></i>
          </a>
        </div>
        </div>

        <div className="bottomRow">
        <div className="profileMagnet jen">
          <div className="profileTop">
            <img src={jen} alt="headshot profile picture" />
          <h3>Jen Luu</h3>
          </div>
            <p>Hi, I’m Jen! I am a Front-End Developer, experienced Tech Manager and VP Sales. I have a background in financial services and hold a Bachelor of Science from the University of Windsor. Outside of coding, my personal interests include finance and blockchain. I live in British Columbia with my husband, where I enjoy skiing, kitesurfing, keelboat sailing, practicing yoga, multi-pitch sport and trad climbing.</p>
          <a href="https://github.com/luu-jennifer" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jencodes/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://jencodes.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-address-card"></i>
          </a>
        </div>

        <div className="profileMagnet tina">
          <div className="profileTop">
            <img src={tina} alt="headshot profile picture" />
          <h3>Tina Lu</h3>
          </div>
            <p>Hello! My name is Tina and I am a scientist turned front-end developer! I love to solve problems and create aesthetic applications with clean and re-useable code. I would like to use my skills to develop engaging applications tailored to each client's needs.
              Outside of coding, you can find me trying new recipes and attempting to keep my plants alive. Feel free to reach out if you are in need of a developer, in the mood for cool science facts, or just for fun!</p>
          <a href="https://github.com/tinacllu" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/tinacllu/" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://www.tinalu.ca/" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-address-card"></i>
          </a>
          </div>
        </div>

      </section>

    </>
  );
};

export default About;