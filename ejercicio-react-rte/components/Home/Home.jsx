//import React from 'react';
import "./Home.css";

const Home = (props) => {
  const menu = props.menu;
 

  const listDishes = menu.map((dish, index) => (
    <li key={index}>
      <p>Nombre del plato: {dish.name}</p>
      <p>Descripción: {dish.description}</p>
      <p>Precio: {dish.price}€</p>
    </li>
  ));

  return (
    <div>
      <ul><h1>Carta Le Petit Bistró</h1>{listDishes}</ul>
    </div>
  );
}

export default Home;
