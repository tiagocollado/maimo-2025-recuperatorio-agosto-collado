"use client";
import { useState } from "react";
import Image from "next/image";

export default function page() {
  const [showImage, setShowImage] = useState(false);

  const peliculas = [
    { name: "Inception", timesSeen: 5 },
    { name: "The Matrix", timesSeen: 10 },
    { name: "Interstellar", timesSeen: 2 },
    { name: "Pulp Fiction", timesSeen: 8 },
    { name: "Mad Max: Fury Road", timesSeen: 3 },
  ];

  const moviesToDisplay = peliculas.filter((movie) => movie.timesSeen > 3);

  let imageSection;
  if (showImage) {
    imageSection = (
      <Image
        src="/mi-foto.jpg"
        alt="Mi foto"
        width={600}
        height={600}
        className="rounded-lg"
      />
    );
  } else {
    imageSection = (
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setShowImage(true)}
      >
        Ver imagen
      </button>
    );
  }

  return (
    <div className="max-w-[1200px] my-8 mx-auto pt-11 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="image_container flex justify-center">
          {imageSection}
        </div>

        <div className="content_container flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">Tiago Collado</h1>
          <p className="mb-4 text-stone-50">
            Soy estudiante avanzado de la Licenciatura en Tecnologia
            Multimedial. Cuando comenzo el año me propuse que en agosto de 2025 empezaria a laburar de lo que estudio. Despues de meses, entre en 
            una Startup y en una agencia creativa, todo en la misma semana!!!
          </p>

          <a
              href="https://www.linkedin.com/in/tiagocollado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold mb-8"
            >
              Conectemos en LinkedIn!
            </a>

          <section>
            <h2 className="text-3xl font-bold text-amber-700 mb-4 text-center md:text-left">
              Mis películas favoritas
            </h2>
            {moviesToDisplay.length > 0 ? (
              <ul className="list-none space-y-2 text-lg text-gray-700">
                {moviesToDisplay.map((movie) => (
                  <li
                    key={movie.name}
                    className="bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <span className="font-medium text-gray-900">
                      {movie.name}:
                    </span>{" "}
                    {movie.timesSeen} veces
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic text-center md:text-left">
                Aún no hay películas en el listado que cumplan con el criterio.
              </p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
