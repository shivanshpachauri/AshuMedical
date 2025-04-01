export default function groupObjects(arr, key) {
  return arr.reduce((accumulator, current) => {
    const keyValue = current[key];
    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }
    accumulator[keyValue].push(current);
    return accumulator;
  }, {});
}
