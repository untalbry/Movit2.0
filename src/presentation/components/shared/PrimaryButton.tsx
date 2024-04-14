import { StyleSheet } from 'react-native';
import { Pressable, Text } from 'react-native';
// import { Icon } from 'react-native-vector-icons/Icon';

interface Props {
  label1: string;
  label2: string;
  onPress: () => void;
  // name: string;
  // size: number;
  // color: string;
}

export const PrimaryButton = ({
  label1,
  label2,
  onPress,
}: // name, size, color
  Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      {/* <Icon name={name} size={size} color={color} /> */}
      <Text>{label1}</Text>
      <Text>{label2}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#004E64',
    padding: 20,
    textAlign: 'center',
    flexShrink: 1,
  },
});
