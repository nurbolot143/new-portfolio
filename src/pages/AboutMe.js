import React from "react";

import myPhoto2 from "../assets/images/myPhoto2.jpg";
import Skills from "../components/Skills";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__info">
        <div className="container">
          <h1 className="title aboutMe__title">обо мне </h1>
          <div className="aboutMe__inner">
            <div className="aboutMe__img">
              <img src={myPhoto2} alt="MyPhoto" />
            </div>

            <div className="aboutMe__body">
              <h3>Меня зовут Нурболот</h3>
              <h4></h4>
              <p className="text ">
                Мне 21 год. Я Frontend разработчик. Более года увлекаюсь
                программированием, прошел онлайн курс по front-end разработке в
                Jyldyz Academy, прохожу обучающие программы, смотрю видеоролики,
                параллельно разрабатываю мини-проекты: есть сверстанные макеты
                сайтов, самостоятельно разработал пару мини проектов(JS/ React)
                + несколько проектов в ходе обучения. Умею работать с Git и
                Chrome DevTools, а также есть опыт разработки по методологии
                SCRUM. Люблю решать задачи на codewars и leetCode:
              </p>
              <ul>
                <li>
                  <a
                    className="aboutMe__link"
                    href="https://codewars.com/users/nurbolot143"
                    target="_blank"
                  >
                    codewars.com/users/nurbolot143
                  </a>
                </li>
                <li>
                  <a
                    className="aboutMe__link"
                    href="https://leetcode.com/Nurbolot_/"
                    target="_blank"
                  >
                    leetcode.com/Nurbolot_/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default AboutMe;
