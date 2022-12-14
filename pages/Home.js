import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeProductCard from '../components/HomeProductCard';
import SearchSuggestion from '../components/SearchSuggestion';

const width = (Dimensions.get('window').width * 0.85) + 4;

export default function Home({navigation, changeNav}) {

    const [user, setUser] = useState({
        id:15,
        username: "Shaam9",
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
    const [search, setSearch] = useState('');

    return (
        <View style={search.length > 0 ? styles.containerSearching : styles.container}> 
            {
                search.length == 0 &&
                <View style={styles.topSection}> 
                    <View> 
                        <Header size={50} margin={0}>Hello,</Header>
                        <Header size={30} margin={0} weight={"500"}>{user.username}</Header>
                    </View>
                    <ButtonCustom
                        static
                        height={72}
                        width={130}
                        weight={"700"}
                        size={15}
                        borderRadius={20}
                        icon={<FontAwesome name='plus' size={30} style={{color: '#f1f1f1'}}/>}
                        onClick={() => {changeNav(5)}}
                    >
                        New{"\n"}
                        Listing
                    </ButtonCustom>
                </View>
            }
            <View style={styles.searchSection}>
                <TextInputBox placeholder="Help me find..." margin={3} noLabel onChange={setSearch} />
            </View>
            {
                search.length == 0 &&
                <View style={styles.cardSectionWrapper}>
                    <View style={styles.cardSection}>
                        <Header size={23} >You recently viewed</Header>
                        <ScrollView horizontal={true}>
                            <HomeProductCard />
                            <HomeProductCard />
                            <HomeProductCard />
                            <HomeProductCard />
                            <HomeProductCard />
                        </ScrollView>
                    </View>

                    <View style={styles.cardSection}>
                        <Header size={23} >Your listed items</Header>
                        <ScrollView horizontal={true}>
                            <HomeProductCard />
                            <HomeProductCard />
                            <HomeProductCard />
                            <HomeProductCard />
                            <HomeProductCard />
                        </ScrollView>
                    </View>

                </View>
            }
            {
                search.length > 0 &&
                <View style={styles.searchResults} >
                    <SearchSuggestion suggestionName={'Bike'} />
                    <SearchSuggestion suggestionName={'Bikini'} />
                    <SearchSuggestion suggestionName={'Bike Lock'} />
                    <SearchSuggestion suggestionName={'Bike Shed'} />
                </View>
            }
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
  containerSearching: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  topSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width
  },
  searchSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchResults: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cardSectionWrapper: {
    flex: 4, width: '100%', alignItems: 'center'
  },
  cardSection: {
    flex: 1, width: '100%', alignItems: 'center'
  }
});