import { Badge } from "@/components/ui/badge";
import { Movie } from "@/types/movie";

interface MovieBadgesProps {
	movie: Movie;
}

export function MovieBadges({ movie }: MovieBadgesProps) {
	return (
		<div className="flex items-center gap-2 flex-wrap">
			<Badge variant="secondary">{movie.Year}</Badge>
			{movie.Rated !== "N/A" && (
				<Badge variant="outline">{movie.Rated}</Badge>
			)}
			{movie.imdbRating !== "N/A" && (
				<Badge variant="default">⭐ {movie.imdbRating} / 10</Badge>
			)}
			{movie.Metascore !== "N/A" && (
				<Badge variant="outline">Metascore: {movie.Metascore}</Badge>
			)}
			{movie.Type === "series" && <Badge variant="outline">Series</Badge>}
			{movie.Type === "series" && movie.totalSeasons && (
				<Badge variant="outline">{movie.totalSeasons} Seasons</Badge>
			)}
		</div>
	);
}

