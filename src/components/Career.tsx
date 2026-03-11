import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Development Trainee</h4>
                <h5>Brandzzy SoftTech Private Limited</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Conduct market research and data analysis to identify emerging trends and potential business opportunities. Assist in developing sales strategies by analysing client engagement patterns. Focus on hospital and technology industry sales lead generation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Exposys Data Labs</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Analysed cost, marketing spend, and profit data for 50 companies using machine learning models. Delivered insights to improve ROI through predictive analytics and data-driven strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
