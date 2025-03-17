interface MobilePhotoSliderProps {
  photoUrls: string[];
}

const MobilePhotoSlider: React.FC<MobilePhotoSliderProps> = ({photoUrls}) => {
  // const { tablet } = useMediaQuery();
return (
  <div className={`home-image-container`}>
    {photoUrls.map((url, index) => (
      <>
        <img key={index + "image"} src={url} alt="Foto Sternstunde 2025" />
        <div key={index + "spacer"} className="img-spacer"></div>
      </>
    ))}
  </div>
);
}

export default MobilePhotoSlider;