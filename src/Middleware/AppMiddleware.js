export const customMiddleWare = store => next => action => {
  next(action);
};
