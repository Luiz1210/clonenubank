import { StatusBar } from "expo-status-bar";
import { Home } from "./src/Pages/Home";
import React from "react";

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="light" />
    </>
  );
}