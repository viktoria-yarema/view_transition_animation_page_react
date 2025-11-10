import Image from "next/image";
import { ViewTransition } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Movie } from "@/types/movie";
import Link from "next/link";

interface MovieCardProps {
	movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
	return (
		<Link href={`/movies/${movie.imdbID}`}>
			<Card className="overflow-hidden  hover:shadow-lg cursor-pointer h-full flex flex-col border-[0.5px]">
				<ViewTransition name={`poster-${movie.imdbID}`}>
					<div className="relative w-full aspect-[2/3] overflow-hidden">
						<Image
							src={movie.Poster}
							alt={movie.Title}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
					</div>
				</ViewTransition>
				<CardContent className="flex-1 flex flex-col pt-3">
					<h3 className="font-semibold text-lg mb-2 line-clamp-2">
						{movie.Title}
					</h3>
					<div className="flex items-center gap-2 mb-2 flex-wrap">
						<Badge variant="secondary">{movie.Year}</Badge>
						{movie.imdbRating !== "N/A" && (
							<Badge variant="outline">⭐ {movie.imdbRating}</Badge>
						)}
						{movie.Type === "series" && <Badge variant="outline">Series</Badge>}
					</div>
					<p className="text-sm text-muted-foreground line-clamp-2 mt-auto">
						{movie.Plot}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
}

