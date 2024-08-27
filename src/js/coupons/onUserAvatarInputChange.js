import refs from './refs';

const onUserAvatarInputChange = (e) => {
  if (!e.target.files?.length) {
    refs.userAvatarPreview.src = refs.userAvatar.src;
    return;
  }

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = ((image) => (e) => {
    if (image) {
      image.src = e?.target?.result;
    }
  })(refs.userAvatarPreview);

  reader.readAsDataURL(file);
};

export default onUserAvatarInputChange;
