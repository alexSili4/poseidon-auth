const fetchEmailConfirm = async (data) => {
  const url = '/customer/sign-up/send-to-email';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = await response.json();
      const errorMessage = error[0].message;

      throw new Error(errorMessage);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    //   refs.phoneError.textContent = error.message;
    //   refs.phoneInputWrap.classList.add(constants.invalidClassName);
  }
};

export default fetchEmailConfirm;
