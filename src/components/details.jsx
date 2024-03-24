// HomeScreen.js

import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {styles} from '../styles';
import {ImageURL, label} from '../constant';
import Header from './header';

const Details = () => {
  const route = useRoute();
  const {data} = route.params;
  const image = `${ImageURL}${data?.poster_path}`;

  return (
    <View scr style={styles.container}>
      <Header />
      <ScrollView scrollEnabled={true} style={styles.movieContainer}>
        <Image source={{uri: image}} style={styles.movieImage} />
        <Text style={styles.detailTitle}>{label.Title + data?.title}</Text>
        <Text style={styles.detailTitle}>
          {label.RealeaseDate + data?.release_date}
        </Text>
        <Text style={styles.detailTitle}>
          {label.Rating + data?.vote_average}
        </Text>
        <Text style={styles.detailTitle}>{label.Story + data?.overview}</Text>
      </ScrollView>
    </View>
  );
};

export default Details;
