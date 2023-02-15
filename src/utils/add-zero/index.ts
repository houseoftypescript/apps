export const addZero = (number: number): string => {
  return number > 9 ? `${number}` : `0${number}`;
};

export default addZero;
