import {useState} from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'

import TextInputBox from '../components/TextInput'
import ButtonCustom from '../components/Button'
import Map from '../components/Map'
import TimePicker from '../components/TimePicker'
import Header from '../components/Header'

import AntDesign from 'react-native-vector-icons/AntDesign'

import constants from '../global';

function SearchFilters({navigation, route}) {
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(null);
	const [selectedLocations, setSelectedLocations] = useState([])
	const [selectedTimes, setSelectedTimes] = useState(constants.MEETUP_TIMES_GRID
		);
	const { filters } = route.params;

	const isButtonDisabled = () => {
		return (
			minPrice == filters.minPrice &&
			maxPrice == filters.maxPrice &&
			constants.SELECTED_LOCATIONS_ARE_EQUAL(selectedLocations, filters.selectedLocations) &&
			!selectedTimes.some((row, i) => row.some((col, j) => col != filters.selectedTimes[i][j]))
		)
	}

	
	const printArr = arr => {
		arr.map(r => console.log(r))
	}
	printArr(filters.selectedTimes);
	
	const onMinPriceChange = (e) => {
		if (e == '') setMinPrice(0)
		else setMinPrice(parseInt(e))
	}

	const onMaxPriceChange = (e) => {
		if (e == '') setMaxPrice(null)
		else setMaxPrice(parseInt(e))
	}

	return (
		<ScrollView style={styles.modal} contentContainerStyle={{justifyContent: 'space-around', alignItems: 'center'}} bounces={false} >
			<View style={styles.backArrowWrapper}>
				<TouchableOpacity activeOpacity={.8} onPress={() => navigation.goBack()}>
					<AntDesign name='arrowleft' color='#2846c4' size={35}/>
				</TouchableOpacity>
			</View>

			{/* Min Price */}
			<TextInputBox
				label='Min Price'
				placeholder="Enter a min price"
				onChange={onMinPriceChange}
				prefix={'£'}
				int
				initialValue={minPrice}
				marginT={20}
				marginB={10}
			>
				{minPrice}
			</TextInputBox>

			{/* Max Price */}
			<TextInputBox
				label='Max Price'
				placeholder="Enter a max price"
				onChange={onMaxPriceChange}
				prefix={'£'}
				int
				initialValue={maxPrice}
				marginT={10}
				marginB={10}
			>
				{maxPrice}
			</TextInputBox>

			{/* Location Filter */}
			<Map locations={constants.LOCATIONS} selectedLocations={selectedLocations} setSelectedLocations={setSelectedLocations} pickMany label labelText={'Filter meet-up locations'} />

			{/* Time filter */}
			<View style={{width: constants.width, alignItems: 'flex-start'}}>
				<Header paddingLeft={19} marginV={14} marginT={35} size={15} weight='600' >FIlter meet-up times</Header>
			</View>
			<TimePicker times={selectedTimes} setTimes={setSelectedTimes} meetUpTime={false}/>

			<ButtonCustom disabled={isButtonDisabled()} marginBottom={constants.MARGIN_BOTTOM} marginTop={constants.MARGIN_BOTTOM/2} onClick={() => navigation.navigate('search-result', {minPrice, maxPrice, selectedLocations, selectedTimes})} size={16} weight={"600"} >Save and Search</ButtonCustom>

		</ScrollView>
	)
}

const styles = StyleSheet.create({
	modal: {
		flex: 1,
		backgroundColor:'#0d0d0d',
		flexDirection: 'column',
	},
	backArrowWrapper: {
		width: constants.width,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginTop: 25
	}
})

export default SearchFilters
