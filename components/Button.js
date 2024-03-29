import { Text, Dimensions, TouchableOpacity } from "react-native";
import constants from "../global";

export default function ButtonCustom(props) {
    return (
        <TouchableOpacity style={{
            width: props.width ? props.width : constants.width,
            height: props.height ? props.height : 57,
            backgroundColor: props.bg ? props.bg :'#2846c4',
            borderRadius: props.borderRadius ? props.borderRadius : 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            opacity: props.disabled ? .3 : 1,
            marginTop: props.marginTop && props.marginTop,
            marginBottom: props.marginBottom && props.marginBottom
        }}
        activeOpacity={.7}
        disabled={!props.disabled || props.disabled == null ? false: true}
        onPress={props.onClick}>
            {props.icon ? props.icon : null}
            <Text style={{color: props.color ? props.color : '#f1f1f1', alignSelf: 'center', fontSize: props.size, fontWeight: props.weight}}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}