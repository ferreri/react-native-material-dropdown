import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Button } from 'react-native-material-buttons';

import styles from './styles';

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    disabledColor: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
  };

  static propTypes = {
    ...Button.propTypes,

    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let { onPress, index, value } = this.props;

    if ('function' === typeof onPress) {
      onPress(index, value);
    }
  }

  render() {
    let { children, style, index, ...props } = this.props;

    return (
      <Button
        {...props}

        style={[styles.container, style]}
        onPress={this.onPress}
      >
        {children}
      </Button>
    );
  }
}
