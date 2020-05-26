// eslint-disable-next-line import/no-unresolved
import decoder from 'jwt-decode';

export const jwtDecoder = event => {
  let decodedData;
  const token = event.headers.Authorization
    ? event.headers.Authorization.split(' ')
    : null;
  if (token && token.length > 0 && token[1] && token[1] !== "''") {
    decodedData = decoder(token[1]);
  } else {
    decodedData = 'Not Autherized';
  }
  return decodedData;
};
