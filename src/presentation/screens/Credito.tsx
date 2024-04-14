import * as React from 'react';
import { Image } from 'expo-image';
import { StyleSheet, View, Text } from 'react-native';
import Property1Default from '../components/Property1Default';
import FrameComponent from '../components/FrameComponent';
import Property1Default1 from '../components/Property1Default1';
import TypeLarge from '../components/TypeLarge';
import StateDefaultEmpty from '../components/StateDefaultEmpty';
import DataCredito from '../components/DataCredito';
import { Color } from '../../GlobalStyles.ts';

const Credito = () => {
  return (
    <View style={styles.credito}>
      <Property1Default
        navBarIcons={require('../../assets/iconscool3.png')}
        vector={require('../../assets/iconscool4.png')}
        vector1={require('../../assets/iconscool5.png')}
        vector2={require('../../assets/iconscool6.png')}
        navBarIcons1={require('../../assets/iconscool7.png')}
        property1DefaultPosition="absolute"
        property1DefaultTop={751}
        property1DefaultLeft={0}
        property1DefaultBackgroundColor="#e6e6e6"
        property1DefaultBorderStyle="solid"
        property1DefaultBorderColor="#092f39"
        property1DefaultBorderTopWidth={0.4}
        navBarIconsHeight={19}
        navBarIconsWidth={23}
        navBarIconsHeight1={24}
      />
      <FrameComponent
        titlePoppins="Solicitar Credito"
        frameViewPosition="absolute"
        frameViewTop={0}
        frameViewLeft={0}
        frameViewMarginLeft={-105}
        showFrameView
      />
      <Property1Default1
        valueContent="Cantidad"
        rightIcon={false}
        successMessage={false}
        leftIcon={false}
        value
        errorMessage={false}
        property1DefaultPosition="absolute"
        property1DefaultTop={125}
        property1DefaultLeft={16}
      />
      <TypeLarge
        text="Solicitar"
        typeLargePosition="absolute"
        typeLargeWidth={316}
        typeLargeHeight={39}
        typeLargeTop={260}
        typeLargeLeft={20}
      />
      <StateDefaultEmpty
        label1="Explicanos por qué"
        valueContent="Texto"
        successMessage={false}
        optionalLabel={false}
        errorMessage={false}
        label
        helpIcon={false}
        rightIcon={false}
        value
        leftIcon={false}
        stateDefaultEmptyPosition="absolute"
        stateDefaultEmptyTop={178}
        stateDefaultEmptyLeft={20}
      />
      <DataCredito
        campo="Nivel"
        value="I"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={336}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="79.75%"
      />
      <DataCredito
        campo="Monto máximo"
        value="100.00"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={378}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="73.62%"
      />
      <DataCredito
        campo="Interés anual"
        value="45%"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={420}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="75.77%"
      />
      <DataCredito
        campo="Plaza de pago"
        value="1 MES"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={462}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="74.85%"
      />
      <DataCredito
        campo="Comisión "
        value="5.00"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={504}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="75.77%"
      />
      <DataCredito
        campo="IVA"
        value="0.80"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={546}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="75.77%"
      />
      <DataCredito
        campo="Total comisión"
        value="5.80"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={588}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="75.77%"
      />
      <DataCredito
        campo="Total de deuda"
        value="105.80"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={630}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="73.62%"
      />
      <DataCredito
        campo="Mensualidad"
        value="109.13"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={672}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        dataCreditoOpacity={0.9}
        valorLeft="74.23%"
      />
      <DataCredito
        campo="Inversionista"
        value="asignado"
        visible
        dataCreditoPosition="absolute"
        dataCreditoTop={714}
        dataCreditoLeft={17}
        dataCreditoWidth={326}
        dataCreditoHeight={30}
        valorLeft="69.94%"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  credito: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: '100%',
    height: 800,
    overflow: 'hidden',
  },
});

export default Credito;
