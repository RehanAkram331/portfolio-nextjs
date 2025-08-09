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
  },
  {
    date: "2021 – 2022",
    logo: "images/work/freelance.png",
    position: "Full-Stack Web Developer",
    companyName: "Freelance / Remote Projects",
    workFrom: "(Remote)",
  },
  {
    date: "2020 – 2021",
    logo: "images/work/ecommerce.png",
    position: "Laravel Developer",
    companyName: "GoodDeal E-commerce Platform",
    workFrom: "(Remote)",
  },
  {
    date: "2019 – 2020",
    logo: "images/work/internship.png",
    position: "Software Developer (Intern)",
    companyName: "Tech Startup, Dhaka",
    workFrom: "(On-site)",
  },
];

const ExprienceSec = (props) => {
  return (
    <div className="wpo-work-area section-padding">
      <div className="container">
        <SectionTitle
          Title={"My Work Experience"}
        />
        <div className="wpo-work-wrap">
          {Expriences.map((exprience, exp) => (
            <div className="wpo-work-item" key={exp}>
              <ul>
                <li className="date">{exprience.date}</li>
                <li className="logo">
                  <img src={exprience.logo} alt="" />
                </li>
                <li className="position">
                  {exprience.position}{" "}
                  <span>
                    {exprience.companyName} <span>{exprience.workFrom}</span>
                  </span>
                </li>
                <li className="link">
                  <Link href="/">Go to website</Link>
                </li>
              </ul>
            </div>
          ))}
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

export default ExprienceSec;
