export const textVariant = (delay: number) => {
  return {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 1.25, delay: delay },
    },
  };
};
