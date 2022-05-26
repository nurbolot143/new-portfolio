import { skill1, skill2, skill3, skill4, skill5, skill6 } from "./assets/icons";
import {
  layout1,
  layout2,
  layout3,
  layout4,
  layout5,
  layout7,
  layout8,
  layout9,
  ownProject1,
  ownProject2,
  ownProject3,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "./assets/images";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TelegramIcon from "@mui/icons-material/Telegram";

export const ownProjects = [
  {
    id: 1,
    title: "To-do List",
    img: ownProject1,
    link: "https://to-do-list143.herokuapp.com/",
    descr:
      "Это - приложения для составления списков задач. Можно создавать, удалять и изменять задачи. А также отметить как проделанную. Задачи филтрируются по дням. Внизу каждого дня отображается процентное соотношение проделанных задач. Для создания To-do List использовал React, MUI, SASS и git.",
  },
  {
    id: 2,
    title: "Git profiles",
    img: ownProject3,
    link: "https://nurbolot143.github.io/",
    descr:
      "Используя Git Profiles можно найти github пользователя и узнать подробную информацию о нем. После введения поискового запроса на левой панели отображается список пользователей. При нажатии на конкретного user'a выводиться данные о нем и список репозиторий. Стек: React, Bootstrap, SASS, git и Fetch Api. Данные взяты из открытого api - api.gitbut.com ",
  },
  {
    id: 0,
    title: "Weather App",
    img: ownProject2,
    link: "https://nurbolot143.github.io/Weather-App/",
    descr:
      "Для создания сайта использовал HTML, CSS и JS. Сайт рассчитан как для десктоптых так и для мобильных устройсв. Данные взяты из открытого aip - openweather. Для получения ресурсов использовал Fetch Api",
  },
];

export const layoutItems = [
  {
    id: 2,
    link: "https://nurbolot143.github.io/Eazy-Camper/",
    title: "Eazy Camper",
    img: layout3,
  },
  {
    id: 7,
    link: "https://nurbolot143.github.io/screeno/",
    title: "Screeno",
    img: layout8,
  },
  {
    id: 0,
    link: "https://nurbolot143.github.io/Britlex/",
    title: "Britlex",
    img: layout1,
  },
  {
    id: 4,
    link: "https://nurbolot143.github.io/LandingPage/",
    title: "LandingPage",
    img: layout5,
  },
  {
    id: 1,
    link: "https://nurbolot143.github.io/CloudBudget-Freebie/",
    title: "CloudBudget Freebie",
    img: layout2,
  },
  {
    id: 3,
    link: "https://nurbolot143.github.io/kyrgyz-fruit/",
    title: "Kyrgyz fruit",
    img: layout4,
  },
  {
    id: 8,
    link: "https://nurbolot143.github.io/Landing_P/",
    title: "Landing_P",
    img: layout9,
  },
  {
    id: 6,
    link: "https://nurbolot143.github.io/The-Loop/",
    title: "The Loop",
    img: layout7,
  },
];

export const projects = [
  {
    id: 0,
    link: "https://nurbolot143.github.io/food/",
    title: "Food",
    img: project1,
    demo: true,
  },
  {
    id: 1,
    link: "https://employees-app1.herokuapp.com/",
    title: "Employees",
    img: project2,
    demo: true,
  },
  {
    id: 3,
    link: "https://marvel-app12.herokuapp.com/",
    title: "Marvel",
    img: project4,
    demo: true,
  },
  { id: 2, link: "#", title: "Admin Panel", img: project3, demo: false },
  { id: 4, link: "#", title: "Daily Journal", img: project5, demo: false },
  { id: 5, link: "#", title: "Link", img: project6, demo: false },
];

export const skills = [
  {
    id: 0,
    icon: skill1,
    title: "HTML / CSS",
  },
  {
    id: 1,
    icon: skill2,
    title: "SASS",
  },
  {
    id: 2,
    icon: skill3,
    title: "JS",
  },
  {
    id: 3,
    icon: skill4,
    title: "GIT",
  },
  {
    id: 4,
    icon: skill5,
    title: "REACT",
  },
  {
    id: 5,
    icon: skill6,
    title: "REDUX ",
  },
];

export const contact = [
  {
    id: 0,
    name: "phone",
    label: "Позвонить",
    link: "tel:+996704690533",
    icon: <PhoneIcon fontSize="large" className="contact__icon" />,
  },
  {
    id: 1,
    name: "email",
    label: "nurbolot.boobekovv@gmail.com",
    link: "mailto:nurbolot.boobekovv@gmail.com",
    icon: <EmailIcon fontSize="large" className="contact__icon" />,
  },
  {
    id: 2,
    name: "telegram",
    label: "Написать",
    link: "https://telegram.me/Nurbolo08300613",
    icon: <TelegramIcon fontSize="large" className="contact__icon" />,
  },
];
