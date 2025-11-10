// "use client";

import Link from "next/link";
// import { useRouter } from "next/navigation";

export function BackLink() {
	// const router = useRouter();

	// const handleClick = () => {
	// 	router.back();
	// };

	return (
		<Link
			href="/"
			// onClick={handleClick}
			className="inline-flex items-center text-lg text-muted-foreground hover:text-foreground transition-colors"
		>
			← Back to Movies
		</Link>
	);
}
