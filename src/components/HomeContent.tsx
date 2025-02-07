import React from 'react';

const HomeContent = () => {
  return (
    <div>
      <section className="hero" style={{backgroundImage: "url(watch-10-bg.jpg)"}}>
        <div>
            <h1 className="fade-in"> Welcome to Watch World </h1>
            <p> Your one-stop shop for the best watches </p>
            <button>Shop Now</button>
        </div>
      </section>
    </div>
  );
}

export default HomeContent;
