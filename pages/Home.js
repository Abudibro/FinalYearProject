import { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import ButtonCustom from '../components/Button';
import Header from '../components/Header'
import TextInputBox from '../components/TextInput'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeProductCard from '../components/HomeProductCard';
import SearchSuggestion from '../components/SearchSuggestion';
import TitleSection from '../components/TitleSection'

const width = (Dimensions.get('window').width * 0.85) + 4;

export default function Home({ navigation }) {

    const SearchIcon = (size, color, style) => {return (
        <TouchableOpacity style={style} onPress={() => navigation.navigate('view-listing')}>
          <MaterialCommunityIcons name={"arrow-right-circle"} size={size} color={color} />
        </TouchableOpacity>
    )}

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
		const [recentlyViewed, setRecentlyViewed] = useState([
			{
				id: 213,
				sellerID: 13,
				image: 'file:///var/mobile/Containers/Data/Application/099A6AD5-697F-449A-B22A-505B1A826615/Library/Caches/ExponentExperienceData/%2540anonymous%252FFinalYearProject-d4a926bf-56ee-4a53-b828-de92aaf5df39/ImagePicker/70F0267A-13AC-4945-96AC-356337626FF7.jpg',
			}
		])
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]); // send this to the search result page. this is pulled from the database, and recommendations for search are taken from this

		const renderRecentlyViewed = () => {
			return (
				recentlyViewed.map((item, i) => {
					return (
						<HomeProductCard image={item.image} key={i} onPress={() => navigation.navigate('view-listing', {id: item.id, ownListing: user.id === item.sellerID })}/>
					)
				})
			)
		}

		const renderYourListings = () => {
			return (
				recentlyViewed.map((item, i) => {
					return (
						<HomeProductCard image={item.image} key={i} onPress={() => navigation.navigate('view-listing', {id: item.id, ownListing: true })}/>
					)
				})
			)
		}

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}}>
            <View style={styles.container}> 
            {
              search.length == 0 &&
							<TitleSection>
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
                        onClick={() => {navigation.navigate('new-listing')}}
                    >
                        New{"\n"}
                        Listing
                    </ButtonCustom>
                </View>
							</TitleSection>
            }
            <View style={styles.searchSection}>
							<TextInputBox
							placeholder="I want to buy..."
							margin={3}
							noLabel
							onChange={setSearch}
							icon={search.length > 0 ? SearchIcon : null}
							iconColor="#2846c4"
                />
            </View>
            {
							search.length == 0 &&
							<View style={styles.cardSectionWrapper}>
									<View style={styles.cardSection}>
											<Header size={23} >You recently viewed</Header>
											<ScrollView horizontal={true}>
													{renderRecentlyViewed()}
											</ScrollView>
									</View>

									<View style={styles.cardSection}>
											<Header size={23} >Your listed items</Header>
											<ScrollView horizontal={true}>
												{renderYourListings()}
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
			</ScrollView>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: width,
		// marginVertical: 30
  },
  searchSection: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchResults: {
		marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  cardSectionWrapper: {
		marginTop: 10,
    width: '100%', alignItems: 'center'
  },
  cardSection: {
		marginTop: 20,
    width: '100%', alignItems: 'center'
  }
});