export const isEmptyObject = (obj) => {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }
  return true;
};

export const removeEmptyObjectValues = (obj) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== "")
  );
};
