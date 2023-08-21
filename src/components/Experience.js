import React from "react";

const ExperienceCard = ({
  organization,
  title,
  location,
  date,
  description,
}) => {
  return (
    <div>
      <h4 className="mb-3">{organization}</h4>
      <h5>{title}</h5>
    </div>

    // <div className="card mb-3">
    //   <div className="card-header">
    //     <h5 className="card-subtitle mb-2 text-muted">
    //       {company} - {location}
    //     </h5>
    //     <h6 className="card-title">{title}</h6>
    //     <p className="card-text">{date}</p>
    //   </div>
    //   <div className="card-body">
    //     <p className="card-text">{description}</p>
    //   </div>
    // </div>
  );
};

export default ExperienceCard;
