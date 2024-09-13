const fetchDelProfile = async (data) => {
  const url = '/___________';
  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok && response.status !== 302) {
      const errors = await response.json();
      throw new Error(JSON.stringify({ errors }));
    }
  } catch (error) {
    console.log(error);
  }
};

export default fetchDelProfile;
