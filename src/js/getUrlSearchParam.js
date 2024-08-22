const getUrlSearchParam = (searchParam) => {
  const url = new URL(window.location.href);

  const params = new URLSearchParams(url.search);

  return params.get(searchParam);
};

export default getUrlSearchParam;
