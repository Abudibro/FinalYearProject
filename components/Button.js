import { Text, Dimensions, TouchableOpacity } from "react-native";

export default function ButtonCustom(props) {
    return (
        <TouchableOpacity style={{
            width: props.width ? props.width : (Dimensions.get('window').width * 0.85) + 4,
            height: props.height ? props.height : 57,
            backgroundColor: props.bg ? props.bg :'#2846c4',
            borderRadius: props.borderRadius ? props.borderRadius : 12,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            opacity: props.disabled ? .3 : 1,
            marginTop: props.marginTop? props.marginTop : 0,
            marginBottom: props.marginBottom ? props.marginBottom : 0
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