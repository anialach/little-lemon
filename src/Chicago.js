import React from 'react';
import marioAdrianA from '../src/Mario and Adrian A.jpg';
import marioAdrianB from '../src/Mario and Adrian b.jpg';

function Chicago() {
  return (
    <section className="about-chicago">
      <div className="about-chicago-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div className="about-chicago-images">
        <img src={marioAdrianA} alt="Mario and Adrian A" className="chicago-image-a" />
        <img src={marioAdrianB} alt="Mario and Adrian B" className="chicago-image-b" />
      </div>
    </section>
  );
}

export default Chicago;