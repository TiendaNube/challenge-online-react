import React from 'react';
import './styles.scss';
import { Switch, Route, NavLink } from "react-router-dom";
import ProductForm from './components/ProductForm';

import {ReactComponent as TnLogo} from './img/tn.svg';

const A = () => <div>Componente 1</div>;

function App() {
  return (
    <div className="app layout">
      <aside>
        <header> <TnLogo className="svg"/> </header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active" exact>Product List</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">Products</NavLink>
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
          <Route exact path="/products" component={ProductForm} />
        </Switch>
      </main>
    </div>
  );
}

export default React.memo(App);
