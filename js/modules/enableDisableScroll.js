const enableScroll = () => {
  document.body.style.overflowY = 'auto';
};

const disableScroll = () => {
  document.body.style.overflowY = 'hidden';
};

export { enableScroll, disableScroll };