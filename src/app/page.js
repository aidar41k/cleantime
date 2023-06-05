"use client";
import Fag from "@/components/Fag";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import Services from "@/components/Services";
import SnackBar from "@/components/SnackBar";
import { useState } from "react";
import { AiFillMessage } from "react-icons/ai";

export default function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowSnackBar, setIsShowSnackBar] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
        <Services isShowModal={isShowModal} setIsShowModal={setIsShowModal} />
        <Fag />
      </main>
      <Footer />
      {isShowModal && (
        <OrderForm
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          setIsShowSnackBar={setIsShowSnackBar}
        />
      )}
      <AiFillMessage
        onClick={() => setIsShowModal(true)}
        size="40px"
        className="text-green-500"
        style={{
          position: "fixed",
          bottom: "80px",
          right: "30px",
          cursor: "pointer",
        }}
      />
      {isShowSnackBar && <SnackBar />}
    </>
  );
}
