import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="">
      <div
        className="p-3 px-md-4 bg-white border-bottom shadow-sm d-flex"
        style={{ height: 70 }}
      >
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <img
            src="/digthemes_logo.png"
            width="32px"
            height="32px"
            alt="DigThemes - Search Engine for Windows Themes"
            className="mr-1"
          />
          <h5 className="my-0 mr-md-auto font-weight-normal">
            <Link href="/">
              <a className="text-dark">
                <span className="text-primary">Dig</span>
                <span className="text-dark">Themes</span>
              </a>
            </Link>
          </h5>
          <nav className="my-2 my-md-0 mr-md-3">
            <Link href="/terms_and_policy">
              <a className="p-2 text-dark" href="/terms_and_policy">
                Terms and Policy
              </a>
            </Link>
          </nav>
          {/*<a className="btn btn-outline-primary" href="#">*/}
          {/*  Sign up*/}
          {/*</a>*/}
        </div>
      </div>
    </header>
  );
};
