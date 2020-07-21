import React from 'react';
import './styles.scss';
import { Switch, Route, Link } from "react-router-dom";
import ProductForm from './components/ProductForm';

const A = () => <div>Componente 1</div>;

function App() {
  return (
    <div className="app layout">
      <aside>
        <header>Tiendanube</header>
        <nav>
          <ul>
            <li>
              <Link to="/">Product List</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <header className="page-title">
          <h1>Products</h1>
        </header>
        <Switch>
          <Route exact path="/" component={A} />
          <Route path="/products" component={ProductForm} />
        </Switch>
      </main>
    </div>
  );
}

export default React.memo(App);
