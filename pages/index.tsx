import { Header } from "../components/Header";
import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { SearchSection } from "../components/SearchSection/SearchSection";
import { search } from "../services/api_service";
import { ThemeCard } from "../components/ThemeCard/ThemeCard";
import { Theme } from "../interfaces/Theme.interface";
import Head from "next/head";
import Loading from "../assets/loading.svg";
import Frown from "../node_modules/bootstrap-icons/icons/emoji-frown.svg";
import { Pagination } from "../components/Pagination/Pagination";

export default function Home() {
  const [folded, setFolded] = useState(false);
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm]: [
    string | undefined,
    React.Dispatch<string | undefined>
  ] = useState();
  const [searchResults, setSearchResults]: [
    Theme[],
    React.Dispatch<Theme[]>
  ] = useState([]);

  const [errorMessage, setErrorMessage]: [
    string | undefined,
    React.Dispatch<string | undefined>
  ] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const resetSearch = useCallback(() => {
    setSearchResults([]);
    setCurrentPage(1);
    setTotalPages(0);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setSearching(true);
      setErrorMessage(undefined);
      search(searchTerm, currentPage || 1)
        .then((response) => {
          const themes = response.data;
          setSearchResults([...searchResults, ...themes]);
          setSearching(false);
          setTotalPages(response.totalPages);
          setCurrentPage(response.currentPage);
        })
        .catch((e) => {
          console.error(e);
          setSearching(false);
          setErrorMessage("Oops something went wrong.");
        });
    }
  }, [searchTerm, currentPage]);

  return (
    <div className="">
      <Head>
        <title>DigThemes - Search Engine for Windows Themes</title>
        <meta
          name="description"
          content="Search and find themes for Windows 10 with DigThemes - A Search Engine for Themes that aggregates and curates beautiful theme for Windows"
        />
        <meta name="author" content="Pradosh Gaonkar" />
      </Head>
      <Header />

      <main>
        <div className="container d-flex justify-content-center align-items-center w-100 h-100 ">
          <SearchSection
            onSubmit={(query) => {
              setSearchTerm(query);
              resetSearch();
            }}
          />
        </div>
        <div className="container">
          {searchResults.length > 0 && (
            <React.Fragment>
              <div className="row">
                <div className="col-12 my-1">
                  <p className="lead">
                    Here's what we found for: <strong>{searchTerm}</strong>
                  </p>
                </div>
              </div>
              <hr />
              <div className="row grid">
                {searchResults.map((theme) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={theme.id}>
                    <ThemeCard theme={theme} />
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}
          {searching && (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <Loading />
              <h5 className="mt-3">
                Just a moment please, we are searching for your themes...
              </h5>
            </div>
          )}

          {!searching &&
            searchResults.length === 0 &&
            searchTerm?.length &&
            !errorMessage && (
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div style={{ fontSize: 100 }} className="text-primary">
                  <Frown />
                </div>
                <h5 className="mt-3">
                  Sorrry! we couldn't find anything for{" "}
                  <span
                    className="text-danger"
                    style={{ textDecoration: "underline" }}
                  >
                    {searchTerm}
                  </span>
                </h5>
              </div>
            )}
          {!searching && errorMessage && (
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div style={{ fontSize: 100 }} className="text-primary">
                <Frown />
              </div>
              <h5 className="mt-3">{errorMessage}</h5>
            </div>
          )}

          {!searching && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPaginate={setCurrentPage}
            />
          )}
        </div>
      </main>

      <Footer />
      <div
        dangerouslySetInnerHTML={{
          __html: `
                  <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-178291796-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-178291796-1');
            </script>`,
        }}
      ></div>
    </div>
  );
}
