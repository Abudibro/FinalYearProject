import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import img from '../resources/bike.jpg'

export default function HomeProductCard(props) {

    return (
        <TouchableOpacity style={styles.wrapper} activeOpacity={.8}>
            <Image style={styles.img} source={{uri: 'https://bikebiz.com/wp-content/uploads/West-Midlands-cycle-hire-scheme-launches-in-Sutton-Coldfield.jpg'}} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        width: 130,
        height: 130,
        borderRadius: 15,
        marginTop: 40,
        marginLeft: 7,
        marginRight:7,
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'orange',
        position: 'relative',
    },
    img: {
        width: 130,
        height: undefined,
        aspectRatio: 1
    }
});