import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import theme from 'theme/images';
import {scale, verticalScale} from 'utils/scale';

const ImageLoader = ({children, padding = 0, addStyles = {}}) => {
  return (
    <>
      <View style={[styles.container]}>
        <Image source={theme.banner} resizeMode="contain" style={styles.logo} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default ImageLoader;
