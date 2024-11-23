import React from 'react';
import './Reviews.css';
import img from '../../../assets/Img.png';
import imgTw0 from '../../../assets/Img (1).png';
import imgThree from '../../../assets/Img (2).png';

const reviewsData = [
  {
    id: 1,
    content: "Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque",
    imgSrc: img,
    title: "Kuphal LLC",
    subtitle: "Emanuel Boyle",
  },
  {
    id: 2,
    content: "Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula",
    imgSrc: imgTw0,
    title: "Glover - Orn",
    subtitle: "River Graves",
  },
  {
    id: 3,
    content: "Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna. Nisl non eget sit pellentesque tristique et",
    imgSrc: imgThree,
    title: "Haag LLC",
    subtitle: "Ryder Malone",
  },
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      {reviewsData.map((review) => (
        <div key={review.id} className="review-card">
          <div className="quote-icon text-4xl" style={{color:'#34B778'}}>
          <p className='text-7xl'> “</p>
            </div>
          <div className="review-content">{review.content}</div>
          <div className="review-img-section">
            <img src={review.imgSrc} alt={`Review ${review.id}`} className="review-img" />
            <div className="img-bottom-section">
              <h3 className="review-title">{review.title}</h3>
              <h3 className="review-subtitle">{review.subtitle}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
