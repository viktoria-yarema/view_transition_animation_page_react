import Image from "next/image";

interface GalleryGridProps {
	images: string[];
	title: string;
}

export function GalleryGrid({ images, title }: GalleryGridProps) {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
			{images.map((image, index) => (
				<div
					key={index}
					className="relative aspect-video overflow-hidden rounded-lg"
				>
					<Image
						src={image}
						alt={`${title} - Image ${index + 1}`}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 50vw, 33vw"
					/>
				</div>
			))}
		</div>
	);
}

