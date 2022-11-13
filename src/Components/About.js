// import dana from "../assets/Dana-Feldman.jpg";
// import tina from "../assets/tina.jpg";

const About = () => {
  return (
    <>
      <section className="about">
        <h2>About Refrigeration Versification</h2>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga velit cum! Placeat delectus autem amet qui est? Repudiandae repellendus temporibus eos nisi aliquam vel, repellat nostrum voluptatum et consectetur quis, delectus inventore? Cumque quasi dicta eum aliquid libero aut explicabo, laudantium blanditiis, ex reprehenderit odit necessitatibus error. Accusantium atque distinctio et nulla veritatis labore, ducimus, dolore quae, recusandae quod architecto blanditiis obcaecati vero eos excepturi optio eaque. Aut tenetur incidunt sint unde? Pariatur consectetur voluptatum itaque dolorum, odio molestiae cumque perferendis repellat quibusdam rem sed omnis eos reiciendis earum quam nihil quaerat. Laboriosam odio inventore mollitia dolor quaerat quidem?</p>

        <h2>About the Developers</h2>

        <div className="topRow">
          <div className="profileMagnet char">
            <div className="profileTop">
              <h3>Charlotte</h3>
              {/* <img src={} alt="headshot profile picture" /> */}
            </div>
            <p>lil bio</p>
            <a href="https://github.com/chaarz" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/charlotteduppre/" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://charlotteduppre.com/index.html#" target="_blank" rel="noopener noreferrer">
              <i class="fa-solid fa-address-card"></i>
            </a>
          </div>

          <div className="profileMagnet dana">
            <div className="profileTop">
              <h3>Dana Filatov</h3>
              {/* <img src={} alt="headshot profile picture" /> */}
            </div>
            
            <p>Hey! My name is Dana (she/her), and I'm an artist turned Frontend Web Developer navigating my way from an ocean of paint and clay to a sea of zeros and ones.

              Trained in visual communicaton and creative problem-solving, I'm shifting my analogue skills to the screen🪄✨</p>
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
              <h3>Jen</h3>
              {/* <img src={} alt="headshot profile picture" /> */}
            </div>
            <p>lil bio</p>
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
          </div>

          <div className="profileMagnet tina">
            <div className="profileTop">
              <h3>Tina</h3>
              {/* <img src={} alt="headshot profile picture" /> */}
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

          <div>
            <h3>Charlotte</h3>
            <p>lil bio</p>
            <a href="https://github.com/chaarz" target="_blank" rel="noopener noreferrer">github </a>
            <a href="https://www.linkedin.com/in/charlotteduppre/" target="_blank" rel="noopener noreferrer"> linkedin </a>
            <a href="https://charlotteduppre.com/index.html#" target="_blank" rel="noopener noreferrer">portfolio</a>
          </div>

          <div>
            <h3>Dana</h3>
            <p>lil bio</p>
            <a href="https://github.com/DanaFCodes" target="_blank" rel="noopener noreferrer">github </a>
            <a href="https://www.linkedin.com/in/dana-filatov/" target="_blank" rel="noopener noreferrer"> linkedin </a>
            <a href="https://danafilatov.com/" target="_blank" rel="noopener noreferrer">portfolio</a>
          </div>

          <div>
            <h3>Jen</h3>
            <p>lil bio</p>
            <a href="https://github.com/luu-jennifer" target="_blank" rel="noopener noreferrer">github </a>
            <a href="https://www.linkedin.com/in/jencodes/" target="_blank" rel="noopener noreferrer"> linkedin </a>
            {/* website link */}
          </div>

          <div>
            <h3>Tina</h3>
            <p>lil bio</p>
            <a href="https://github.com/tinacllu" target="_blank" rel="noopener noreferrer">github </a>
            <a href="https://www.linkedin.com/in/tinacllu/" target="_blank" rel="noopener noreferrer"> linkedin </a>
            <a href="https://www.tinalu.ca/" target="_blank" rel="noopener noreferrer">portfolio</a>

          </div>

      </section>

    </>
  );

};


export default About;