
function App() {
  return (
    <div className="Wrapper">
      <header>
        <div className="header-left">
          <img width={40} height={40} src="/img/logo.png" alt="img" />
          <div className="header-info">
            <h3 className="text-upper">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="header-right">
          <li>
            <img width={18} height={18} src="/img/cart.svg" alt="img" />
            <span>1200 Br</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="img" />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все кроссовки</h1>
        <div className="sneakers">
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img1.jpg" alt="" />
            <h5>Мужсие кроссовки Nike Air Jordan</h5>
            <div className="card-mid">
              <div className="card-botom">
                <span>Цена:</span>
                <b>1300 Br</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img2.jpg" alt="" />
            <h5>Мужсие кроссовки Nike Air Jordan</h5>
            <div className="card-mid">
              <div className="card-botom">
                <span>Цена:</span>
                <b>1300 Br</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img3.jpg" alt="" />
            <h5>Мужсие кроссовки Nike Air Jordan</h5>
            <div className="card-mid">
              <div className="card-botom">
                <span>Цена:</span>
                <b>1300 Br</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img4.jpg" alt="" />
            <h5>Мужсие кроссовки Nike Air Jordan</h5>
            <div className="card-mid">
              <div className="card-botom">
                <span>Цена:</span>
                <b>1300 Br</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img5.jpg" alt="" />
            <h5>Мужсие кроссовки Nike Air Jordan</h5>
            <div className="card-mid">
              <div className="card-botom">
                <span>Цена:</span>
                <b>1300 Br</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/img6.jpg" alt="" />
            <h5>Мужсие кроссовки Nike Air Jordan</h5>
            <div className="card-mid">
              <div className="card-botom">
                <span>Цена:</span>
                <b>1300 Br</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
