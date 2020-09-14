import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import React, { useState } from "react";
import { Footer } from "../components/Footer";
import { SearchSection } from "../components/SearchSection/SearchSection";

export default function Home() {
  const [folded, setFolded] = useState(false);
  const onSearch = (query: string) => {
    console.log(query);
  };
  return (
    <div className="">
      <Header />

      <main className={" " + (folded ? "barebone-home" : "")}>
        <div className="container d-flex justify-content-center align-items-center w-100 h-100 ">
          <SearchSection onSubmit={onSearch} />
        </div>
        <hr />
      </main>

      <Footer />
    </div>
  );
}
