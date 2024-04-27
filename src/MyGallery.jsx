import { Component } from "react";
import {
  Alert,
  Spinner,
  Card,
  Button,
} from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

class MyGallery extends Component {
  state = {
    movies: [],
    isLoading: false,
    isError: false,
    errorMsg: "",
    isShow: false,
  };

  fetchMovies = () => {
    this.setState({ isLoading: true });

    fetch(
      "http://www.omdbapi.com/?apikey=cb94ee65&s=" +
        this.props.fetch
    )
      .then((resp) => {
        if (resp.ok) {
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
  handleMouseEnter = () => {
    this.setState({ isShow: true });
  };

  handleMouseLeave = () => {
    this.setState({ isShow: false });
  };
  render() {
    const filterMovies =
      this.state.movies && this.state.movies.length > 0
        ? this.state.movies.filter(
            (film, index) => index < 6
          )
        : [];

    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            speed: 2000,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="my-3">
        <h4 className="my-3">
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

        <div className="slider-container">
          <Slider {...settings}>
            {filterMovies.map((films) => {
              return (
                <>
                  <div
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    key={films.imdbID}
                    className="mx-2"
                  >
                    {!this.state.isShow && (
                      <img
                        src={films.Poster}
                        alt={films.Title}
                        className="img-fluid img-card object-fit-cover"
                      />
                    )}
                  </div>

                  {this.state.isShow && (
                    <Card
                      onMouseEnter={this.handleMouseEnter}
                      onMouseLeave={this.handleMouseLeave}
                      className="bg-dark text-white mx-2"
                    >
                      <Card.Img
                        variant="top"
                        src={films.Poster}
                      />
                      <Card.Body>
                        <Card.Title>
                          {films.Title}
                        </Card.Title>
                        <Button
                          variant="outline-light"
                          className="rounded-circle"
                        >
                          <i class="bi bi-play-fill"></i>
                        </Button>
                      </Card.Body>
                    </Card>
                  )}
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
export default MyGallery;
