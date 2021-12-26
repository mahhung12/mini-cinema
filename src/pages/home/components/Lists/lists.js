import {
    fetchGenre,
    fetchMovieByGenre,
    fetchMovies,
    fetchPersons,
    fetchTopratedMovie,
    fetchMovieDetail,
    fetchMovieVideos,
} from "api/moviesApi";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "./lists.scss";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    slidesToShow: 6,
};

function Lists() {
    const [isOpen, setIsOpen] = useState(false);
    const [getIdMovie, setGetIdMovie] = useState(802);
    const [detail, setDetail] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);
    const [movieByGenre, setMovieByGenre] = useState([]);
    const [persons, setPersons] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [activeGenres, setActiveGenres] = useState();

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await fetchMovies());
            setGenres(await fetchGenre());
            setMovieByGenre(await fetchMovieByGenre());
            setPersons(await fetchPersons());
            setTopRated(await fetchTopratedMovie());
        };
        fetchAPI();
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            setDetail(await fetchMovieVideos(getIdMovie));
        };

        fetchAPI();
    }, [getIdMovie]);

    const onWatchClick = (id) => {
        setGetIdMovie(id);
        setIsOpen(true);
    };

    const onSelectMovieByGenres = async (id) => {
        setMovieByGenre(await fetchMovieByGenre(id));
        setActiveGenres(id);
        console.log(activeGenres);
    };

    // console.log(detail);

    const MoviePalyerModal = (props) => {
        const youtubeUrl = "https://www.youtube.com/watch?v=";
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title
                        id="contained-modal-title-vcenter"
                        style={{
                            color: "#000000",
                            fontWeight: "bolder",
                        }}
                    >
                        Trailer
                        {detail.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ backgroundColor: "#000000" }}
                >
                    <ReactPlayer
                        className="container-fluid"
                        url={youtubeUrl + detail.key}
                        playing
                        width="100%"
                    ></ReactPlayer>
                </Modal.Body>
            </Modal>
        );
    };

    const GenresMovie = ({ genres }) => {
        return (
            <div className="lists-movie__title">
                {genres.map((genres) => {
                    return (
                        <h1
                            key={genres.id}
                            className={`title__text ${
                                genres.id === activeGenres
                                    ? "activeGenres"
                                    : ""
                            }`}
                            onClick={() =>
                                onSelectMovieByGenres(genres.id)
                            }
                        >
                            {genres.name}
                        </h1>
                    );
                })}
            </div>
        );
    };

    const MovieListsComponents = ({
        getMovieByGenre,
        title,
    }) => {
        return (
            <div className="lists-movie__lists">
                <div className="title">{title}</div>
                <div className="lists">
                    <Slider {...settings}>
                        {getMovieByGenre.map((movie) => {
                            return (
                                <div
                                    key={movie.id}
                                    className="item"
                                >
                                    <div className="item__banner">
                                        <img
                                            src={movie.poster}
                                            alt={movie.title}
                                        />
                                    </div>

                                    <div className="item__movie-information">
                                        <div className="btn-func">
                                            <button
                                                onClick={() =>
                                                    onWatchClick(
                                                        movie.id
                                                    )
                                                }
                                            >
                                                (Watch)
                                            </button>
                                            <button>
                                                (Add)
                                            </button>
                                        </div>
                                        <div className="infor">
                                            <div className="infor-top">
                                                <h1>
                                                    {movie.title}
                                                </h1>
                                                <span>
                                                    {
                                                        movie.rating
                                                    }
                                                </span>
                                            </div>
                                            <div className="infor-bottom">
                                                {movie.overview}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>
        );
    };

    return (
        <div className="lists-movie">
            <GenresMovie genres={genres} />

            <MovieListsComponents
                getMovieByGenre={movieByGenre}
                title="Trending Movies"
            />
            <MovieListsComponents
                getMovieByGenre={topRated}
                title="Top Rated"
            />

            <MoviePalyerModal
                show={isOpen}
                onHide={() => {
                    setIsOpen(false);
                }}
            ></MoviePalyerModal>
        </div>
    );
}

export default Lists;
