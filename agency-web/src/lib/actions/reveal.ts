/**
 * Action to reveal an element when it scrolls into view using IntersectionObserver.
 * Usage: <div use:reveal={{ duration: 1000, delay: 200, y: 50 }}>...</div>
 */
export function reveal(node: HTMLElement, { duration = 800, delay = 0, y = 40, threshold = 0.1 } = {}) {
	// Initial state before revealing
	node.style.opacity = '0';
	node.style.transform = `translateY(${y}px)`;
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Element came into view, apply final styles
					node.style.opacity = '1';
					node.style.transform = 'translateY(0)';
					// Stop observing once revealed
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: threshold
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
