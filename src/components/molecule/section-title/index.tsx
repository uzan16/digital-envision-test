import React, { ReactNode } from 'react';
import {Text, View} from 'react-native';
import style from './index.style';

interface Props {
  text: string;
  action?: ReactNode;
}

const SectionTitle = ({text, action}: Props) => {
  return (
    <View style={style.wrapper}>
      <Text style={style.title}>
        {text}
      </Text>
      {action !== undefined && action}
    </View>
  );
};

export default SectionTitle;
