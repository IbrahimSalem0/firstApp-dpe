import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import userApi from '../../api/userApi';
import { AuthContext } from '../../store/context';
import { getTimeOfDay, showToast } from '../../utils';

const Home = () => {
  const {
    authContext: { signOut },
  } = React.useContext(AuthContext);

  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  }, []);

  const onsubmit = () => {
    getMovies();

  };
  const name = 'Ibrahim';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello {name}</Text>

      <TouchableOpacity onPress={onsubmit}>
        <Text>Press Me</Text>
        <Text>{data.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
