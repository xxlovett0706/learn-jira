/* 判断值为0为有效值 */
export const isFalsy = (value) => (value === 0 ? false : !value);

/* 清除对象中的空值 */
export const cleanObject = (object) => {
  // 在一个函数里，改变对象本身是不好的
  // Object.assign({}, object);
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });

  return result;
};
