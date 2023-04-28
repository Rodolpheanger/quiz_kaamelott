export const prefixedFetch = (url: string) => {
  const prefix = process.env.NEXT_PUBLIC_API_URL;
  if (process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development")
    return fetch(`${prefix}${url}`);
  else return fetch(url);
};
