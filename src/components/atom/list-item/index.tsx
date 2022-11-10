import React from 'react';
import {
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import style from './index.style';

interface Props {
  text: string;
  onPress: Function;
}

const ListItem = ({
  onPress,
  text
}: Props) => {
  return (
    <TouchableOpacity style={style.item} onPress={() => onPress()}>
      <View style={[style.container]}>
        <Text
          style={[
            style.theText
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
