import ReviewItem from "./Item";
import "./reviews.css";
import users from "./users";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useEffect } from "react";

function Reviews() {
  useEffect(() => {
    const reviews = document.getElementById("review_wrapper");
    const lastChild = reviews.lastChild;
    reviews.insertAdjacentElement("afterbegin", lastChild);
  }, []);

  function moveReviewLeft() {
    const reviews = document.getElementById("review_wrapper");
    const review_item = reviews.lastElementChild;
    const button = document.querySelector(".review-btn-left");
    reviews.style.animationName = "reviewLeft";
    button.disabled = true;
    setTimeout(() => {
      reviews.insertAdjacentElement("afterbegin", review_item);
      button.disabled = false;
      reviews.style.animationName = "";
    }, 250);
  }

  function moveReviewRight() {
    const reviews = document.getElementById("review_wrapper");
    const review_item = reviews.firstElementChild;
    const button = document.querySelector(".review-btn-right");
    reviews.style.animationName = "reviewRight";
    button.disabled = true;
    setTimeout(() => {
      reviews.insertAdjacentElement("beforeend", review_item);
      button.disabled = false;
      reviews.style.animationName = "";
    }, 200);
  }
  return (
    <section id="review_container">
      <h2>Nuestros clientes opinan</h2>
      <div id="review_slider">
        <div id="review_wrapper">
          {users.map((user) => (
            <ReviewItem
              key={user.author}
              author={user.author}
              title={user.title}
              description={user.description}
              image={user.image}
            />
          ))}
        </div>
        <button
          className="review-btn-left"
          onClick={() => moveReviewLeft()}
        >
          <HiOutlineChevronLeft />
        </button>
        <button
          className="review-btn-right"
          onClick={() => moveReviewRight()}
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Reviews;
