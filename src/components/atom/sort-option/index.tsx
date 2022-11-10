import React from 'react';
import {Text, TouchableOpacity, Modal, TouchableWithoutFeedback, SafeAreaView, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './index.style';
import {Picker} from '@react-native-picker/picker';
import ListItem from '../list-item';
import { ISort } from '../../../interface';

interface Props {
  text: string;
  onSelect: Function;
  testID?: string;
}

const SortOption = ({
  text,
  onSelect,
  testID
}: Props) => {
  const [chooserVisible, setChooserVisible] = React.useState(false);
  const data: ISort[] = [
    {
      label: 'Name',
      value: 'name'
    },
    {
      label: 'Number of Cats',
      value: 'cats'
    }
  ]
  return (
    <>
      <TouchableOpacity
        style={style.wrapper}
        activeOpacity={0.7}
        onPress={() => setChooserVisible(true)}
        testID={testID}
      >
        <Text style={style.caption}>
          Sort By:
        </Text>
        <Text style={style.value} testID='selectedOption'>
          {` ${text}`}
        </Text>
        <Icon 
          name='caretdown'
          style={style.icon}
        />
        {/* <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> */}
      </TouchableOpacity>
      <Modal
        visible={chooserVisible}
        animationType={'fade'}
        hardwareAccelerated={true}
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setChooserVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setChooserVisible(false)}>
          <SafeAreaView
            style={[
              style.modalWrapper
            ]}
          >
            <View
              style={[
                style.modalContainer
              ]}
            >
              <FlatList
                data={data}
                renderItem={({item}) => {
                  return (
                    <ListItem
                      text={item.label}
                      onPress={() => {
                        onSelect(item);
                        setChooserVisible(false);
                      }}
                    />
                  );
                }}
                keyExtractor={(item, index) => `${item}-${index}`}
                removeClippedSubviews={true}
              />
            </View>
          </SafeAreaView>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default SortOption;
