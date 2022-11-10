import { Text } from 'react-native';

export default function Header(props) {
  return (
    <Text style={
        {
            color: props.color ? props.color : "#f1f1f1",
            fontSize: props.size ? props.size : "35",
            fontWeight: props.weight ? props.weight : "bold",
            margin: props.margin ? props.margin : 0
        }
      }
    onPress={props.onPress}>
        {props.children}
    </Text>
  );
}