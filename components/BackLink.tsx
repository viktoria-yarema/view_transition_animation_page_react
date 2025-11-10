"use client";

import { useRouter } from "next/navigation";

export function BackLink() {
	const isMobile = window.innerWidth < 1024;
	const router = useRouter();

	const handleClick = () => {
		if (isMobile) {
			router.back();
		} else {
			router.push("/");
		}
	};

	const title = "← Back to Movies";

	return (
		<button
			onClick={handleClick}
			className="inline-flex cursor-pointer items-center text-lg text-muted-foreground hover:text-foreground transition-colors"
		>
			{title}
		</button>
	);
}
