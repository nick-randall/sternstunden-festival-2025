"use client";
import { FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const bandNames = [
  "Zara Larsson",
  "The Strokes",
  "Tame Impala",
  "The National",
  "Kacey Musgraves",
  "Vampire Weekend",
  "Rufus Du Sol",
  "Portugal",
  "Janelle Monae",
  "King Princess",
  "Maggie Rogers",
  "Of Monsters and Men",
  "Maren Morris",
  "The 1975",
  "Louis the Child",
];

const Lineup: FC = () => {
  const largestFontSize = 58;
  const fontSizeDecreaseFactor = 8; // decrease font size by this factor for each line
  const lineHeight = 1.15;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const nameSpanElements = useRef<HTMLAnchorElement[]>([]);

  const spanRefCallback = useCallback((el: HTMLAnchorElement | null) => {
    if (el) {
      nameSpanElements.current.push(el);
    }
  }, []);

  const decreaseFontSize = useCallback(
    (spans: HTMLElement[], currLine: number) => {
      const currFontSize = largestFontSize;
      const newFontSize = largestFontSize - currLine * fontSizeDecreaseFactor;
      for (const nameSpan of spans) {
        const offsetBottom = nameSpan.offsetTop + nameSpan.offsetHeight;
        const isAfterCurrLine = Math.round(offsetBottom / (currFontSize * lineHeight)) > currLine;
        if (isAfterCurrLine) {
          nameSpan.style.fontSize = `${newFontSize}px`;
        }
      }
    },
    [largestFontSize, lineHeight]
  );

  const fontSizeCallback = useCallback(() => {
    const lineupContainer = containerRef.current;
    if (!lineupContainer) return;

    const nameSpansMap = nameSpanElements.current;
    if (!nameSpansMap) return;
  
    for (let i = 1; i < bandNames.length; i++) {
      decreaseFontSize(nameSpanElements.current, i);
    }
  }, [decreaseFontSize]);
  useEffect(() => {
    fontSizeCallback();
  }, [fontSizeCallback]);
  return (
    <div style={{height: "100vh"}}>
      <style>
        {`.lineup-container {
          position: relative;
          top: 200px;
          padding: 3px 40px 0px 40px;
          text-align: center;
        }

        .lineup-text {
          font-size: 58px;
          line-height: 1.15;
          text-align: center;
          
          font-optical-sizing: auto;
          font-weight: bold;
          font-style: normal;
        }`}
      </style>

      <div className="lineup-container" ref={containerRef}>
        {bandNames.map((name, index) => (
          <a ref={spanRefCallback} key={index} href={name} className="lineup-text" style={{ fontSize: `${largestFontSize}px` }}>
            {name}&nbsp; &nbsp; 
            {index < bandNames.length -1  &&  <><Image src="/star.svg" alt="star symbol" width="20" height="20" />
            &nbsp;&nbsp;</>}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Lineup;
