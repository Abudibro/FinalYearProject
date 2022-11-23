import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function Nav(props) {
    if (props.nav == -1) return;
    return (
        <View style={styles.wrapper} >
            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (props.nav == 1) return;
                props.changeNav(1);
            }}>
                <Entypo name='home' size={35} color={props.nav == 1 ? '#2846c4' : '#848484'} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (props.nav == 2) return;
                props.changeNav(2);
            }}>
                <AntDesign name='heart' size={35} color={props.nav == 2 ? '#2846c4' : '#848484'} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (props.nav == 3) return;
                props.changeNav(3);
            }}>
                <FontAwesome5 name='calendar-alt' size={35} color={props.nav == 3? '#2846c4' : '#848484'} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (props.nav == 4) return;
                props.changeNav(4);
            }}>
                <FontAwesome5 name='user-circle' size={35} color={props.nav == 4 ? '#2846c4' : '#848484'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: Dimensions.get('window').height*.9,
        alignSelf: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 50,
        height: 60,
        width: 320,
        zIndex: 100
    }
});