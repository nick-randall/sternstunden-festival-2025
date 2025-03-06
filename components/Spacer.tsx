'use client';
interface SpacerProps {
  height?: number;
  width?: number;
  flex?: string;
}

const Spacer: React.FC<SpacerProps> = ({ height, width, flex }) => (
  <div
    style={{
      width,
      height,
      flex: flex ?? "0 0 auto",
    }}
  ></div>
);

export default Spacer;