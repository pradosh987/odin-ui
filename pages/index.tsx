import { Header } from "../components/Header";
import React, { useCallback, useState } from "react";
import { Footer } from "../components/Footer";
import { SearchSection } from "../components/SearchSection/SearchSection";
import { search } from "../services/api_service";
import { ThemeCard } from "../components/ThemeCard/ThemeCard";
import { Theme } from "../interfaces/Theme.interface";

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
    </div>
  );
}
