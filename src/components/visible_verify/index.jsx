import { useEffect, useRef, useState } from "react";

export const Visible_verify = ({children, animaClass, classChoice, elementChoice}) => {

    const elementRef = useRef();
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.0001,
        };

        const observer = new IntersectionObserver(([entry]) => {
            setInView(entry.isIntersecting);
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={` ${classChoice} ${inView ? animaClass: ''}`}>
            {children}
        </div>
    )
}