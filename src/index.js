
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length < 1) {
    return [];
  }
  return matrix.reduce((acc, item, index) => {
    if (index % 2) {
      return [...acc, ...item.reverse()];
    }
    return [...acc, ...item];
  }, []);
};
