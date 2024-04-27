import { Component } from "react";
import { Alert, Col, Row, Spinner } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class MyGallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
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
          if (resp.status === 400) {
            throw new Error(
              "Richiesta errata o incompleta"
            );
          }
          if (resp.status === 401) {
            throw new Error("Richiesta non autorizzata");
          }
          if (resp.status === 403) {
            throw new Error("Forbidden");
          }
          if (resp.status === 404) {
            throw new Error("Elemento non trovato");
          }
          if (resp.status === 500) {
            throw new Error("Server Error");
          }
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
        this.setState({ errorMsg: err.message });
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
            {this.state.errorMsg}
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
