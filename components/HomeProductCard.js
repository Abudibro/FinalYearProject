import { StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeProductCard(props) {

    return (
        <TouchableOpacity style={styles.wrapper}>
            {/* <Image style={styles.wrapper} source={require('./.png')} /> */}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        width: 130,
        height: 130,
        borderRadius: 15,
        opacity:.8,
        backgroundColor: '#FFF',
        marginTop: 40,
        marginLeft: 7,
        marginRight:7
    }
});