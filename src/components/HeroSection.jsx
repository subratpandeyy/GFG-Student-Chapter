import gfglogo from '../assets/gfglogo.png'

export default function HeroSection() {
    return (
      <section className="text-gray-600">
        <div className="container hero-container">
          <div className="hero-image">
            <img 
              src={gfglogo}
              alt="GFG Logo"
            />
          </div>
          <div className="hero-txt">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white text-center">
              Welcome to the 
              <span> GeeksForGeeks</span>
              <br className="inline-block" />
              Student Chapter of GIET University
            </h1>

          </div>
        </div>
      </section>
    );
  }
  