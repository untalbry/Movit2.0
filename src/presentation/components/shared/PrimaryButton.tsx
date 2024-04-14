import { Pressable, Text } from 'react-native';

interface Props {
  label: string;
  onPress: () => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  );
};
