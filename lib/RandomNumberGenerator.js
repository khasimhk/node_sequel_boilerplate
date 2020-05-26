export const randomNumberGenerator = () => {
  const id = `${Math.floor(10000000 + Math.random() * 900000)}`;
  return id;
};
