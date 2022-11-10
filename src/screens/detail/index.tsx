import React from 'react';
import { FlatList, Text, View } from 'react-native';
import RNShake from 'react-native-shake';

import style from './index.style';

import { SectionTitle, MasterCard, Card } from '../../components/molecule';
import { ListEmpty, Button } from '../../components/atom';
import Hoc from '../../components/hoc';
import { IMaster, ScreenProps } from '../../interface';
import { useActions, useAppState } from '../../states';
import { getAge, wordsToAvatar } from '../../utils/helper';
import BlockScreenLoading from '../../components/atom/block-screen-loading';

const DetailScreen: React.FC<ScreenProps<'Detail'>> = ({navigation, route}) => {

  const {params: {owner}} = route;
  
  const [isLoading, setIsLoading] = React.useState(false);

  const {pets, selectedMaster} = useAppState();
  const {setFavorite, setMaster} = useActions();

  const filteredPets = React.useMemo(() => {
    return pets.filter(x => x.masterId === owner.id);
  }, [pets]);

  React.useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setMaster(owner);
    });

    return () => {
      subscription.remove();
    }
  }, []);
  
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
      <MasterCard
        showBackButton={true}
        onBackButtonPress={() => navigation.goBack()}
        item={selectedMaster}
      />
      <SectionTitle text='Owners Card'/>
      <Card
        style={style.ownerCard}
        avatarText={wordsToAvatar(`${owner.firstName} ${owner.lastName}`)}
        showAction={false}
        showStar={true}
        isFavorite={owner.favorites}
        onFavoritePress={() => handleFavoriteClick(owner)}
      >
        <View style={style.ownerWrapper}>
          <Text style={style.ownerCaption}>
            First Name
          </Text>
          <Text style={style.ownerValue}>
            {owner.firstName}
          </Text>
          <Text style={style.ownerCaption}>
            Last Name
          </Text>
          <Text style={[style.ownerValue, {marginBottom: 0}]}>
            {owner.lastName}
          </Text>
        </View>
      </Card>
      <SectionTitle text='Cats'/>
      <FlatList
        data={filteredPets}
        keyExtractor={(item) =>
          `${item.id}`
        }
        renderItem={({item}) => (
          <Card
            style={style.petCard}
            showAction={true}
            showStar={false}
          >
            <View style={style.petWrapper}>
              <Text style={style.petTitle}>
                {item.name}
              </Text>
              <Text style={style.petSubTitle}>
                Age: {getAge(item.dob)}
              </Text>
            </View>
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
        refreshing={isLoading}
      />
      <Button onPress={() => setMaster(owner)} text="Make Master" />
      {isLoading && <BlockScreenLoading text='Loading...'/>}
    </Hoc>
  );
};

export default DetailScreen;
