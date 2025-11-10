"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SCROLL_POSITIONS_KEY = "scroll-positions";

// Check if device is desktop (more than 1024px)
const isDesktopDevice = (): boolean => {
	if (typeof window === "undefined") return false;

	// Check screen width (desktop is > 1024px)
	return window.innerWidth > 1024;
};

export function ScrollRestoration() {
	const pathname = usePathname();
	const previousPathname = useRef<string>(pathname);
	const isRestoring = useRef(false);
	const isDesktopRef = useRef(isDesktopDevice());

	useEffect(() => {
		// Update desktop detection on resize
		const handleResize = () => {
			isDesktopRef.current = isDesktopDevice();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		// Only run scroll restoration on desktop (more than 1024px)
		if (!isDesktopRef.current) {
			return;
		}
		// Save scroll position before navigation
		const saveScrollPosition = () => {
			const scrollY = window.scrollY;
			if (scrollY > 0) {
				const positions = JSON.parse(
					sessionStorage.getItem(SCROLL_POSITIONS_KEY) || "{}"
				);
				positions[previousPathname.current] = scrollY;
				sessionStorage.setItem(SCROLL_POSITIONS_KEY, JSON.stringify(positions));
			}
		};

		// Restore scroll position after navigation
		const restoreScrollPosition = () => {
			const positions = JSON.parse(
				sessionStorage.getItem(SCROLL_POSITIONS_KEY) || "{}"
			);
			const savedPosition = positions[pathname];

			if (savedPosition !== undefined && savedPosition > 0) {
				isRestoring.current = true;

				// Wait for view transition to complete
				const restore = () => {
					// Use multiple attempts to ensure it works
					const attemptRestore = (attempts = 0) => {
						if (attempts > 10) {
							isRestoring.current = false;
							return;
						}

						requestAnimationFrame(() => {
							const currentScroll = window.scrollY;
							const targetScroll = savedPosition;

							if (Math.abs(currentScroll - targetScroll) > 10) {
								window.scrollTo({
									top: targetScroll,
									behavior: "instant" as ScrollBehavior,
								});
								setTimeout(() => attemptRestore(attempts + 1), 50);
							} else {
								isRestoring.current = false;
							}
						});
					};

					// Start restoration after a short delay to let view transition start
					setTimeout(() => attemptRestore(), 100);
				};

				// Wait for view transition to complete
				// The app uses view transitions, so we wait a bit for them to start
				restore();
			}
		};

		// Save scroll position on scroll (throttled) - but not while restoring
		let scrollTimeout: NodeJS.Timeout;
		const handleScroll = () => {
			if (isRestoring.current) return;

			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(() => {
				saveScrollPosition();
			}, 150);
		};

		// Save scroll position when clicking links
		const handleLinkClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest("a");
			if (link && link.href && !link.target) {
				saveScrollPosition();
			}
		};

		// Save on page unload
		const handleBeforeUnload = () => {
			saveScrollPosition();
		};

		// If pathname changed, we navigated - restore scroll
		if (previousPathname.current !== pathname) {
			restoreScrollPosition();
			previousPathname.current = pathname;
		} else {
			// First mount - restore if available
			restoreScrollPosition();
		}

		// Save on scroll
		window.addEventListener("scroll", handleScroll, { passive: true });
		document.addEventListener("click", handleLinkClick, true);
		window.addEventListener("beforeunload", handleBeforeUnload);

		return () => {
			clearTimeout(scrollTimeout);
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("click", handleLinkClick, true);
			window.removeEventListener("beforeunload", handleBeforeUnload);
		};
	}, [pathname]);

	return null;
}

