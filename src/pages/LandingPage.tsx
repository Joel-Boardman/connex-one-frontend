import React, { Suspense, lazy } from "react";

// Fallback Component
import Loader from "../components/Loader";

// Components
const Hero = lazy(() => import("../containers/Hero"));

const LandingPage: React.FC = () => {
  const loader = () => <Loader />;

  return (
    <Suspense fallback={loader()}>
      <Hero />
    </Suspense>
  );
};

export default LandingPage;
