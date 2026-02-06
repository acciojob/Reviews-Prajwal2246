import React from "react";
import Review from "./Review";

function App() {
  return (
    <div>
      <section className="container">
        <h1 id="review-heading"> Our Reviews</h1>
        <main>
          <Review />
        </main>
      </section>
    </div>
  );
}

export default App;
