import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentWillMount() {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}&api-key=387a337eb88c4aba80d745832b467409`).then(res => res.json()).then(review => this.setState({ reviews: review.results }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer
