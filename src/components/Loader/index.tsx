import React from "react";
import { Spinner, Section } from "./styles";

const Loader: React.FC = () => {
  // Loader animation
  return (
    <Section>
      <Spinner />
    </Section>
  );
};

export default Loader;
