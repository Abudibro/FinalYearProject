import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'


import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import TextInputBox from '../components/TextInput'


const SearchResult = ({navigation, route}) => {
	const [search, setSearch ] = useState("props.search");
	const [listins, setListing] = useState();
	const {minPrice, maxPrice, selectedLocations, selectedTimes} = route.params;

	useEffect(() => {
		{/* 
		Cases when it should render:
		-	On initial render - Done
		- On search button press - Done
		- On filters change - Done

		Cases when it shouldn't change:
		- On search change - Done
		- When filters dont change 


	*/}


		searchItems();
	}, [route.params]);

	const searchItems = () => {
		setListing([])
		console.log('search')
	}

	const SearchIcon = (size, color, style) => {return (
		<TouchableOpacity style={style} onPress={() => searchItems()}> 
			<MaterialCommunityIcons name={"arrow-right-circle"} size={size} color={color} />
		</TouchableOpacity>
	)}

	const FilterIcon = () => {
		return (
			<TouchableOpacity
				style={styles.icon}
				onPress={() => navigation.navigate('search-filters')}
				activeOpacity={.8}
			>
				<FontAwesome name='sliders' size={34} color={'#2846c4'} />
			</TouchableOpacity>
		)
	}

	return (
		<ScrollView bounces={false} style={styles.container} contentContainerStyle={styles.containerChildren} >
			<View style={styles.searchSection}>
				<TextInputBox
					placeholder="Search for an item"
					margin={3}
					noLabel
					onChange={setSearch}
					icon={search.length > 0 ? SearchIcon : null}
					iconColor="#2846c4"
					initialValue={search}
				/>
			</View>
			{FilterIcon()}
		</ScrollView>
	)
}

const styles  = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
	},
	containerChildren: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	searchSection: {
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: {
		height: 60,
		width: 60,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10, zIndex: 999
	},
	filterClicked: {
		backgroundColor: '#2846c4',
		borderRadius: '50%',
	}
	
})

export default SearchResult;