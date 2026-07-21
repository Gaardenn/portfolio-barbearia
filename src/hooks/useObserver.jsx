import { useEffect, useRef, useState } from "react";

export function useObserver(threshold = 0.3) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold]);

    return [ref, visible];
}