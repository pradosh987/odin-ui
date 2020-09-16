import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const Page = () => {
  return (
    <div>
      <Header />

      <main className="container py-5">
        <div className="text-center">
          <h1>Terms and Privacy Policy</h1>
          <p className="lead">
            Here's what you should know and agree to accept from using services
            from this website.
          </p>

          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-8">
              <ul className="text-left">
                <li>
                  We do not provide any guarantee on resource navigated from our
                  website or themes downloaded. Although we make out best
                  affords to curate content to best of our abilities.
                </li>
                <br />
                <li>
                  We do not collection any personally identifiable information
                  of any kind.
                </li>
                <br />
                <li>
                  We crawl websites periodically which are presented in results
                  and we do so in respectable manner, throttling requests as
                  much as possible.
                </li>
                <br />
                <li>
                  Search results ranking are automated and based on algorithm
                  that is neutral to all.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
