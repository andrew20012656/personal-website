import React, { useState, useEffect } from "react";

function Contact() {
  // const [currentTime, setCurrentTime] = useState(0);

  
  // useEffect(() => {
  //   fetch("/atime")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCurrentTime(data.time);
  //     });
  // }, []);

  return (
    <div className="contact d-flex flex-column min-vh-100">
      <div className="container-xl">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light">About</h1>
          <p className="my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          {/* <p>The current time is {currentTime}.</p> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
