function ReviewItem({ title, description, image, author }) {
  return (
    <article className="review_item">
      <div className="review_item-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="review_item-profile">
        <img src={image} alt="" />
        <h3>{author}</h3>
      </div>
    </article>
  );
}

export default ReviewItem;
