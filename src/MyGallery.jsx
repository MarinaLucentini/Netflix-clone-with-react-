import { Component } from "react";
import { Alert, Spinner } from "react-bootstrap";
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
  render() {
    const filterMovies = this.state.movies.filter(
      (film, index) => index < 6
    );
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

        <div className="slider-container">
          <Slider {...settings}>
            {filterMovies.map((films) => {
              return (
                <div>
                  <img
                    src={films.Poster}
                    alt={films.Title}
                    className="img-fluid img-card"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}
export default MyGallery;
