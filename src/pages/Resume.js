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
      url: "https://www.metlife.com/",
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
      url: "https://www.wind.com.cn/",
      cardSubtitle: "Java Developer Intern",
      cardDetailedText: [
        '-  Contributed to the Big Data team as a Java developer, aiding backend development for the internal "Big Data Decision Platform"',
        "-  Employed MyBatis for data retrieval in the persistence layer and SpringBoot for efficient interface scheduling in the controller layer",
        "-  Implemented a secondary function that cached reports accessed within the last 72 hours using database access records, organizing details in a designated table and automating removal of entries linked to expired reports for maintenance",
      ],
    },
    {
      title: "Aug 2023",
      cardTitle: "Cornell University",
      url: "https://www.cornell.edu/",
      cardSubtitle: "Graduate",
      cardDetailedText: "M.Eng Computer Science",
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
