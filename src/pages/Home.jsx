import { FaLongArrowAltRight } from "react-icons/fa";

function Home() {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <div>
            <h1 className="heading-xl">
              Explore the World , one country at a time.
            </h1>
            <p className="paragraph">
              Discover the historia , culture , and beauty of every nation. sort
              , search , and filter through countries to find the details you
            </p>
            <button className="btn btn-darken btn-inline bg-white-box">
              Start Exploring <FaLongArrowAltRight />
            </button>
          </div>
          <div className="hero-image">
            <img className="banner-image" src="/images/world.png" alt="" />
          </div>
        </div>
      </div>
      ;
    </main>
  );
}

export default Home;
