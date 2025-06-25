import SectionTitle from "./SectionTitle";

const skillsData = [
  { id: 1, name: "HTML", icon: "fab fa-html5" },
  { id: 2, name: "CSS", icon: "fab fa-css3-alt" },
  { id: 3, name: "Bootstrap", icon: "fab fa-bootstrap" },
  { id: 4, name: "React JS", icon: "fab fa-react" },
  { id: 5, name: "JavaScript", icon: "fab fa-js" },
  { id: 6, name: "TypeScript", icon: "fas fa-code" },
  { id: 7, name: "Redux", icon: "fas fa-sync-alt" }, 
  { id: 8, name: "Next.js", icon: "fas fa-layer-group" } 
];

const experiencesData = [
  {
    id: 1,
    date: "Dec 2023 - May 2024",
    designation: "Teacher Panel Developer",
    company: "RISHTSOFT",
  },
  {
    id: 2,
    date: "APR 2025 - May 2025",
    designation: "Teacher",
    company: "Unco School",
  },
  // {
  //   id: 3,
  //   date: "Jan 2021 - Present",
  //   designation: "Creative Director",
  //   company: "pxdraft Ltd, UK",
  // },
  // {
  //   id: 4,
  //   date: "Jan 2021 - Present",
  //   designation: "Creative Director",
  //   company: "pxdraft Ltd, UK",
  // },
];
const Skill = () => {
  return (
    <section id="skill" className="section experience-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <SectionTitle
              heading={"Skills and  Experience"}
              subHeading={"Experience1"}
              text={
                "I design and develop modern, responsive websites, including platforms for online education. Though I have experience in teaching, my main passion is building clean and user-friendly web experiences"
              }
            />

            <div className="skill-box">
              <h3>My Skills</h3>
              <div className="row g-3">
                {skillsData.map((skill) => (
                  <div className="col-6 col-md-4 col-lg-6" key={skill.id}>
                    <div className="feature-box-02">
                      <div className="icon">
                        <i className={skill.icon} />
                      </div>
                      <h6>{skill.name}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5 ms-auto pt-5 pt-lg-0">
            <div className="experience-box">
              <h3>Experience</h3>
              <ul>
                {experiencesData.map((experience) => (
                  <li key={experience.id}>
                    <h6>{experience.date}</h6>
                    <div className="eb-right">
                      <h5>{experience.designation}</h5>
                      <span>{experience.company}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="experience-user">
              <span className="eu-1">
                <img
                  src="assets/img/effect-3.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <span className="eu-2">
                <img
                  src="assets/img/effect-4.svg"
                  className="svg"
                  alt="image"
                />
              </span>
              <div className="avatar">
                <img src="assets/img/avatar.png" alt="image" />
              </div>
              <a className="px-btn px-btn-theme2" href="#contactus">
                Hire me{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skill;
