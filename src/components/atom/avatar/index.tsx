import React from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import style from './index.style';

interface Props {
  text: string;
  type: 'header' | 'card';
  style?: StyleProp<ViewStyle>;
}

const Avatar = ({text, type, style: customStyle}: Props) => {
  return (
    <View style={[style.wrapper, type === 'header' ? style.wrapperHeader : style.wrapperCard, customStyle]}>
      <Text style={[style.text, type === 'header' ? style.textHeader : style.textCard]}>
        {text}
      </Text>
    </View>
  );
};

export default Avatar;