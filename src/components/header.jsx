import React from 'react';
import {Text, View} from 'react-native';
import {label} from '../constant';
import {styles} from '../styles';

const Header = () => {
  return (
    <View style={styles.headetBox}>
      <Text style={styles.headerText}>{label.Movies}</Text>
    </View>
  );
};

export default Header;
