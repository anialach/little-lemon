// CustomersSay.js
import React from 'react';
import customerImage from '../src/Serene Portrait of Mature Woman.jpeg';

function CustomersSay() {
  const testimonials = [
    {
      rating: 5,
      image: customerImage,
      name: "Sarah M.",
      review: "The atmosphere and food at Little Lemon are simply outstanding. A true gem in Chicago!"
    },
    {
      rating: 5,
      image: customerImage,
      name: "John D.",
      review: "Best Mediterranean food in the city. The service is impeccable!"
    },
    {
      rating: 5,
      image: customerImage,
      name: "Maria R.",
      review: "Authentic flavors that transport you straight to the Mediterranean."
    },
    {
      rating: 5,
      image: customerImage,
      name: "Alex K.",
      review: "The special menu items are always a delightful surprise. Never disappoints!"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="rating">{'★'.repeat(testimonial.rating)}</div>
              <img src={testimonial.image} alt={testimonial.name} className="customer-image" />
              <p className="name">{testimonial.name}</p>
              <p className="review">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomersSay;