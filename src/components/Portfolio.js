import SectionTitle from "./SectionTitle";

const portfolioData = [
  {
    id: 1,
    title: "Online Shop",
    subtitle:
      "This site is an online store that has a variety of products. You can buy the products by selecting them and adding them to the cart",
    image: "assets/img/mebel5.png",
    link: "https://imtihon7-six.vercel.app/",
  },
  {
    id: 2,
    title: "Countries Website",
    subtitle: "This site will give you complete information about the states. You can search almost all countries",
    image: "assets/img/country1.png",
    link: "https://quiz-9-dars.vercel.app/",
  },
  {
    id: 3,
    title: "Quiz website",
    subtitle: "This site is a quiz site where you can take a test and see your score",
    image: "assets/img/quiz.png",
    link: "https://3-homewrok.vercel.app",
  },
  {
    id: 4,
    title: "Crypto Website",
    subtitle: "This site is a crypto site that contains information, price and chart information about various crypto currencies",
    image: "assets/img/crypto.png",
    link: "https://cryptofolioweb.netlify.app",
  },
  {
    id: 5,
    title: "History Quiz",
    subtitle: "History Pedagogy Practice Tests Prepare for certification with:Focused Practice Tests, Real Exam Simulations, Expert Tips. Start now and boost your confidence!",
    image: "assets/img/history.png",
    link: "https://tarix-pedagogika.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "Agency Landing page",
  //   subtitle: "Web/WordPress",
  //   image: "assets/img/project-6.jpg",
  // },
];

const Portfolio = () => {
  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="row g-4 lightbox-gallery">
          {portfolioData.map((portfolio) => (
            <div className="col-sm-6 col-lg-4" key={portfolio.id}>
              <div className="portfolio-box">
                <div className="portfolio-img">
                  <a
                    href={portfolio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img id="img_001" src={portfolio.image} alt={portfolio.title} />
                  </a>
                </div>
                <div className="portfolio-info">
                  <h6>{portfolio.title}</h6>
                  <span>{portfolio.subtitle}</span>
                  <a
                    href={portfolio.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
