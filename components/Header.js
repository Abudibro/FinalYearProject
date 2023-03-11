import { Text } from 'react-native';

export default function Header(props) {
  return (
    <Text style={
			{
				margin: props.margin && props.margin,
				color: props.color ? props.color : "#f1f1f1",
				fontSize: props.size ? props.size : "35",
				fontWeight: props.weight ? props.weight : "bold",
				marginHorizontal: props.marginH && props.marginH,
				marginVertical: props.marginV && props.marginV,
				paddingRight: props.paddingRight && props.paddingRight,
				paddingLeft: props.paddingLeft && props.paddingLeft,
				textAlign: props.center ? 'center' : null,
				width: props.width && props.width,
				marginTop: props.marginT && props.marginT
			}
		}
		numberOfLines={props.numOfLines}>
			{props.children}
    </Text>
  );
}