import { Component } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyGallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
  };

  fetchMovies = () => {
    this.setState({ isLoading: true });
    console.log("fetch in corso...");
    fetch(
      "http://www.omdbapi.com/?apikey=cb94ee65&s=" +
        this.props.fetch
    )
      .then((resp) => {
        if (resp.ok) {
          console.log("fetch conclusa");
          return resp.json();
        } else {
          throw new Error("Errore nella richiesta");
        }
      })
      .then((movies) => {
        console.log(movies.Search);
        this.setState({ movies: movies.Search });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isError: true });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount = (fetch) => {
    this.fetchMovies();
  };
  render() {
    const filterMovies = this.state.movies.filter(
      (film, index) => index < 6
    );

    return (
      <>
        <h4>
          {this.props.title}
          {this.state.isLoading && (
            <Spinner animation="border" variant="primary" />
          )}
        </h4>
        {this.state.isError && (
          <Alert variant="danger">
            Si è verificato un errore
          </Alert>
        )}
        <Row xs={1} sm={2} lg={4} xl={6} className="mb-4">
          {filterMovies.map((films) => {
            return (
              <Col
                className="mb-2 text-center px-1"
                key={films.imdbID}
              >
                <img
                  src={films.Poster}
                  alt={films.Title}
                  className="img-card"
                />
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}
export default MyGallery;
