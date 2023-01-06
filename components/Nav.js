import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function Nav({nav, changeNav}) {

    console.log(nav);

    return (
        <View style={styles.wrapper} >
            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (nav == 1) return;
                changeNav(1);
            }}>
                <Entypo name='home' size={35} color={nav == 1 || nav == 5 ? '#2846c4' : '#848484'} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (nav == 2) return;
                changeNav(2);
            }}>
                <AntDesign name='heart' size={35} color={nav == 2 ? '#2846c4' : '#848484'} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (nav == 3) return;
                changeNav(3);
            }}>
                <FontAwesome5 name='calendar-alt' size={35} color={nav == 3? '#2846c4' : '#848484'} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={.7} onPress={() => {
                if (nav == 4) return;
                changeNav(4);
            }}>
                <FontAwesome5 name='user-circle' size={35} color={nav == 4 ? '#2846c4' : '#848484'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        top: Dimensions.get('window').height*.83,
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