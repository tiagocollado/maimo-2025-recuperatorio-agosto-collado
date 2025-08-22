"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import MoviesGrid from "@/app/components/MoviesGrid";

const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=eb7e3fd7272143562cec959061b5eb32`;

export default function MoviesGridContainer() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(API_URL);
        setMovies(response.results);
      } catch (error) {
        console.error(error.message);
        setError("No se pudieron cargar las películas");
      }
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && <MoviesGrid movies={movies} loading={loading} />}
    </div>
  );
}
