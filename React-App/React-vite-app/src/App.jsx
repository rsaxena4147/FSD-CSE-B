import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BookCart from "./BookCart";
import "./App.css";
function App() {
  const book1 =
    "https://imgs.search.brave.com/e8P-mqRtH_KDSXHpKH7Jh696_j1F8dW4v6ii00Uq-ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIyLTAy/LTIyL3JvYWQtdG8t/cmVhY3QtYmVzdC1i/b29rLmpwZWc";
  const book2 =
    "https://imgs.search.brave.com/05H786ZhwN6_kFEXKftJt9XNSVPENOt_O4GnQR1EahI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uY2Jo/cHVibGlzaGVyLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzEwLzEwLTEtMzAw/eDQzNi5qcGc";
  return (
    <>
      <center>
        {" "}
        <h1>Book_App</h1>
      </center>
      <div className="headCon">
        <BookCart book={book1} price={299} rating={3} />
        <BookCart book={book2} price={199} rating={5} />
        <BookCart book={book1} price={299} rating={3} />
        <BookCart book={book2} price={199} rating={5} />
        <BookCart book={book1} price={299} rating={3} />
        <BookCart book={book2} price={199} rating={5} />
        <BookCart book={book1} price={299} rating={3} />
        <BookCart book={book2} price={199} rating={5} />
      </div>
    </>
  );
}

export default App;
