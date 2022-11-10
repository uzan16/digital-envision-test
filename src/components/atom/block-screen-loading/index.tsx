import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import style from './index.style';

interface Props {
  text: string;
}

const BlockScreenLoading = ({text}: Props) => {
  return (
    <View style={style.overlay}>
      <View style={style.center}>
        <View style={style.innerCenter}>
          <ActivityIndicator
            color={'#36A388'}
            size="large"
            style={{}}
          />
          <Text style={style.loadingText}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default BlockScreenLoading;