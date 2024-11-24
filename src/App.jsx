import { useState } from "react";
import { Game } from "./components/Game";
import "./styles/App.css";
import { Home } from "./components/Home";
import { Loading } from "./components/Loading";
import { fetchCards } from "./services/api";

const apiToken = import.meta.env.VITE_API_KEY;
const apiUrl = "https://proxy.royaleapi.dev/v1/cards";

const allCards = (async () => await fetchCards(apiUrl, apiToken))();

function App() {
  const [currentPage, setCurrentPage] = useState("game");

  return (
    <>
      {/* {currentPage === "home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "loading" && <Loading setCurrentPage={setCurrentPage} />} */}
      {currentPage === "game" && (
        <Game setCurrentPage={setCurrentPage} allCards={allCards} />
      )}
    </>
  );
}

export default App;
