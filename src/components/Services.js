import SectionTitle from "./SectionTitle";

const serviceData = [
  {
    id: 1,
    name: "Responsive Web Design",
    icon: "bi bi-phone",
    desc: "Designing and developing websites that automatically adapt to any screen size or device, providing optimal viewing on mobiles, tablets, and desktops.",
  },
  {
    id: 2,
    name: "Frontend Development",
    icon: "bi bi-laptop",
    desc: "Building interactive and dynamic websites using the latest web technologies to ensure a smooth and engaging user experience.",
  },
  {
    id: 3,
    name: "UI/UX Design",
    icon: "bi bi-easel",
    desc: "Creating visually appealing user interfaces combined with intuitive user experiences to make websites easy to navigate and enjoyable to use.",
  },
  {
    id: 4,
    name: "Website Optimization",
    icon: "bi bi-lightning",
    desc: "Enhancing website speed, performance, and SEO readiness to deliver faster loading times and better search engine rankings.",
  },
  {
    id: 5,
    name: "Website Maintenance",
    icon: "bi bi-tools",
    desc: "Providing regular updates, bug fixes, and security checks to ensure your website remains secure, up-to-date, and functioning properly at all times",
  },
  // {
  //   id: 6,
  //   name: "SEO Marketing",
  //   icon: "bi bi-globe2",
  //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  // },
];
const Services = () => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {serviceData.map((service) => (
            <div className="col-sm-6 col-lg-4" key={service.id}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{service.id}</span>
                  </div>
                  <h5>{service.name}</h5>
                  <p>{service.desc}</p>
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
