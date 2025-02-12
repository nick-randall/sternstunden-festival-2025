import { Property } from "csstype";
import { CSSProperties, JSX } from "react";

interface FlexProps {
  children: JSX.Element[];
  justifyContent?: Property.JustifyContent;
  flexDirection?: Property.FlexDirection;
  flexGrow?: Property.FlexGrow;
  flexBasis?: Property.FlexBasis;
  flexShrink?: Property.FlexShrink;
  flexWrap?: Property.FlexWrap;
  flex?: Property.Flex;
  alignItems?: Property.AlignItems;
  margin?: Property.Margin;
  padding?: Property.Padding;
  width?: Property.Width;
  height?: Property.Height;
  maxWidth?: Property.MaxWidth;
}

const Flex: React.FC<FlexProps> = props => (
  <div
    style={{
      justifyContent: props.justifyContent || "flex-start",
      flexDirection: props.flexDirection || "row",
      flexGrow: props.flexGrow || 0,
      flexBasis: props.flexBasis || "auto",
      flexShrink: props.flexShrink || 1,
      flexWrap: props.flexWrap || "nowrap",
      flex: props.flex || "0 1 auto",
      alignItems: props.alignItems || "stretch",
      margin: props.margin || "0",
      padding: props.padding || "0",
      width: props.width || "auto",
      height: props.height || "auto",
      maxWidth: props.maxWidth || "none",
    }}
  >{props.children}</div>
);

export default Flex;
