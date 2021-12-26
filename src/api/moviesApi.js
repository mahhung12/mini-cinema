// import axios from "./axios";
import axios from "axios";

const API_KEY = "25d5a81cb8b0abcf8248cb23190f5691";
const url = "https://api.themoviedb.org/3";
const NOW_PLAYING_URL = `${url}/movie/now_playing`;
const TOP_RATED_URL = `${url}/movie/top_rated`;
const MOVIE_URL = `${url}/movie`;
const MOVIES_URL = `${url}/discover/movie`;
const GENRE_URL = `${url}/genre/movie/list`;
const PERSON_URL = `${url}/trending/person/week`;

// api/movie.js
export const fetchMovies = async () => {
    try {
        const params = {
            api_key: API_KEY,
            language: "en_US",
            page: 1,
        };
        const { data } = await axios.get(NOW_PLAYING_URL, {
            params,
        });

        const posterUrl = "https://image.tmdb.org/t/p/original/";
        const modifiedData = data["results"].map((m) => ({
            id: m["id"],
            backPoster: posterUrl + m["backdrop_path"],
            popularity: m["popularith"],
            title: m["title"],
            poster: posterUrl + m["poster_path"],
            overview: m["overview"],
            rating: m["vote_average"],
        }));

        return modifiedData;
    } catch (error) {}
};

export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(GENRE_URL, {
            params: {
                api_key: API_KEY,
                language: "en_US",
                page: 1,
            },
        });
        const modifiedData = data["genres"].map((g) => ({
            id: g["id"],
            name: g["name"],
        }));
        return modifiedData;
    } catch (error) {}
};

export const fetchMovieByGenre = async (genre_id) => {
    try {
        const { data } = await axios.get(MOVIES_URL, {
            params: {
                api_key: API_KEY,
                language: "en_US",
                page: 1,
                with_genres: genre_id,
            },
        });
        const posterUrl = "https://image.tmdb.org/t/p/original/";
        const modifiedData = data["results"].map((m) => ({
            id: m["id"],
            backPoster: posterUrl + m["backdrop_path"],
            popularity: m["popularith"],
            title: m["title"],
            poster: posterUrl + m["poster_path"],
            overview: m["overview"],
            rating: m["vote_average"],
        }));

        return modifiedData;
    } catch (error) {}
};

export const fetchPersons = async () => {
    try {
        const { data } = await axios.get(PERSON_URL, {
            params: {
                api_key: API_KEY,
            },
        });
        const modifiedData = data["results"].map((p) => ({
            id: p["id"],
            popularity: p["popularity"],
            name: p["name"],
            profileImg:
                "https://image.tmdb.org/t/p/w200" +
                p["profile_path"],
            known: p["known_for_department"],
        }));
        return modifiedData;
    } catch (error) {}
};

export const fetchTopratedMovie = async () => {
    try {
        const { data } = await axios.get(TOP_RATED_URL, {
            params: {
                api_key: API_KEY,
                language: "en_US",
                page: 1,
            },
        });
        const posterUrl = "https://image.tmdb.org/t/p/original/";
        const modifiedData = data["results"].map((m) => ({
            id: m["id"],
            backPoster: posterUrl + m["backdrop_path"],
            popularity: m["popularith"],
            title: m["title"],
            poster: posterUrl + m["poster_path"],
            overview: m["overview"],
            rating: m["vote_average"],
        }));

        return modifiedData;
    } catch (error) {}
};

export const fetchMovieDetail = async (id) => {
    try {
        const { data } = await axios.get(`${MOVIE_URL}/${id}`, {
            params: {
                api_key: API_KEY,
                language: "en_US",
            },
        });
        return data;
    } catch (error) {}
};

export const fetchVideoMovie = async (id) => {
    try {
        const params = {
            api_key: API_KEY,
        };
        const { data } = await axios.get(
            `${MOVIE_URL}/${id}/videos`,
            { params }
        );

        return data;
    } catch (error) {}
};

export const fetchMovieVideos = async (id) => {
    try {
        const { data } = await axios.get(
            `${MOVIE_URL}/${id}/videos`,
            {
                params: {
                    api_key: API_KEY,
                },
            }
        );
        return data["results"][0];
    } catch (error) {}
};

export const fetchCasts = async (id) => {
    try {
        const { data } = await axios.get(
            `${MOVIE_URL}/${id}/credits`,
            {
                params: {
                    api_key: API_KEY,
                },
            }
        );
        const modifiedData = data["cast"].map((c) => ({
            id: c["cast_id"],
            character: c["character"],
            name: c["name"],
            img:
                "https://image.tmdb.org/t/p/w200" +
                c["profile_path"],
        }));

        return modifiedData;
    } catch (error) {}
};

export const fetchSimilarMovie = async (id) => {
    try {
        const { data } = await axios.get(
            `${MOVIE_URL}/${id}/similar`,
            {
                params: {
                    api_key: API_KEY,
                    language: "en_US",
                },
            }
        );
        const posterUrl = "https://image.tmdb.org/t/p/original/";
        const modifiedData = data["results"].map((m) => ({
            id: m["id"],
            backPoster: posterUrl + m["backdrop_path"],
            popularity: m["popularith"],
            title: m["title"],
            poster: posterUrl + m["poster_path"],
            overview: m["overview"],
            rating: m["vote_average"],
        }));

        return modifiedData;
    } catch (error) {}
};
