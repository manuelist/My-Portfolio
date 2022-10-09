import React from "react";
import classes from "../../styles/portfolio-item.module.css";
import Image from "next/image";

const PortfolioItem = (props) => {
  const { title, img, liveUrl, keyword, description } = props.item;

  const launch = () => {
    window.open(liveUrl, "_blank");
  };

  return (
    <div
      className={`${classes.portfolio__item}`}
      role="button"
      onClick={launch}
    >
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>
      <div className="text-sm mt-3 text-white bg-transparent">
        {description}
      </div>
      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width="700" height="700" />
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <a target="_blank" href={liveUrl} rel="noreferrer">
            Launch
          </a>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
