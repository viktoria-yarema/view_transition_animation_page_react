import Image from "next/image";
import { ViewTransition } from "react";
import { Card } from "@/components/ui/card";

interface MoviePosterProps {
	posterUrl: string;
	title: string;
	movieId: string;
}

export function MoviePoster({ posterUrl, title, movieId }: MoviePosterProps) {
	return (
		<Card className="overflow-hidden">
			<ViewTransition name={`poster-${movieId}`}>
				<div className="relative w-full aspect-[2/3]">
					<Image
						src={posterUrl}
						alt={title}
						fill
						className="object-cover"
						sizes="(max-width: 1024px) 100vw, 33vw"
						priority
					/>
				</div>
			</ViewTransition>
		</Card>
	);
}

