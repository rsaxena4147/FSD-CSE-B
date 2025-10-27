import "./App.css";
import Book from "./Book.jsx";

const books = [
  {
    image:
      "https://imgs.search.brave.com/05H786ZhwN6_kFEXKftJt9XNSVPENOt_O4GnQR1EahI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9uY2Jo/cHVibGlzaGVyLmlu/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzEwLzEwLTEtMzAw/eDQzNi5qcGc",
    title: "Physics",
    price: 785,
  },
  {
    image:
      "https://imgs.search.brave.com/svHtwW5dXNiMVL-oOFhuFU9X-rMaXZrYUw_vpJdlvng/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGVuZ3VpbnJh/bmRvbWhvdXNlLmNv/bS9jb3Zlci85Nzgw/NzQ0MDgwNDIx",
    title: "Chemistry",
    price: 985,
  },
  {
    image:
      "https://imgs.search.brave.com/6zkF9gprDG9qEX77oZiPbaXlA_vunpzpQ6x2C9hpUDM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9ib29rLXRpdGxl/ZC1uYXRpb25hbC1z/Y2llbmNlLWRheS1p/cy1wdXJwbGUtYmFj/a2dyb3VuZF8xMzA0/MzU4LTM3NzUuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw",
    title: "Maths",
    price: 685,
  },
  {
    image:
      "https://imgs.search.brave.com/1275Gv42z6mj3WP_dOiDe4sYCEse-Ede-W59UrcvkY4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3N0ZXItc2Np/ZW5jZS1zY2llbmNl/LXNjaWVuY2Utc2Np/ZW5jZS1zY2llbmNl/XzcwNjQ1Mi0zNzE2/Mi5qcGc_c2VtdD1h/aXNfaHlicmlkJnc9/NzQwJnE9ODA",
    title: "Biology",
    price: 1285,
  },
  {
    image:
      "https://imgs.search.brave.com/V223urAyDuHKd_UImXhtsk-NqdrRze41yep4dQOfzC0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzVkZmQw/MjhhNmFiZDFmMDAw/ODBkYThjNS9tYXN0/ZXIvd18xNjAwLGNf/bGltaXQvU2NpZW5j/ZV9Cb29rc19Hb29k/LXRvLUdvXzk3OC0w/LTM5My0yNTQzMy00/LmpwZw",
    title: "English",
    price: 585,
  },
  {
    image:
      "https://imgs.search.brave.com/V223urAyDuHKd_UImXhtsk-NqdrRze41yep4dQOfzC0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzVkZmQw/MjhhNmFiZDFmMDAw/ODBkYThjNS9tYXN0/ZXIvd18xNjAwLGNf/bGltaXQvU2NpZW5j/ZV9Cb29rc19Hb29k/LXRvLUdvXzk3OC0w/LTM5My0yNTQzMy00/LmpwZw",
    title: "English",
    price: 585,
  },
];

const App = () => {
  return (
    <>
   <center>
     <h1>Book_Parcel_App</h1>
   </center>
    <div className="book-list">
      {books.map((b, i) => (
        <Book key={i} book={b} />
      ))}
    </div>

    </>
  );
};

export default App;
// const parent = document.getElementById("root");
// const root = ReactDOM.createRoot(parent);
// root.render(<Book />);
