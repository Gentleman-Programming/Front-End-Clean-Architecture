/**
 * @desc formats a string to snake case.
 * @param element- the string to format.
 * @return string
 */
export const formatToSnakeCase = (element: string): string => {
  return element.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
