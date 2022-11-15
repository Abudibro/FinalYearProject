import { Text, Dimensions, TouchableOpacity } from "react-native";

export default function ButtonCustom(props) {
    return (
        <TouchableOpacity style={{
            width: props.width ? props.width : (Dimensions.get('window').width * 0.85) + 4,
            height: props.height ? props.height : 57,
            backgroundColor: '#2846c4',
            borderRadius: 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            opacity: props.disabled ? .7 : 1
        }}
        activeOpacity={.7}
        disabled={!props.disabled || props.disabled == null ? false: true}
        onPress={props.onClick}>
            {props.icon ? props.icon : null}
            <Text style={{color: '#f1f1f1', alignSelf: 'center', fontSize: props.size, fontWeight: props.weight}}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}