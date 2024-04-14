import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { PrimaryButton } from '../components/shared/PrimaryButton';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbarFlexBox}>
        <Text style={styles.navTitle}>Hola de nuevo</Text>
        <Text style={styles.navText}>Disponible</Text>
      </View>
      <View style={styles.main}>
        <View>
          <Text>Credito Disponible</Text>
          <Text>$200</Text>
        </View>
        <View>
          <PrimaryButton label="Continuar Aprendizaje" onPress={() => { }} />
          <PrimaryButton label="Solicitar Crédito" onPress={() => { }} />
          <PrimaryButton label="Aplicar a inversión" onPress={() => { }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#092F39',
  },
  navbarFlexBox: {
    width: '100%',
    height: '20%',
    justifyContent: 'flex-start',
    backgroundColor: '#004E64',
    alignItems: 'flex-end',
  },
  navTitle: {
    color: 'white',
    paddingTop: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    fontSize: 35,
  },
  navText: {
    backgroundColor: '#62C38F',
    fontWeight: '600',
    borderRadius: 15,
    marginRight: 20,
    fontSize: 15,
    color: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});
