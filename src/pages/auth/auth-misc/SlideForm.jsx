import React, {useState, useEffect} from "react";
import "../assets/Auth.css";

const SlideForm = ({slides, slideIndex, setSlideIndex, children}) => {
    const [slide, setSlide] = useState({});

    useEffect(() => {
        setSlide(slides[slideIndex]);
    }, [slideIndex, slides]);

    const handleNext = () => {
        if (slideIndex < slides.length - 1) {
            setSlideIndex(slideIndex + 1);
        }
    }

    const handlePrev = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        }
    }

    return (
        <div className="slide-form">
            <h2>{slide.title}</h2>
            {children}
            <div className="slide-form-buttons">
                <button onClick={handlePrev}>Anterior</button>
                <button onClick={handleNext}>Siguiente</button>
            </div>
        </div>
    );
}

export default SlideForm;
