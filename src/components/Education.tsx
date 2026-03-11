import "./styles/Career.css";

const Education = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>Centurion University of Technology and Management</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Bhubaneswar, Odisha
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>BJB Junior College</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Bhubaneswar, Odisha
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Carmel English Medium School</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Khordha, Odisha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
