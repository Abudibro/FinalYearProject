import { Text } from 'react-native';

export default function Header(props) {
  return (
    <Text style={
        {
            color: props.color ? props.color : "#f1f1f1",
            fontSize: props.size ? props.size : "35",
            fontWeight: props.weight ? props.weight : "bold",
            margin: props.margin ? props.margin : 0,
            marginHorizontal: props.marginH ? props.marginH : 0,
						marginVertical: props.marginV ? props.marginV : 0,
						paddingRight: props.paddingRight ? props.paddingRight: 0,
            paddingLeft: props.paddingLeft ? props.paddingLeft : 0,
            textAlign: props.center ? 'center' : null,
						width: props.width ? props.width : null
        }
      }
    onPress={props.onPress}>
			{props.children}
    </Text>
  );
}