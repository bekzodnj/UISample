import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {MaskFrame} from './MaskFrame';

const BOX_BORDER_RADIUS = 20;
export const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <MaskFrame style={maskStyles.frameGrey} />
      <HalfBox>
        <View style={styles.rectangleElement} />
        <Text style={styles.nameStyle}>Name</Text>
        <View style={styles.rectangleElement} />
      </HalfBox>

      <MaskFrame style={maskStyles.frameWhite} />
      <HalfBox style={styles.greyBackground}>
        <Text>Balance</Text>
      </HalfBox>
    </View>
  );
};

const HalfBox = ({children, style}) => {
  return <View style={[styles.halfbox, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    margin: '10%',
    backgroundColor: 'white',
    borderRadius: BOX_BORDER_RADIUS,
  },
  halfbox: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BOX_BORDER_RADIUS,
    height: 90,
  },
  rectangleElement: {
    height: 30,
    width: 40,
    backgroundColor: '#0f1c22',
    borderRadius: 10,
  },
  nameStyle: {
    flexBasis: '30%',
    textAlign: 'center',
  },
  greyBackground: {
    backgroundColor: 'lightgrey',
  },
});

const maskStyles = StyleSheet.create({
  frameGrey: {
    backgroundColor: 'lightgrey',
    position: 'absolute',
    width: '50%',
    height: '100%',
    borderTopStartRadius: BOX_BORDER_RADIUS,
    borderBottomStartRadius: BOX_BORDER_RADIUS,
  },
  frameWhite: {
    backgroundColor: 'white',
    position: 'absolute',
    right: 0,
    zIndex: -1,
    width: '50%',
    height: '100%',
    borderBottomEndRadius: BOX_BORDER_RADIUS,
    borderTopEndRadius: BOX_BORDER_RADIUS,
  },
});
