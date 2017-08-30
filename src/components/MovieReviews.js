import React from 'react'


// const Review = ({ title }) => {
//   return (
//     <div className="review">
//       <h1>{title}</h1>
//     </div>
//   )
// }
//
// const MovieReviews = ({ reviews }) => {
//   return (
//     <div className="review-list">
//       {reviews.map((review, index) => <Review title={review.display_title} key={index}/>)}
//     </div>
//   )
// }

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.map((review, index) => {
        return (
          <div className="review" key={index}>
            <h1>{review.display_title}</h1>
          </div>
        )
      })}
    </div>
  )
}

MovieReviews.defaultProps = { reviews: [] }

export default MovieReviews
