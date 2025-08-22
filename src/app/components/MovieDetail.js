"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default function MovieDetail({ id }) {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=eb7e3fd7272143562cec959061b5eb32`;

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(API_URL);
        setMovieDetail(data);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };
    fetchMovieDetail();
  }, [id]);
  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div className="grid">
          <div className="col_6  flex justify-center p-10">
            <div className="relative w-[500px] h-[500px]">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
                fill={true}
                alt={movieDetail.title}
              />
            </div>
          </div>
          <div className="col_6 flex flex-col justify-center p-10">
            <h1 className="text-2xl font-bold mb-8">{movieDetail.title}</h1>
            <p className="mb-10">{movieDetail.overview}</p>
            {movieDetail.genres && movieDetail.genres.length > 0 && (
              <ul className="generos flex flex-wrap gap-2 mb-10">
                {movieDetail.genres.map((genre) => (
                  <li
                    key={genre.id}
                    className="bg-gray-500 rounded-xl px-3 py-1 text-white text-sm md:text-base"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            )}
            {movieDetail.runtime && (
              <p className="mb-4">Duración: {movieDetail.runtime} minutos</p>
            )}

            {movieDetail.production_companies &&
              movieDetail.production_companies.length > 0 && (
                <div className="mb-10">
                  <h3 className="font-bold">Productoras:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {movieDetail.production_companies.map((company) => (
                      <li key={company.id}>{company.name}</li>
                    ))}
                  </ul>
                </div>
              )}

            <div className="flex gap-5">
              <Link
                className="bg-white rounded-xl p-2 w-[150px] text-black text-center hover:bg-opacity-50"
                href="/"
              >
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
