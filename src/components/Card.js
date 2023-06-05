import React from "react";
import Button from "./Button";

const Card = ({ item, isShowModal, setIsShowModal }) => {
  const handleOpenModal = (e) => {
    setIsShowModal(true);
  };
  return (
    <div onClick={handleOpenModal} className="py-4 max-w-xs m-6 ">
      <div className=" bg-white pt-4 rounded-xl space-y-6 overflow-hidden  transition-all duration-300 transform hover:-translate-y-3 hover:scale-85 shadow-xl hover:shadow-2xl cursor-pointer">
        <div className="px-8 flex justify-center items-center">
          <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
        </div>
        <h1 className="text-4xl text-center font-bold">{item.price}</h1>
        <ul className="text-start px-4 min-h-[400px]">
          {item.description.map((el) => (
            <li key={el.id}>{el.content}</li>
          ))}
        </ul>
        <div className="text-center bg-green-600 ">
          <button className="inline-block my-6 font-bold text-white">
            Заказать уборку
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
