const headers = {};
if (process.env.REACT_APP_GITHUB_TOKEN) {
  headers.Authorization = `token ${process.env.REACT_APP_GITHUB_TOKEN}`;
}

const response = await axios.get(url, { headers });
