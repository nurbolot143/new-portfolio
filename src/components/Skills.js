import React from "react";

const skills = [
  {
    icon: "",
    title: "React",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    icon: "",
    title: "HTML / CSS",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    icon: "",
    title: "Js",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    icon: "",
    title: "Redux",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    icon: "",
    title: "Bootstrap",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    icon: "",
    title: "Git",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="title skills__title">Skills</h2>
        <SkillList />
      </div>
    </section>
  );
};

const SkillList = () => {
  return (
    <ul className="skills__list">
      {skills.map((item, idx) => {
        return (
          <li key={idx} className="skills__item">
            <div className="card skills__card">
              <div className="skills__icon"></div>
              <h2 className="skills__subtitle">{item.title}</h2>
              <p className="text skills__text">{item.descr}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
