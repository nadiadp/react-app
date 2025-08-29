import React from "react";

interface AlertProps {
  text: string;
}

const Alert = ({ text }: AlertProps) => {
  return <div>alert alert-primary{text}</div>;
};

export default Alert;
