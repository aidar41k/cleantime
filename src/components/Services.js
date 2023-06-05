import React from "react";
import Headline from "./Headline";
import Card from "./Card";
const items = [
  {
    id: 0,
    title: "Ежедневная уборка",
    price: "39 с/м2",
    description: [
      { id: 0, content: "- Полы и плинтуса сухая и влажная уборка" },
      {
        id: 1,
        content: "- Обеспыливание горизонтальных поверхностей и мебели",
      },
      { id: 2, content: "- Протирка зеркал" },
      { id: 3, content: "- Протирка дверей" },
      { id: 4, content: "- Протирка фасадов шкафов (внутри если пустые)" },
      { id: 5, content: "- Обезжиривание плиты" },
      { id: 6, content: "- Мойка кухонных раковин, смесителей и посуды" },
      { id: 7, content: "- Санузел и ванная комната" },
    ],
  },
  {
    id: 1,
    title: "Генеральная уборка",
    price: "60 с/м2",
    description: [
      { id: 0, content: "- Полы и плинтуса сухая и влажная уборка" },
      { id: 1, content: "- Обеспыливание всех поверхностей" },
      { id: 2, content: "- Чистка зеркал" },
      {
        id: 3,
        content: "- Обеспыливание световых приборов (люстры, светильники",
      },
      { id: 4, content: "- Протирка дверей" },
      { id: 5, content: "- Обеспыливание фасадов шкафов" },
      { id: 6, content: "- Протирка полок хранения" },
      {
        id: 7,
        content:
          "- Мойка и обезжиривание фасадов кухонных шкафов, столешницы и фартука ",
      },
      { id: 8, content: "- Мойка кухонных раковин, смесителей и посуды" },
      {
        id: 9,
        content: "- Санузел и ванная комната (моем полностью со стенами",
      },
    ],
  },

  {
    id: 2,
    title: "Уборка после ремонта",
    price: "80 с/м2",
    description: [
      { id: 0, content: "- Комнаты и коридоры" },
      {
        id: 1,
        content:
          "- Удаление строительной пыли и сложных загрязнений со всех поверхностей на всю высоту помещения.",
      },
      { id: 2, content: "- Кухня" },
      {
        id: 3,
        content:
          "- Мытьё кухонного гарнитура, бытовой техники, удаление следов ремонта.",
      },
      { id: 4, content: "- Ванная комната" },
      {
        id: 5,
        content:
          "- Очистка и дезинфекция сантехники. Мытьё плитки и потолков, очистка швов на всю высоту помещения.",
      },
      {
        id: 6,
        content: "- Уборка после ремонта содержит более 45 видов работ.",
      },
    ],
  },
];

const Services = ({ setIsShowModal, isShowModal }) => {
  return (
    <section id="services" className="mx-auto px-4 py-10 bg-stone-50">
      <Headline title={"Услуги"} />
      <div className="py-10 flex flex-wrap items-center  justify-center  ">
        <div className="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-around items-center  container">
          {items.map((el) => (
            <Card
              isShowModal={isShowModal}
              setIsShowModal={setIsShowModal}
              item={el}
              key={el.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
