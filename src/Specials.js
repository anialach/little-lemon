import React from 'react';
import greekSalad from '../src/greek salad.jpg';
import bruschetta from '../src/bruchetta.svg';
import lemonDessert from '../src/lemon dessert.jpg';

function Specials() {
  return (
    <section className="specials">
      <div className="specials-top-row">
        <h2>This week specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-bottom-row">
        <div className="special-item">
          <img src={greekSalad} alt="Greek salad" />
          <div className="special-item-content">
            <div className="special-item-header">
              <h3>Greek salad</h3>
              <p className="price">$12.99</p>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            <button className="order-button">Order a delivery</button>
          </div>
        </div>
        <div className="special-item">
          <img src={bruschetta} alt="Bruschetta" />
          <div className="special-item-content">
            <div className="special-item-header">
              <h3>Bruschetta</h3>
              <p className="price">$5.99</p>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes and herbs.</p>
            <button className="order-button">Order a delivery</button>
          </div>
        </div>
        <div className="special-item">
          <img src={lemonDessert} alt="Lemon Dessert" />
          <div className="special-item-content">
            <div className="special-item-header">
              <h3>Lemon Dessert</h3>
              <p className="price">$5.00</p>
            </div>
            <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <button className="order-button">Order a delivery</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;