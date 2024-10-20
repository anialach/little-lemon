import React from 'react';

function Main() {
  return (
    <main>
      <h2>This week specials!</h2>
      <section className="specials">
        <article>
          <h3>Greek salad</h3>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          <button>Order a delivery</button>
        </article>
        <article>
          <h3>Bruschetta</h3>
          <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
          <button>Order a delivery</button>
        </article>
        <article>
          <h3>Lemon Dessert</h3>
          <p>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <button>Order a delivery</button>
        </article>
      </section>
    </main>
  );
}

export default Main;