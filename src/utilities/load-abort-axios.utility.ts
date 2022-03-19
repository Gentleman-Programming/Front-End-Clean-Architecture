export const loadAbort = () => {
  const controller = new AbortController();
  return controller;
};
