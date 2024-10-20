export const formatInstructions = (instructions: string): string => {
  const htmlRemoved = instructions.replace(/<[^>]*>/g, "").trim();

  const steps = htmlRemoved
    .split(".")
    .map((step) => step.trim())
    .filter((step) => step);

  const numberedSteps = steps.map((step, index) => `${index + 1}. ${step}.`);

  return numberedSteps.join(" ");
};
