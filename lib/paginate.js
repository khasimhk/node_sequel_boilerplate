export const Paginate = async (OrderResult, limit, pageNo) => {
  // eslint-disable-next-line no-unused-vars
  const message = '';
  const newArray = [];
  const endIndex = pageNo * limit - 1;
  const startIndex = (pageNo - 1) * limit;
  // eslint-disable-next-line consistent-return
  if (startIndex > OrderResult.length - 1) {
    return ({ message: 'no data' });
  }
  OrderResult.forEach((item, index) => {
    if (index >= startIndex && index <= endIndex) {
      newArray.push(item);
    }
  });
  return newArray;
};
