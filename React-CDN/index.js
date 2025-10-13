function book(props) {
  const image = React.createElement("img", {
    src: props.image,
    width: "150",
    height: "150",
    alt: "book image"
  }, null)

  const h4 = React.createElement("h4", null, "Price:" + props.price + "/-")

  const child = React.createElement("div", { className: "card" }, image, h4)

  return child;
}

const books = [
  { image: "https://imgs.search.brave.com/e8P-mqRtH_KDSXHpKH7Jh696_j1F8dW4v6ii00Uq-ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIyLTAy/LTIyL3JvYWQtdG8t/cmVhY3QtYmVzdC1i/b29rLmpwZWc", price: "123" },
  { image: "https://imgs.search.brave.com/e8P-mqRtH_KDSXHpKH7Jh696_j1F8dW4v6ii00Uq-ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIyLTAy/LTIyL3JvYWQtdG8t/cmVhY3QtYmVzdC1i/b29rLmpwZWc", price: "223" },
  { image: "https://imgs.search.brave.com/e8P-mqRtH_KDSXHpKH7Jh696_j1F8dW4v6ii00Uq-ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIyLTAy/LTIyL3JvYWQtdG8t/cmVhY3QtYmVzdC1i/b29rLmpwZWc", price: "323" },

];

const booklist = books.map(p => (
  React.createElement(book, { image: p.image, price: p.price })
))

const bookele = React.createElement("div", { className: "par" }, booklist);


const parent = document.getElementById("root")
const root = ReactDOM.createRoot(parent)

root.render(bookele)

// root.render(React.createElement(book, {
//   image: "https://imgs.search.brave.com/e8P-mqRtH_KDSXHpKH7Jh696_j1F8dW4v6ii00Uq-ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIyLTAy/LTIyL3JvYWQtdG8t/cmVhY3QtYmVzdC1i/b29rLmpwZWc",
//   price: "345"
// }))

