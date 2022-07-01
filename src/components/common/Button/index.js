import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableHighlight,
  ViewPropTypes,
  ActivityIndicator,
} from 'react-native';

import {DARK_PURPLE, LIGHT_GRAY, WHITE} from 'theme/colors';

import {verticalScale, scale} from 'utils/scale';

const Button = ({
  label,
  onPress,
  disabled,
  containerStyle = {},
  textStyle = {},
  weight,
  loading = false,
  testID,
  accessibilityLabel,
  ...rest
}) => {
  const buttonStyle = {
    backgroundColor: disabled ? LIGHT_GRAY : DARK_PURPLE,
  };

  return (
    <TouchableHighlight
      accessibilityLabel={accessibilityLabel}
      onPress={onPress}
      disabled={disabled}
      underlayColor={LIGHT_GRAY}
      style={[styles.button, buttonStyle, containerStyle]}
      {...rest}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text size={16} weight={weight} style={textStyle}>
          {label}
        </Text>
      )}
    </TouchableHighlight>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  textssStyle: PropTypes.any,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  onPress: () => {},
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: scale(50),
    alignItems: 'center',
  },
});
