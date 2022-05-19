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
          Проекты сделанные в ходе обучения на курсах
        </h2>

        <div className="courseProjects__slider">
          <Slider {...settings}>
            {projects.map(({ id, title, link, img }) => {
              return (
                <a key={id} href={link}>
                  <img src={img} alt={title} />
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
