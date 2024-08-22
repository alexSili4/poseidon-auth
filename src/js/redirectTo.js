const redirectTo = (response) => {
  const redirectUrl = response.headers.get('x-redirect');
  window.location.href = redirectUrl;
};

export default redirectTo;
