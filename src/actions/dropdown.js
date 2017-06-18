const SET_VISIBILITY = 'SET_VISIBILITY';

const setDropDownVisibility = (flag) => {
  let visible;

  if (typeof flag === 'undefined') {
    visible = false;
  } else {
    visible = flag;
  }

  return {
    type: SET_VISIBILITY,
    visible,
  };
};

export { SET_VISIBILITY, setDropDownVisibility };

