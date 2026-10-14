import "./hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-intro">Hi, my name is</p>
      <h1>Franck Alonso</h1>
      <p className="hero-tagline">I build things for the web.</p>
      <p className="hero-text">
        I'm a software developer who enjoys turning ideas into clean and pretty products.
      </p>
      <div className="button-row">
        <a className="button" href="#projects">See my work</a>
        <a className="button button-outline" href="#contact">Get in touch</a>
      </div>
    </section>
  )
}

export default Hero