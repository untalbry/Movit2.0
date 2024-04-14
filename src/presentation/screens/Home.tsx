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
          <Text style={{ fontSize: 18 }}>Credito Disponible</Text>
          <Text style={{ fontSize: 60, fontWeight: 'bold' }}>$200.00</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, margin: 10 }}>
          <PrimaryButton
            label1="Continuar"
            label2="Aprendizaje"
            onPress={() => { }}
          // name="home"
          // color="#fff"
          // size={30}
          />
          <PrimaryButton
            label1="Solicitar"
            label2="Crédito"
            onPress={() => { }}
          />
          <PrimaryButton
            label1="Aplicar a"
            label2="inversion"
            onPress={() => { }}
          />
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
