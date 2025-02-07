interface SpacerProps {
  height?: number;
  width?: number;
}

const Spacer: React.FC<SpacerProps> = ({ height, width }) => (
  <div
    style={{
      width,
      height
    }}
  ></div>
);

export default Spacer;