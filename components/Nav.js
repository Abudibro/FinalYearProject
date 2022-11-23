import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default Nav = () => {
    return (
        <View> //padding, border borderRadius ONLY MOVE SEARCH WHEN SEARCH.LENGTH > 0
            <Entypo icon='home' size={15} color='#FFF' />
            <AntDesign icon='heart' size={15} color='#FFF' />
            <FontAwesome5 icon='calendar-alt' size={15} color='#FFF' />
            <FontAwesome5 icon='user-circle' size={15} color='#FFF' />
        </View>
    )
}