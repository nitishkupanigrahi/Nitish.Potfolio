import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Chronic Disease Classification",
    category: "Machine Learning / Data analysis",
    tools: "Python, Pandas, Scikit-learn, Matplotlib",
    description: "Built a chronic disease classification model using hospital datasets. Applied data preprocessing and feature engineering. Used Random Forest and SVM models achieving 92% accuracy.",
    image: "/images/Solidx.png",
  },
  {
    title: "Bitcoin Price Prediction",
    category: "Time Series Forecasting",
    tools: "Python, Pandas, Scikit-learn, LSTM, Matplotlib",
    description: "Developed a time series forecasting model to predict Bitcoin daily closing prices. Used LSTM neural networks and feature scaling for improved predictions.",
    image: "/images/radix.png",
  },
  {
    title: "Dress Code Detection",
    category: "IoT / Computer Vision",
    tools: "Python, OpenCV, IoT",
    description: "Built an IoT-based video processing system to monitor student dress code compliance. Integrated Raspberry Pi for edge processing and automated alerts.",
    image: "/images/bond.png",
  },
  {
    title: "Sales Data Analysis",
    category: "Exploratory Data Analysis",
    tools: "Python, Pandas, Matplotlib, Seaborn",
    description: "Conducted EDA on sales data of 50 companies. Identified sales drivers and optimized marketing spend using visual analytics.",
    image: "/images/sapphire.png",
  },
  {
    title: "Sentiment Analysis on Social Media Data",
    category: "NLP / Sentiment Analysis",
    tools: "Python, NLTK, VADER, Pandas",
    description: "Built an NLP model to classify customer opinions. Used VADER sentiment scoring to analyse customer feedback trends.",
    image: "/images/Maxlife.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-tools" style={{marginTop: "10px"}}>
                          <span className="tools-label">Description</span>
                          <p>{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
