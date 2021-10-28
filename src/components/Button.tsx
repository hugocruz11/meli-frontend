import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
  text: string;
  colorText?: string;
}

const Button: React.FC<Props> = ({
  border,
  color,
  text,
  height,
  onClick,
  radius,
  width,
  colorText,
}) => {
  return (
    <button
      style={{
        backgroundColor: color,
        border,
        borderRadius: radius,
        height,
        width,
      }}
      onClick={onClick}
    >
      <Text color={colorText}>{text}</Text>
    </button>
  );
};

export default Button;
