export const API_PREFIX = `http://127.0.0.1:8000/api`;


const PUT = 'PUT';
const POST = 'POST';
const GET = 'GET';
const DELETE = 'DELETE';

export const getHttpPutData = (data, headers = null) => ({
  method: PUT,
  data,
  headers,
});

export const getHttpPostData = (data, headers = null) => ({
  method: POST,
  data,
  headers,
});

export const getHttpGetData = (headers = null) => ({
  method: GET,
  headers,
});

export const getHttpDeleteData = (headers = null) => ({
  method: DELETE,
  headers,
});

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('token')}`,
});
