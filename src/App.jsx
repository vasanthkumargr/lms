import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import backgroundImage from './assets/2.jpg';

const App = () => {
  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">LMS Study Hub</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 d-flex align-items-center">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#resources">Resources</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item">
                <button className="loginButton">LOGIN</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Masthead */}
      <header className="masthead text-center">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Your Ultimate Platform for Learning</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">LMS Study Hub offers top-quality study materials and video lectures for various courses. Enroll now and enhance your learning experience!</p>
              <a className="btn btn-primary btn-xl" href="#resources">Explore Resources</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="page-section" id="about">
        <div className="container px-4 px-lg-5 text-center">
          <h2 className="text-white mt-0">Why Choose LMS Study Hub?</h2>
          <hr className="divider divider-light" />
          <p className="text-white-75 mb-4">We provide high-quality study materials and engaging video lectures designed to help you master any subject. Start learning today!</p>
          <a className="btn btn-light btn-xl" href="#resources">Start Learning</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5 text-center">
          <div className="small text-muted">Copyright &copy; 2023 - LMS Study Hub</div>
        </div>
      </footer>
    </div>
  );
};

export default App;