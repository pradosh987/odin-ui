import React from "react";

export const Header = () => {
  return (
    <header className="">
      <div
        className=" p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm"
        style={{ height: 70 }}
      >
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <h5 className="my-0 mr-md-auto font-weight-normal">ExpoThemes</h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <a className="p-2 text-dark" href="#">
              Features
            </a>
          </nav>
          {/*<a className="btn btn-outline-primary" href="#">*/}
          {/*  Sign up*/}
          {/*</a>*/}
        </div>
      </div>
    </header>
  );
};
