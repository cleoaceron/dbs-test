/* eslint-disable react-native/no-inline-styles */
import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import {actionCreator, types} from 'ducks';
import PropTypes from 'prop-types';
import {Image} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {scale, verticalScale, moderateScale} from 'utils/scale';
import theme from 'theme/images';

const SearchInput = ({
  onClear,
  onChangeText,
  containerStyle,
  inputStyle,
  placeholder,
  ...props
}) => {
  const [textValue, setTextValue] = React.useState('');
  const [placeHolderText, setPlaceHolderText] = React.useState(placeholder);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleClose = () => {
    setTextValue('');
    if (onClear) {
      onClear();
    }
  };

  const handleOnFocus = () => {
    setPlaceHolderText('');
    setIsFocused(true);
  };

  const handleOnBlur = () => {
    setPlaceHolderText(placeholder);
    setIsFocused(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={[styles.main, containerStyle]}>
        <View style={styles.iconContainer}>
          <Image source={theme.searchIcon} />
        </View>

        <TextInput
          maxLength={50}
          value={textValue}
          allowFontScaling={false}
          style={[
            styles.text,
            {
              color: 'black',
              flex: 1,
            },
            inputStyle,
          ]}
          placeholder={placeHolderText}
          onChangeText={text => {
            onChangeText(text);
            setTextValue(text);
          }}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />

        {textValue ? (
          <TouchableOpacity
            onPress={handleClose}
            testID={'searchBoxClearFieldTestId'}
            accessibilityLabel={'searchBoxClearFieldTestId'}>
            <View style={styles.iconContainer}>
              <FontAwesome name="close" size={scale(12)} color={'black'} />
            </View>
          </TouchableOpacity>
        ) : (
          <View style={styles.iconContainer} />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: verticalScale(30),
    flexDirection: 'row',
    borderRadius: 6,
  },
  iconContainer: {
    height: verticalScale(32),
    width: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    borderRightWidth: 1,
  },
  text: {
    fontSize: moderateScale(16),
    marginRight: scale(12),
    height: verticalScale(30),
    marginLeft: 0,
    padding: 0,
  },
  searchIcon: {
    height: verticalScale(15),
    width: moderateScale(15),
  },
});

SearchInput.propTypes = {
  onChangeText: PropTypes.func,
  onClear: PropTypes.func,
};

const mapStateToProps = ({app}) => ({app});
export default connect(mapStateToProps, {actionCreator})(SearchInput);
