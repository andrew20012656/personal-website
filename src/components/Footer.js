import React from "react";
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <footer className="page-footer container-small font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-8 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>
              Still updating this website. Thanks for visiting my website!
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/andrew20012656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yiyi-andrew-liu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto: andrew20012656@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark"
                >
                  Email Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2023 Copyright: Andrew Liu
      </div>
    </footer>
  );
}
