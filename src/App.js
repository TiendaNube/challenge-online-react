import React from 'react';
import './styles.scss';
import { Switch, Route, Link } from "react-router-dom";
//import ProductForm from './components/ProductForm';

import "./App.css";

const A = () => <div>Componente 1</div>;
const B = () => <div>Componente 2</div>;

function App() {
  return (
    <div className="App">
      <aside>
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
        <Switch>
          <Route exact path="/" component={A} />
          <Route path="/products" component={B} />
        </Switch>
      </main>
    </div>
  );
}

export default React.memo(App);
