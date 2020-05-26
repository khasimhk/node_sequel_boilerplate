import Moment from 'moment';

export const sortArrayOfObjects = (array, sortKey, date) => {
  let sortedArray = [];
  if (array && array.length > 1) {
    // eslint-disable-next-line max-len
    sortedArray = array.sort((
      a,
      // eslint-disable-next-line security/detect-object-injection
      b
    ) =>
      date
        ? new Moment(b[sortKey]).toDate('DD-MM-YYYY') -
          new Moment(a[sortKey]).toDate('DD-MM-YYYY hh:mm:s')
        : // eslint-disable-next-line security/detect-object-injection
          b[sortKey] - a[sortKey]
    );
  } else if (array && array.length === 1) {
    sortedArray = array;
  } else {
    sortedArray = [];
  }
  return sortedArray;
};
