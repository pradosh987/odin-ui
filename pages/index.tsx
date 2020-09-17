import { Header } from "../components/Header";
import React, { useCallback, useState } from "react";
import { Footer } from "../components/Footer";
import { SearchSection } from "../components/SearchSection/SearchSection";
import { search } from "../services/api_service";
import { ThemeCard } from "../components/ThemeCard/ThemeCard";
import { Theme } from "../interfaces/Theme.interface";
import Head from "next/head";

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

  const onSearch = useCallback(async (query: string) => {
    console.log(query);
    if (query) {
      setSearching(true);
      try {
        const response = await search(query);
        const themes = response.data;
        setSearchTerm(query);
        setSearchResults(themes);
        console.log(themes);
      } catch (e) {
        console.error(e);
      } finally {
        setSearching(false);
      }
    }
  }, []);
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
          <SearchSection onSubmit={onSearch} />
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
