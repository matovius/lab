/**
 * @typedef IntersectionObserverOptions Optional settings for the `useIntersectionObserver` hook.
 * @prop { string } [rootMargin]
 * @prop { number } [threshold]
 */

/**
 * A hook that sets `IntersectionObserver`s for any elements.
 * @param { IntersectionObserverOptions } options The options for the intersection observer.
 * Consists of the `threshold` property as a number.
 * @returns A set of readonly getters and a single setter.
 */
export function useIntersectionObserver(options = { threshold: 0, rootMargin: '0px' }) {
	/**
	 * @type { HTMLElement | null } --- The element to observe.
	 * @default null
	 */
	let ref = $state(null);

	/**
	 * @type { Element | Document | null } --- The containing element.
	 * @default document - The base element of the webpage.
	 */
	// let root = $state(null);

	/**
	 * @type { boolean } --- Marks whether to unobserve the `ref` element after it intersects the `root`.
	 * @default false
	 */
	let once = $state(false);

	/**
	 * @type { boolean } --- Checks whether the `ref` element is intersecting the `root` element.
	 * @default false
	 */
	let intersecting = $state(false);

	/**
	 * @type { IntersectionObserver } --- An instance of the `IntersectionObserver` API.
	 */
	const observer = $state(
		new IntersectionObserver(
			([entry]) => {
				intersecting = entry.isIntersecting;
			},
			{ ...options }
		)
	);

	$effect(() => {
		if (ref) {
			observer.observe(ref);

			if (intersecting && once) {
				observer.unobserve(ref);
			}

			return () => {
				if (observer) {
					observer.disconnect();
				}
			};
		}
	});

	return {
		get intersecting() {
			return intersecting;
		},
		get ref() {
			return ref;
		},
		set ref(element) {
			ref = element;
		},
		/** @param { boolean } value The value to set. */
		set once(value) {
			once = value;
		}
		// set root(element: Element | Document) {
		//   root = element;
		// },
	};
}
