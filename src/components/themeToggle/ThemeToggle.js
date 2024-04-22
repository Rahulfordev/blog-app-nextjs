"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  const [toggleBtn, setToggleBtn] = useState("");

  useEffect(() => {
    // Set the class name when the theme changes
    setToggleBtn(theme === "light" ? "light" : "dark");
  }, [theme]);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        toggleBtn === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          toggleBtn === "dark"
            ? { left: 1, background: "black" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};
export default ThemeToggle;
