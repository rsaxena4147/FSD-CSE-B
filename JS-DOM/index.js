const image = document.createElement('img')
image.src = "https://imgs.search.brave.com/e8P-mqRtH_KDSXHpKH7Jh696_j1F8dW4v6ii00Uq-ck/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hbHZh/cm90cmlnby5jb20v/YmxvZy9hc3NldHMv/aW1ncy8yMDIyLTAy/LTIyL3JvYWQtdG8t/cmVhY3QtYmVzdC1i/b29rLmpwZWc"
image.width = "150"
image.height = "150"

const h4 = document.createElement('h4')
h4.innerText = "Price : 125/-"
const child = document.createElement('div')
child.className = "card"
child.appendChild(image)
child.appendChild(h4)

const parent = document.getElementById("root")
parent.appendChild(child)
