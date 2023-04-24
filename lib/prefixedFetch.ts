export const prefixedFetch = (url: string) => {
  if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development")
    return fetch(`http://localhost:5174${url}`);
  if (process.env.NODE_ENV === "production")
    return fetch(`${process.env.HOST}${url}`);
  else return fetch(url);
};
