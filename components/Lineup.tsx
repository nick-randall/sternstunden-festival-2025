// import { FC, useCallback, useEffect, useRef, useState } from "react";

// const bandNames = [
//   "Zara Larsson",
//   "The Strokes",
//   "Tame Impala",
//   "The National",
//   "Kacey Musgraves",
//   "Vampire Weekend",
//   "Rufus Du Sol",
//   "Portugal",
//   "Janelle Monae",
//   "King Princess",
//   "Maggie Rogers",
//   "Of Monsters and Men",
//   "Maren Morris",
//   "The 1975",
//   "Louis the Child",
//   "Bishop Briggs",
//   "King Princess",
//   "Maggie Rogers",
// ];

// const Lineup: FC = () => {
//   const [nameSpans, setNameSpans] = useState<HTMLCollectionOf<HTMLAnchorElement> | null>(null);
//   const largestFontSize = 58;
//   const lineHeight = 1.15;

//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const nameSpanElements = useRef<{ [name: string]: { el: HTMLAnchorElement } }>({});
//   const spanRefCallback = useCallback((el: HTMLAnchorElement | null) => {
//     if (el) {
//       nameSpanElements.current[el.textContent || ""] = { el };
//     }
//   }, []);

//   const decreaseFontSize = useCallback(
//     (nameSpans: HTMLElement[], currLine: number) => {
//       const currFontSize = largestFontSize;
//       const newFontSize = largestFontSize - currLine * 8;
//       for (const nameSpan of nameSpans) {
//         const offsetBottom = nameSpan.offsetTop + nameSpan.offsetHeight;
//         const isAfterCurrLine = Math.round(offsetBottom / (currFontSize * lineHeight)) > currLine;
//         if (isAfterCurrLine) {
//           nameSpan.style.fontSize = `${newFontSize}px`;
//         }
//       }
//       nameSpans = document.querySelectorAll(".lineup-text");
//     },
//     [largestFontSize, lineHeight]
//   );

//   // const lineupText = document.querySelector(".lineup-text");

//   useEffect(() => {
//     const lineupContainer = containerRef.current;
//     if (!lineupContainer) return;

//     // const nameSpans =  document.querySelectorAll(".lineup-text");
//     // const nameSpans = lineupContainer.children as HTMLCollectionOf<HTMLAnchorElement>;
//     const nameSpansMap = nameSpanElements.current;
//     if (!nameSpansMap) return;
//     if (Object.keys(nameSpansMap).length < bandNames.length) return;
//     const nameSpans: HTMLAnchorElement[] = []
//     for (let i = 0; i < bandNames.length; i++) {
//       const el = nameSpansMap[bandNames[i]]!.el;
//       nameSpans.push(el);
//     }
//     // setNameSpans(lineupContainer.getElementsByClassName("lineup-text"));
//     for (let i = 1; i < 15; i++) {
//       decreaseFontSize(nameSpans, i);
//     }
//   }, [decreaseFontSize, largestFontSize, lineHeight]);

//   return (
//     <div className="lineup-container" ref={containerRef}>
//       {nameSpans &&
//         Array.from(nameSpans).map((span, index) => (
//           <a ref={spanRefCallback} key={index} href={span.href} className="lineup-text" style={{ fontSize: `${largestFontSize}px` }}>
//             {span.textContent}
//           </a>
//         ))}
//     </div>
//   );
// };

// export default Lineup;
