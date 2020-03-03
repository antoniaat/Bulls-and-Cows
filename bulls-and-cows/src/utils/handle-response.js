export default function handleResponse(response) {
  return response.json().then(data => {
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
