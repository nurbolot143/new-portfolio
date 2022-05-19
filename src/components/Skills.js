import React from "react";

const skills = [
  {
    id: 0,
    icon: "",
    title: "React",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    id: 1,
    icon: "",
    title: "HTML / CSS",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    id: 2,
    icon: "",
    title: "Js",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    id: 3,
    icon: "",
    title: "Redux",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    id: 4,
    icon: "",
    title: "Bootstrap",
    descr:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eosdolore iste totam unde! Exercitationem repellat rerumvoluptates! Itaque, corrupti culpa aspernatur magnam doloremdebitis, at distinctio doloremque expedita, obcaecati ad.",
  },
  {
    id: 5,
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
        <View data={skills} />
      </div>
    </section>
  );
};

const View = ({ data }) => {
  return (
    <ul className="skills__list">
      {data.map(({ id, title, descr, icon }) => {
        return (
          <li key={id} className="skills__item">
            <div className="card skills__card">
              <div className="skills__icon"></div>
              <h2 className="skills__subtitle">{title}</h2>
              <p className="text skills__text">{descr}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
