import React, { ReactElement } from 'react';
import { useState } from 'react';

const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrrentStepIndex] = useState(0);

  function next() {}

  function back() {}

  function goTo(index: number) {}

  return { currentStepIndex, step: steps[currentStepIndex] };
};

export default useMultistepForm;
