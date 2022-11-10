import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {GestureResponderEvent, TouchableOpacity, View} from 'react-native';
import { Avatar } from '../../atom';
import Icon from 'react-native-vector-icons/AntDesign';

import style from './index.style';

interface Props {
  isFavorite?: boolean;
  avatarText?: string;
  children: ReactNode;
  showStar: boolean;
  showAction: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  onFavoritePress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

const Content = ({
  avatarText,
  children,
  showStar = false,
  showAction = false,
  isFavorite = false,
  onFavoritePress
}: Props) => {
  return (
    <>
      {avatarText !== undefined && 
        <Avatar text={avatarText} type='card' style={style.avatar} />
      }
      {children}
      {showStar && 
        <TouchableOpacity activeOpacity={0.7} onPress={onFavoritePress}>
          <Icon 
            name={isFavorite ? 'star' : 'staro'}
            style={[
              style.starIcon, 
              !showAction ? {marginRight: 10} : {},
              isFavorite ? style.starIconSelected : {}
            ]}
          />
        </TouchableOpacity>
      }
      {showAction && 
        <Icon 
          name="right"
          style={[
            style.actionIcon
          ]}
      />
      }
    </>
  );
}
const Card = (props: Props) => {
  if (props.onPress !== undefined) {
    return (
      <TouchableOpacity
        style={[style.wrapper, props.style]}
        onPress={props.onPress}
        activeOpacity={0.7}
      >
        <Content {...props} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={[style.wrapper, props.style]}>
      <Content {...props} />
    </View>
  );
};

export default Card;