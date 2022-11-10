import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { IMaster } from '../../../interface';
import { wordsToAvatar } from '../../../utils/helper';
import { Avatar } from '../../atom';
import style from './index.style';

interface Props {
  showBackButton: boolean;
  onBackButtonPress?: ((event: GestureResponderEvent) => void) | undefined;
  item?: IMaster;
}

const MasterCard = ({showBackButton, onBackButtonPress, item}: Props) => {
  return (
    <View style={[style.wrapper, !showBackButton && item === undefined ? {height: 0} : {}]}>
      {showBackButton && 
        <TouchableOpacity style={style.backButtonWrapper} activeOpacity={0.7} onPress={onBackButtonPress}>
          <Icon 
            name='arrowleft'
            style={style.backButtonIcon}
          />
        </TouchableOpacity>
      }
      {item !== undefined && <>
        <Avatar text={wordsToAvatar(`${item.firstName} ${item.lastName}`)} type='header' />
        <Text style={style.text}>
          Master: {`${item.firstName} ${item.lastName}`}
        </Text>
      </>}
    </View>
  );
};

export default MasterCard;
