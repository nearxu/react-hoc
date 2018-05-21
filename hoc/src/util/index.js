export function getToken() {
  return session.get(PREV_TOKEN_KEY) || cookie.get(TOKEN_KEY);
}

export function isLogin() {
  const token = getToken();
  if (!token) return Promise.reject(new Error("not login"));
  return new Promise((resolve, reject) => {
    http
      .post("/https:www.baidu.com", { token })
      .then(res => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
}
