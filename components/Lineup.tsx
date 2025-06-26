"use client";
import { FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const bandNames = [
  "Anahit Vardanyan",
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
  const smallestFontSize = 16;
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
      const newFontSize = Math.max(largestFontSize - currLine * fontSizeDecreaseFactor, smallestFontSize);
      for (const nameSpan of spans) {
        const offsetBottom = nameSpan.offsetTop + nameSpan.offsetHeight;
        const isAfterCurrLine = Math.round(offsetBottom / (currFontSize * lineHeight)) > currLine;
        if (isAfterCurrLine) {
          nameSpan.style.fontSize = `${newFontSize}px`;
          console.log(`Decreasing font size for line ${currLine} to ${newFontSize}px`);
        }
      }
    },
    [largestFontSize, lineHeight]
  );

  // This just tries to clean up a little by shrinking
  // the font size of the spans that are still too tall
  // after the first pass.
  // It may not actually get a name down to a single line,
  // but improves overall appearance a bit.
  const secondPass = useCallback((spans: HTMLElement[]) => {
    const finished: HTMLElement[] = [];
    spans.reverse();
    for (const nameSpan of spans) {
      const currFontSize = parseFloat(nameSpan.style.fontSize) || largestFontSize;
      const numLines = Math.floor(nameSpan.offsetHeight / (currFontSize * lineHeight));
      if (numLines > 1) {
        const newFontSize = Math.max(currFontSize - 6, smallestFontSize);
        nameSpan.style.fontSize = `${newFontSize}px`;
      }
    }
    console.log("Finished spans:", finished);
  }, []);

  const fontSizeCallback = useCallback(() => {
    const lineupContainer = containerRef.current;
    if (!lineupContainer) return;

    const nameSpansMap = nameSpanElements.current;
    if (!nameSpansMap) return;

    for (let i = 1; i < bandNames.length; i++) {
      decreaseFontSize(nameSpanElements.current, i);
    }
    console.log("Font size adjustment complete");
    for (let i = 1; i < bandNames.length; i++) {
      decreaseFontSize(nameSpanElements.current, i);
    }
    secondPass(nameSpanElements.current);
  }, [decreaseFontSize, secondPass]);
  useEffect(() => {
    fontSizeCallback();
  }, [fontSizeCallback]);
  return (
    <div style={{ height: "100vh" }}>
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
            {index < bandNames.length - 1 && (
              <>
                <Image src="/star.svg" alt="star symbol" width="20" height="20" />
                &nbsp;&nbsp;
              </>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Lineup;
