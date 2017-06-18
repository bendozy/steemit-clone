import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VerticalMenu extends Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('click', this.handleClickOutside.bind(this), true);
  // }
  //
  // componentWillUnmount() {
  //   document.removeEventListener('click', this.handleClickOutside.bind(this), true);
  // }

  // handleClickOutside(event) {
  //   event.preventDefault();
  //
  //   const domNode = this.node;
  //   const { dispatch,  visible} = this.props;
  //
  //   if ((!domNode || !domNode.contains(event.target))) {
  //     dispatch(setDropDownVisibility(true));
  //   } else {
  //     dispatch(setDropDownVisibility(true));
  //   }
  // }

  // handleClick(event) {
  //   event.preventDefault();
  //   console.log('handleClick');
  // }

  render() {
    let className = 'menu vertical VerticalMenu';
    const { visible } = true;
    const addedClassName = visible ? 'VerticalMenuShown' : 'VerticalMenuHidden';

    className = `${className} ${addedClassName}`;

    return (
      <ul className={className}>
        <li>
          <a href="/created">new&nbsp; </a>
        </li>

        <li>
          <a href="/hot">hot&nbsp; </a>
        </li>

        <li>
          <a href="#">
            promoted &nbsp;
          </a>
        </li>
      </ul>
    );
  }
}

VerticalMenu.propTypes = {
  visible: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

export default VerticalMenu;
