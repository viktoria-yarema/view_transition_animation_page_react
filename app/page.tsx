import { MovieCard } from "@/components/MovieCard";
import { Movie } from "@/types/movie";
import moviesData from "./api/movies.json";

export default function Home() {
	const movies = moviesData as Movie[];

	return (
		<div
			className="min-h-screen bg-background"
			style={{ viewTransitionName: "page-content" }}
		>
			<main className="container mx-auto px-4 lg:px-6 py-8">
				<h1 className="text-4xl font-bold mb-8 text-center">Movies</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
					{movies.map(movie => (
						<MovieCard key={movie.imdbID} movie={movie} />
					))}
				</div>
			</main>
		</div>
	);
}
