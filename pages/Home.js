import { useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Home({navigation}) {
    const [user, setUser] = useState({
        id:15,
        username: "Hijazi",
        email: "Hijazi@gmail.com",
        searches: ["Bike", "PS5", "Keyboard"],
        viewed: [121232, 23144, 21443],
        listings: [2132434, 546565, 123345],
        meetups: [43254356
        // {
        //     id: 213444,
        //     buyer_id: 214456577,
        //     seller_id: 3256666,
        //     listing_id: 32432555,
        //     location: 233124532,
        //     time: ["10/10/2035","18:30"],
        //     price: 75
        // }
        ],
        transactions: [2423534, 43232543, 43264565467]
    }); 

    return (
        <View style={styles.container}> 
            <View style={styles.topSection}> 
                <View> 
                    <Header size={50} margin={0}>Hello,</Header>
                    <Header size={30} margin={0} weight={"500"}>{user.username}</Header>
                </View>
                <ButtonCustom height={86} width={140} weight={"700"} size={15} icon={<FontAwesome name='plus' size={25} style={{color: '#f1f1f1'}} />}>
                    New Listing
                </ButtonCustom>
            </View>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 4}}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    width: "100%"
  }
});