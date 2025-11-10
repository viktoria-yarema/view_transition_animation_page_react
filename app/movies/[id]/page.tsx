import { notFound } from "next/navigation";
import { Movie } from "@/types/movie";
import moviesData from "../../api/movies.json";
import { BackLink } from "@/components/BackLink";
import { MoviePoster } from "@/components/MoviePoster";
import { MovieBadges } from "@/components/MovieBadges";
import { InfoCard } from "@/components/InfoCard";
import { DetailItem } from "@/components/DetailItem";
import { GalleryGrid } from "@/components/GalleryGrid";

interface MovieDetailPageProps {
	params: Promise<{ id: string }>;
}

export default async function MovieDetailPage({
	params,
}: MovieDetailPageProps) {
	const { id } = await params;
	const movies = moviesData as Movie[];
	const movie = movies.find(m => m.imdbID === id);

	if (!movie) {
		notFound();
	}

	return (
		<div
			className="min-h-screen bg-background"
			style={{ viewTransitionName: "page-content" }}
		>
			<main className="container mx-auto px-4 lg:px-6 py-8">
				<div className="flex flex-col gap-4">
					<BackLink />

					<div className="flex flex-col lg:flex-row gap-4">
						<div className="lg:w-1/3">
							<MoviePoster
								posterUrl={movie.Poster}
								title={movie.Title}
								movieId={movie.imdbID}
							/>
						</div>

						<div className="flex-1 flex flex-col gap-4">
							<div className="flex flex-col gap-4">
								<h1 className="text-4xl font-bold">{movie.Title}</h1>
								<MovieBadges movie={movie} />
							</div>

							<InfoCard title="Plot">
								<p className="text-muted-foreground leading-relaxed">
									{movie.Plot}
								</p>
							</InfoCard>

							<div className="flex flex-col md:flex-row gap-4">
								<InfoCard title="Details" titleClassName="text-lg" className="min-w-1/3">
									<div className="flex flex-col gap-3">
										<DetailItem label="Runtime" value={movie.Runtime} />
										<DetailItem label="Released" value={movie.Released} />
										<DetailItem label="Genre" value={movie.Genre} />
										<DetailItem label="Language" value={movie.Language} />
										<DetailItem
											label="Country"
											value={movie.Country}
											showSeparator={false}
										/>
									</div>
								</InfoCard>

								<InfoCard title="Cast & Crew" titleClassName="text-lg">
									<div className="flex flex-col gap-3">
										<DetailItem label="Director" value={movie.Director} />
										<DetailItem
											label="Writer"
											value={movie.Writer}
											valueClassName="text-sm"
										/>
										<DetailItem
											label="Actors"
											value={movie.Actors}
											valueClassName="text-sm"
											showSeparator={false}
										/>
									</div>
								</InfoCard>
							</div>

							{movie.Awards !== "N/A" && (
								<InfoCard title="Awards" titleClassName="text-lg">
									<p>{movie.Awards}</p>
								</InfoCard>
							)}

							{movie.Images && movie.Images.length > 0 && (
								<InfoCard title="Gallery" titleClassName="text-lg">
									<GalleryGrid images={movie.Images} title={movie.Title} />
								</InfoCard>
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
