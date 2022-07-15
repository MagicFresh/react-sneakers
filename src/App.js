import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";


const arr = [
  {
    title: 'Мужские кроссовки Nike Air Jordan',
    price: '1100 ',
    imageUrl: '/img/sneakers/img1.jpg',
  },
  {
    title: 'Мужские кроссовки Nike Air Force',
    price: '1250 ',
    imageUrl: '/img/sneakers/img2.jpg',
  },
  {
    title: 'Мужские кроссовки Adidas Yeezy Boost',
    price: '1550 ',
    imageUrl: '/img/sneakers/img4.jpg',
  },
  {
    title: 'Мужские кроссовки Nike Polo',
    price: '1350 ',
    imageUrl: '/img/sneakers/img3.jpg',
  },
]

function App() {
  return (
    <div className="Wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content-header">
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img width={14} height={14} src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {
            arr.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                onClick={() => console.log(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
