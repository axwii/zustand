"use client";

import { useStore } from "zustand";

const Footer = () => {
  const { count, setCount } = useStore();
  return (
    <section>
        <h1>footer: {count}</h1>
    </section>
  );
};

export default Footer;