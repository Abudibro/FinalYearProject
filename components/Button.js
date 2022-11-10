import { Text, Dimensions, TouchableOpacity } from "react-native";

export default function ButtonCustom(props) {
    return (
        <TouchableOpacity style={{
            width: (Dimensions.get('window').width * 0.85) + 4,
            height: 57,
            backgroundColor: '#2846c4',
            borderRadius: 12,
            alignContent: 'center',
            justifyContent: 'center'
        }}
        activeOpacity={.7}
        onPress={props.onClick}>
            <Text style={{color: '#f1f1f1', alignSelf: 'center', fontSize: props.size, fontWeight: props.weight}}>
            {props.children}
            </Text>
        </TouchableOpacity>
    );
}