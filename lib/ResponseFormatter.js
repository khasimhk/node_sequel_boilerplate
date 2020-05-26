export const formatResponse = (body, error) => {
  console.log('in formatter');
  
  if (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        code: error.code || 400,
        message: error.message || '',
      }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Headers':
        'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
      'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(body),
  };
};
