const checkFields = (keys, validateFields) => {
  let isValid = true;
  console.log('validateFields,', validateFields);
  console.log('keys,', keys);
  validateFields.forEach(field => {
    if (keys.indexOf(field) === -1) {
      console.log('field', field);
      isValid = false;
    }
  });
  return isValid;
};

const isEmpty = value => value === null || value === '' || value.length === 0;

export const validateRequestObject = (data, requiredKeys) => {
  const keys = Object.keys(data);
  let messageArray = [];
  const undefinedKeys = checkFields(keys, requiredKeys);

  const emptyKeysArray = keys.filter(
    key => isEmpty(data[key]) && requiredKeys.indexOf(key) !== -1
  );
  if (emptyKeysArray.length > 0 || !undefinedKeys) {
    const emptyMessageArray = emptyKeysArray.map(
      item => `${item} cannot be empty`
    );
    const undefinedMessageArray = !undefinedKeys ? ['missing fields'] : [];
    messageArray = emptyMessageArray.concat(undefinedMessageArray);
  }
  return messageArray;
};
