"use client";
import ScrambleText from "ScrambleText";
import { log } from "console";
import Script from "next/script";
import React, { useEffect } from "react";

const TextEffect = () => {
  useEffect(() => {
    <Script
      src="https://cdn.jsdelivr.net/npm/scramble-text@0.0.9/dist/ScrambleText.min.js"
      onLoad={() => {
        var element = document.getElementById("text1");
        var scrambleText = new ScrambleText(element).start().play();
      }}
    />;
  }, []);

  return <div id="text1">TextEffect</div>;
};

export default TextEffect;
