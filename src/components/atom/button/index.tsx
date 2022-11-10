import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import style from './index.style';

interface Props {
  text: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const Button = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={style.wrapper} onPress={onPress}>
      <Text style={style.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;