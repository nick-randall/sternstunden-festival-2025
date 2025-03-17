export const x = -1

// "use client";
// import useMediaQuery from "@/components/useMediaQuery";
// import { useCallback, useEffect, useRef, useState } from "react";
// import NextImage from "next/image";

// interface PhotoSliderProps {
//   photoUrls: string[];
// }

// interface LoadedImage {
//   url: string;
//   width: number;
// }

// const PhotoSlider: React.FC<PhotoSliderProps> = ({ photoUrls }) => {
//   // const [currOffset, setCurrOffset] = useState(0);

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [loadedImageList, setLoadedImageList] = useState<LoadedImage[]>([]);
//   const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
//   const margin = 10;

//   const currOffset = loadedImageList.reduce((acc, l) => l.width + acc + margin, 0);

//   const loadImage = useCallback(
//     (url: string) => {
//       const existingChildren = containerRef?.current?.childNodes;
//       if (existingChildren) {
//         const images = Array.from(existingChildren) as HTMLImageElement[];
//         console.log("existing images", images.length);
//         if (images.map(i => i.src).includes(url)) return;
//       }
//       console.log("loading image");

//       const img = new Image();
//       img.src = url;
//       img.onload = () => {
//         img.style.left = `${currOffset}px`;

//         // containerRef.current?.appendChild(img);
//         setLoadedImageList(prev => {
//           if (prev.find(img => img.url === url) !== undefined) return prev;
//           return [...prev, {}]
//         });
//       };
//     },
//     [currOffset]
//   );

//   const updateImageList = useCallback(
//     (url: string, width: number) => {
//       console.log("update image list called. img = ", url.slice(url.length - 7));
//       if (!loadedImageList.map(i => i.url).includes(url)) {
//         setLoadedImageList(prev => [...prev, { url, width }]);
//       }
//     },
//     [loadedImageList]
//   );

//   const handleRef = (element: HTMLImageElement | null) => {
//     console.log("handle ref called");
//     if (!element || loadedImageList.map(r => r.url).includes(element.src)) return;
//     const initialWidth = element.getBoundingClientRect().width;
//     if (initialWidth > 0) {
//       updateImageList(element.src, initialWidth);
//     }
//     // Image has not been loaded yet -- probably a hard reset
//     else {
//       element.onload = () => updateImageList(element.src, element.width);
//     }
//     // if (refList.current.length === loadedUrls.length) {
//     //   if (!measured) measureAndMove();
//     // }
//   };

//   // const scrollForward = () => {
//   //   let closestDistance = Infinity;
//   //   let closestToCurrentScrollPos = 0;
//   //   const currScrollLeftPos = containerRef?.current?.scrollLeft;
//   //   const list = refList?.current;
//   //   if (!list || !currScrollLeftPos) return;
//   //   for (let i = 0; i < list.length; i++) {
//   //     const el = list[i];
//   //     const elLeft = el.style.left;
//   //     if (typeof elLeft !== "string") continue;
//   //     const elLeftNum = parseFloat(elLeft.replace("px", ""));
//   //     if (Math.abs(elLeftNum - currScrollLeftPos) < closestDistance) {
//   //       closestDistance = currScrollLeftPos;
//   //       closestToCurrentScrollPos = i;
//   //     }
//   //   }
//   //   if (closestToCurrentScrollPos + 1 < list.length) {
//   //     const nextLeftVal = list[closestToCurrentScrollPos + 1].style.left;
//   //     if (typeof nextLeftVal !== "string") return;
//   //     const newScrollPos = parseFloat(nextLeftVal.replace("px", ""));
//   //     containerRef?.current?.scrollTo({ left: newScrollPos });
//   //   }
//   // };

//   const { screenWidth } = useMediaQuery();
//   // const [photoIndex, setPhotoIndex] = useState(0);
//   // const [sliderPosition, setSliderPosition] = useState(0);

//   // const changePhotoIndex = (change: number) => {
//   //   const newIndex = photoIndex + change;
//   //   setPhotoIndex(newIndex);
//   //   loadImage(photoUrls[newIndex]);
//   //   if (photoIndex === photoUrls.length - 1) {
//   //     setPhotoIndex(0);
//   //     setSliderPosition(0);
//   //   } else {
//   //     if (photoIndex < 0) {
//   //       setPhotoIndex(photoUrls.length - 1);
//   //     }
//   //     const newSliderPosition =
//   //       change > 0
//   //         ? sliderPosition + refList.current[photoIndex].getBoundingClientRect().width + margin
//   //         : sliderPosition - refList.current[photoIndex].getBoundingClientRect().width;
//   //     setSliderPosition(newSliderPosition);
//   //   }
//   // };

//   useEffect(() => {
//     loadImage(photoUrls[0]);
//     setTimeout(() => loadImage(photoUrls[1]), 100);
//     setTimeout(() => loadImage(photoUrls[2]), 120);
//   }, [loadImage, photoUrls]);
//   console.log("main currOffset", currOffset);
//   const tablet = screenWidth > 768 && screenWidth < 1080;
//   if (screenWidth < 1080) {
//     return (
//       <div className={`home-image-container ${tablet ? "tablet" : ""}`}>
//         <div className="img-spacer"></div>
//         <div className="img-container">
//           <NextImage src="/2024_images/ssf24m1.jpg" alt="Demo Foto" layout="fill" objectFit="contain" />
//         </div>
//         <div className="img-spacer"></div>
//         {/* <img src="./2024_images/ssf24m2.jpg" alt="Demo Foto" /> */}
//         <div className="img-container">
//           <NextImage src="/2024_images/ssf24m2.jpg" alt="Demo Foto" layout="fill" objectFit="cover" />
//         </div>
//         <div className="img-spacer"></div>
//         <img src="./2024_images/ssf24m3.jpg" alt="Demo Foto" />

//         <div className="img-spacer"></div>
//         <img src="./2024_images/ssf24m4.jpg" alt="Demo Foto" />
//       </div>
//     );
//   }

//   return (
//     <div className="home-image-container" ref={containerRef}>
//       {/* <img onClick={() => changePhotoIndex(-1)} src="./chevron-right.svg" alt="" className="arrow arrow-left" />} */}

//       {photoUrls.slice(0, 1).map((img, index) => {
//         return (
//           <img key={index} ref={handleRef} src={loadedSrc || ""} alt="Poo" style={{ height: "100%", position: "absolute" }} />

//           // <img  key={index} ref={handleRef} src={url} alt="Demo Foto" style={{ height: "100%", transform: `translateX(-${sliderPosition}px)`, position: "absolute" }} />
//           // <Image
//           //   key={index}
//           //   ref={handleRef}
//           //   src={url}
//           //   alt="Demo Foto"
//           //   style={{
//           //     height: "100%",
//           //     transform: `translateX(-${sliderPosition}px)`,
//           //     // animation: "slide 10s",
//           //     position: "absolute",
//           //   }}
//           //   layout="fill"
//           //   objectFit="contain"
//           // />
//         );
//       })}

//       {/* </div> */}
//       {/* <img onClick={() => scrollForward()} src="./chevron-right.svg" alt="" className="arrow arrow-right" /> */}
//     </div>
//   );
// };

// export default PhotoSlider;
