import Card from "@/app/components/Card";

export default function MoviesGrid({ movies, loading }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
