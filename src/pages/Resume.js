import React from "react";
// import ExperienceCard from "../components/Experience";
import { Chrono } from "react-chrono";

// External link:
// https://github.com/prabhuignoto/react-chrono#timeline-item-model

const Resume = () => {
  const experiences = [
    {
      title: "Aug 2019",
      cardTitle: "Cornell University",
      url: "https://www.cornell.edu/",
      cardSubtitle: "Undergraduate",
      cardDetailedText:
        "BSc, Double Major in Information Science and Biometry & Statistics, Minor in Business",
    },
    {
      title: "Jun 2021 - Aug 2021",
      cardTitle: "HireBeat",
      cardSubtitle: "Data Analyst Intern",
      cardDetailedText: [
        "-	Researched the impact of COVID-19 on the U.S. labor market and recruiting trends in different industries; created ideal customer profile to identify the traits of employers who need the service of tracking and quickly recruiting ideal applicants \n",
        "-	Automated the process of collecting over 30,000 postings on Handshake through web scrapping, and used Python Pandas to perform EDA and quantified the difference in hiring levels across industries based on collected postings",
        "-	Implemented Tableau to visualize the number of hiring posts based on geographical location, company size, industry and analyzed the difference in recruiting trends on pre- and post-pandemic period",
      ],
    },
    {
      title: "May 2022 - Aug 2022",
      cardTitle: "MetLife",
      cardSubtitle: "Actuarial Intern",
      cardDetailedText: [
        "-  Actively contributed in the preparation of Insurance Risk Required Economic Capital (REC) report used for enterprise-level management decisions \n",
        "-	Expedited the production pipeline by customizing Python scripts used to process insurance products’ raw data in Japan market",
        "-	Automated the compilation of over 30,000 data entries containing sales information about insurance products by leveraging Python",
      ],
    },
    {
      title: "Jun 2023 - Aug 2023",
      cardTitle: "Wind",
      cardSubtitle: "Java Developer Intern",
      cardDetailedText: [],
    },
    {
      title: "Aug 2023",
      cardTitle: "Cornell University",
      cardSubtitle: "M.Eng Computer Science",
      cardDetailedText: ["paragraph1", "paragraph2"],
    },
  ];

  return (
    <div className="resume container-sm mt-5">
      <h1>Past Experience</h1>
      <div className="d-flex justify-content-center align-items-center my-5">
        <div
          style={{
            width: "700px",
            height: window.innerWidth < 576 ? "900px" : "",
          }}
        >
          <Chrono
            items={experiences}
            mode="VERTICAL_ALTERNATING"
            scrollable={window.innerWidth < 576 ? true : false}
            hideControls={true}
            fontSizes={{
              cardText: "0.8rem",
            }}
            theme={{
              primary: "black",
              cardTitleColor: "black",
              iconBackgroundColor: "white",
            }}
          >
            <div className="chrono-icons">
              <i class="bi bi-book-fill"></i>
              <i class="bi bi-briefcase-fill"></i>
              <i class="bi bi-briefcase-fill"></i>
              <i class="bi bi-briefcase-fill"></i>
              <i class="bi bi-book-fill"></i>
            </div>
          </Chrono>
        </div>
      </div>
    </div>
  );
};

export default Resume;
