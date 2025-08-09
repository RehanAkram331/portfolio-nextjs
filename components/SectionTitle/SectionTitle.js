import React from "react";

const SectionTitle = ({ Title }) => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-12">
        <div className="wpo-section-title">
          <h2>{Title}</h2>
          <p>
            A journey of building secure, scalable, and high-performance
            applications using Laravel, ASP.NET, and React.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
