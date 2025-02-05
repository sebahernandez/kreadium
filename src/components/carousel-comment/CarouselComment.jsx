import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import PropTypes from "prop-types";

const styles = {
  card: {
    display: "flex",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "8px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    maxWidth: "400px",
    height: "160px",
    margin: "auto",
  },
  name: {
    fontSize: "1.2rem",
    color: "#fff",
  },
  stars: {
    marginBottom: "0.5rem",
  },
  description: {
    textAlign: "left",
    fontSize: "1rem",
    marginTop: "0.5rem",
    height: "50px",
  },
};

const RatingStars = ({ rating, maxStars = 5 }) => {
  const stars = [];
  for (let i = 1; i <= maxStars; i++) {
    stars.push(
      <span
        key={i}
        style={{ color: i <= rating ? "#FFD700" : "#ddd", fontSize: "1.2rem" }}
      >
        &#9733;
      </span>
    );
  }
  return <div style={styles.stars}>{stars}</div>;
};

const CommentCarousel = ({ comments, interval = 3000 }) => {
  if (!comments || comments.length === 0) {
    return <p>No hay comentarios para mostrar.</p>;
  }

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: interval, disableOnInteraction: false }}
      loop={true}
      slidesPerView={3}
      style={{ paddingBottom: "3rem" }}
    >
      {comments.map((comment) => (
        <SwiperSlide key={comment.id}>
          <div style={styles.card}>
            <div className="w-28">
              <img
                className="rounded-full w-16 h-16"
                src={comment.image}
                alt={comment.name}
                style={styles.image}
              />
            </div>
            <div className="w-full flex flex-col">
              <h3 style={styles.name}>{comment.name}</h3>
              <p className="text-gray-400" style={styles.description}>
                {comment.description}
              </p>
              <RatingStars rating={comment.rating} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

CommentCarousel.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  interval: PropTypes.number,
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxStars: PropTypes.number,
};

RatingStars.defaultProps = {
  maxStars: 5,
};

export default CommentCarousel;
