const setFormData = ({ data, form }) => {
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    data[key] = value;
  });
};

export default setFormData;
