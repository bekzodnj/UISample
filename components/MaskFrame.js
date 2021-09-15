import React from 'react';
import {View} from 'react-native';

export const MaskFrame = ({children, style}) => {
  return <View style={[style]}>{children}</View>;
};

/**
 *
 * Mask frame applies backround color to places where Halfbox'es cannot cover with background.
 * Mask frame positioned as `absolute`, so that it always stays behind the HalfBox'es.
 *
 *           Card
 *   -------------------
 *  |         |         |
 *  |  mask2  | mask 2  |
 *  |         |         |
 *   -------------------
 */
