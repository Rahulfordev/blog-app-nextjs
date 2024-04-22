"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [className, setClassName] = useState("");

  useEffect(() => {
    // Set the class name when the theme changes
    setClassName(theme === "light" ? "light" : "dark");
  }, [theme]);

  return <div className={className}>{children}</div>;
};

export default ThemeProvider;
