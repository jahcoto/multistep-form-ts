import React, { ReactElement } from "react";
import { useState } from "react";

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrrentStepIndex] = useState(0);

  function next() {
    setCurrrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - 1;
    });
  }

  function back() {
    setCurrrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + 1;
    });
  }

  function goTo(index: number) {
    setCurrrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
};

export default useMultistepForm;
