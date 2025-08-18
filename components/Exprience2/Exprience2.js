import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const Expriences = [
  {
    date: "Apr 2022 – Present",
    logo: "images/work/hamko.png",
    position: "Programmer (Full-Stack Developer)",
    companyName: "Hamko Corporation Ltd, Dhaka",
    workFrom: "(On-site)",
    link: "https://www.hamko.com.bd/",
  },
  //   {
  //     date: "2021 – 2022",
  //     logo: "images/work/freelance.png",
  //     position: "Full-Stack Web Developer",
  //     companyName: "Freelance / Remote Projects",
  //     workFrom: "(Remote)",
  //   },
  //   {
  //     date: "2019 – 2020",
  //     logo: "images/work/internship.png",
  //     position: "Software Developer (Intern)",
  //     companyName: "Tech Startup, Dhaka",
  //     workFrom: "(On-site)",
  //   },
];
let offsetClass = "";

if (Expriences.length === 1) {
  offsetClass = "offset-lg-4 offset-md-3";
  // 1 item → center (lg: 12-4/2, md: 12-6/2)
} else if (Expriences.length === 2) {
  offsetClass = "offset-lg-2 offset-md-0";
  // 2 items → balanced on large, no offset on medium
}
const Exprience2 = (props) => {
  return (
    <div className="wpo-work-area-s2 section-padding" id="experienceCard">
      <div className="container">
        <SectionTitle Title={"My Work Experience"} />
        <div className="wpo-work-wrap">
          <div className="row">
            {Expriences.map((exprience, exp) => (
              <div
                className={`col-lg-4 col-md-6 col-12 ${
                  exp == 0 && offsetClass
                }`}
                key={exp}
              >
                <div className="wpo-work-item">
                  <ul>
                    <li className="logo">
                      <img src={exprience.logo} alt="" />
                    </li>
                    <li className="date">{exprience.date}</li>
                    <li className="position">
                      {exprience.position}{" "}
                      <span>
                        {exprience.companyName}{" "}
                        <span>{exprience.workFrom}</span>
                      </span>
                    </li>
                    <li className="link">
                      <Link href={exprience?.link || "/"} target="_blank">
                        Go to website
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Exprience2;
