import React from 'react';
import { FlatList, Text } from 'react-native';
import style from './index.style';

import { SectionTitle, MasterCard, Card } from '../../components/molecule';
import { SortOption, ListEmpty } from '../../components/atom';
import Hoc from '../../components/hoc';
import { IMaster, ISort, ScreenProps } from '../../interface';
import { useActions, useAppState } from '../../states';
import { wordsToAvatar } from '../../utils/helper';
import BlockScreenLoading from '../../components/atom/block-screen-loading';

const HomeScreen: React.FC<ScreenProps<'Home'>> = ({navigation}) => {

  const {loadAppData, preProcessToken, setSort, setFavorite} = useActions();
  const {orderedOwners, sort, selectedMaster} = useAppState();

  const [isLoading, setIsLoading] = React.useState(false);
  
  React.useEffect(() => {
    preProcess();
    return () => {};
  }, []);

  const preProcess = async() => {
    setIsLoading(true);
    try {
      await preProcessToken();
    } finally {
      setIsLoading(false);
      getMaster();
    }
  }
  const getMaster = async() => {
    // it should be a pagination, but api can not provide
    // for loading large data, it is using FlatList,
    // so this will not render all data, but render based on the scrolliing position
    setIsLoading(true);
    try {
      await loadAppData();
    } finally {
      setIsLoading(false);
    }
  }

  const handleFavoriteClick = async(item: IMaster) => {
    setIsLoading(true);
    try {
      await setFavorite(item);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Hoc>
      <MasterCard showBackButton={false} item={selectedMaster} />
      <SectionTitle text='Owners List' action={
        <SortOption onSelect={(item: ISort) => setSort(item)} text={sort.label} testID="sortButton"/>
      } />
      <FlatList
        data={orderedOwners}
        keyExtractor={(item) =>
          `${item.id}`
        }
        renderItem={({item}) => (
          <Card
            onPress={() => navigation.navigate('Detail', {owner: item})}
            isFavorite={item.favorites}
            avatarText={wordsToAvatar(`${item.firstName} ${item.lastName}`)}
            showAction={true}
            showStar={true}
            onFavoritePress={() => handleFavoriteClick(item)}
            cardTestID='goToDetail'
          >
            <Text style={style.listText}>
              {`${item.firstName} ${item.lastName}`}
            </Text>
          </Card>
        )}
        style={style.listContainer}
        ListEmptyComponent={
          !isLoading ? (
            <ListEmpty text='No Data Available' />
          ) : (
            <></>
          )
        }
        refreshing={false}
        onRefresh={() => getMaster()}
        onEndReached={() => getMaster()}
      />
      {isLoading && <BlockScreenLoading text='Loading...'/>}
    </Hoc>
  );
};

export default HomeScreen;
