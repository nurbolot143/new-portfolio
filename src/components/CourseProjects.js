import React from "react";
import Slider from "react-slick";

import { projects } from "../data";

const CourseProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="courseProjects">
      <div className="container">
        <h2 className="title courseProjects__title">
          Проекты сделанные в ходе обучения
        </h2>

        <div className="courseProjects__slider">
          <Slider {...settings}>
            {projects.map(({ id, title, link, img, demo }) => {
              const target = link === "#" ? "_self" : "_blank";
              return (
                <a
                  key={id}
                  href={link}
                  target={target}
                  rel="noopener noreferrer"
                >
                  <img src={img} alt={title} />
                  <div className="courseProjects__descr">
                    <h4 className="courseProjects__subtitle">{title}</h4>
                    <span>
                      {demo ? "Посмотреть" : "Demo версия отсутствует"}
                    </span>
                  </div>
                </a>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CourseProjects;
