import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BaseURL, ImageURL} from '../constant';
import {Get} from '../baseService/services';
import {styles} from '../styles';
import {useNavigation} from '@react-navigation/native';
import Header from './header';

const Home = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    Get(BaseURL).then(response => {
      setData(response?.data?.results);
    });
  };

  const handleClick = item => {
    navigation.navigate('Details', {data: item});
  };

  const renderItem = ({item}) => {
    const image = `${ImageURL}${item?.poster_path}`;
    return (
      <View>
        <TouchableOpacity
          onPress={() => handleClick(item)}
          style={styles.cardBox}>
          <Image source={{uri: image}} style={styles.image} />
          <Text style={styles.title}>{item?.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Home;
