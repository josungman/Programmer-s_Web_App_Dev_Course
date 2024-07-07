// api.js
export function get_searchPhotos(keyword) {
    const url = `https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/search?q=${keyword}`;
    return fetch(url)
    .then(res => {
      if (!res.ok) {
          throw new Error(`HTTP error, status = ${res.status}`);
      }
      return res.json();
    });
  }
  
  export function get_fetchKeywords(value) {
    const url = `https://lc6g0r0d5a.execute-api.ap-northeast-2.amazonaws.com/dev/api/cats/keywords?q=${value}`;
    return fetch(url)
    .then(res => {
      if (!res.ok) {
          throw new Error(`HTTP error, status = ${res.status}`);
      }
      return res.json();
    });
  }