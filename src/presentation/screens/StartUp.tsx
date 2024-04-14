import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import { RootStackParams } from '../routes/StackNavigator';

export const StartUp = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => { }, [
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000),
  ]);

  return (
    <SafeAreaView style={style.container}>
      <Image source={require('../../../public/movit_logo.png')} />
      <Text style={style.h1}>Movit</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004E64',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
});
