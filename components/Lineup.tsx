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
  // const [nameSpans, setNameSpans] = useState<HTMLCollectionOf<HTMLAnchorElement> | null>(null);
  const largestFontSize = 58;
  const lineHeight = 1.15;

  const containerRef = useRef<HTMLDivElement | null>(null);
  // const nameSpanElements = useRef<{ [name: string]: { el: HTMLAnchorElement } }>({});
  const nameSpanElements = useRef<HTMLAnchorElement[]>([]);

  const spanRefCallback = useCallback((el: HTMLAnchorElement | null) => {
    if (el) {
      nameSpanElements.current.push(el);
    }
  }, []);

  const decreaseFontSize = useCallback(
    (spans: HTMLElement[], currLine: number) => {
      const currFontSize = largestFontSize;
      const newFontSize = largestFontSize - currLine * 8;
      for (const nameSpan of spans) {
        const offsetBottom = nameSpan.offsetTop + nameSpan.offsetHeight;
        const isAfterCurrLine = Math.round(offsetBottom / (currFontSize * lineHeight)) > currLine;
        if (isAfterCurrLine) {
          nameSpan.style.fontSize = `${newFontSize}px`;
        }
      }
      // nameSpans = document.querySelectorAll(".lineup-text");
    },
    [largestFontSize, lineHeight]
  );

  // const lineupText = document.querySelector(".lineup-text");

  // useEffect(() => {
  //   const lineupContainer = containerRef.current;
  //   if (!lineupContainer) return;

  //   const nameSpansMap = nameSpanElements.current;
  //   if (!nameSpansMap) return;
  //   // if (Object.keys(nameSpansMap).length < bandNames.length) return;
  //   const nameSpans: HTMLAnchorElement[] = [];
  //   for (let i = 0; i < bandNames.length; i++) {
  //     console.log("Adding band name:", bandNames[i]);
  //     if(bandNames[i] in nameSpansMap === false) {
  //       return
  //     }
  //     const el = nameSpansMap[bandNames[i]]!.el;
  //     nameSpans.push(el);
  //   }
  //   // setNameSpans(lineupContainer.getElementsByClassName("lineup-text"));
  //   console.log("Name spans:", nameSpans);
  //   console.log("decresing font size");
  //   for (let i = 1; i < bandNames.length; i++) {
  //     decreaseFontSize(nameSpans, i);
  //   }
  // }, [decreaseFontSize, largestFontSize, lineHeight]);

  const fontSizeCallback = useCallback(() => {
    const lineupContainer = containerRef.current;
    if (!lineupContainer) return;

    const nameSpansMap = nameSpanElements.current;
    if (!nameSpansMap) return;
    // if (Object.keys(nameSpansMap).length < bandNames.length) return;
    // const nameSpans: HTMLAnchorElement[] = [];
    // for (let i = 0; i < bandNames.length; i++) {
    //   console.log("Adding band name:", bandNames[i]);
    //   if(bandNames[i] in nameSpansMap === false) {
    //     return
    //   }
    //   const el = nameSpansMap[bandNames[i]]!.el;
    //   nameSpans.push(el);
    // }
    // setNameSpans(lineupContainer.getElementsByClassName("lineup-text"));
    console.log("Name spans:", nameSpanElements);
    console.log("decresing font size");
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
