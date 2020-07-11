const changeIcon = (id) => {
  const item = document.getElementById(id);
  const currentName = item.classList[1];
  if (currentName === 'fa-play') {
    item.classList.remove('fa-play');
    item.classList.add('fa-pause');
  } else {
    item.classList.remove('fa-pause');
    item.classList.add('fa-play');
  }
};
