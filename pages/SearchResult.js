import React, { useState, useCallback } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View, Dimensions, Animated, Easing } from 'react-native'

import TextInputBox from '../components/TextInput'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Scrollable from "react-native-modal";
import Slider from '../components/Slider'

const width = (Dimensions.get('window').width * 0.85) + 4
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height

const SearchResult = (props) => {
	const [search, setSearch ] = useState("props.search");
	const [filtersShown, setFiltersShown] = useState(true);
	const [minPrice, setMinPrice] = useState(0);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(100);
	
	const handleValueChange = useCallback((min, max) => {
    setMin(min);
    setMax(max);
  }, []);

	console.log(filtersShown)

	const SearchIcon = (size, color, style) => {return (
		<TouchableOpacity style={style} onPress={() => navigation.navigate('view-listing')}>
			<MaterialCommunityIcons name={"arrow-right-circle"} size={size} color={color} />
		</TouchableOpacity>
	)}

	const FilterIcon = () => {
		return (
			<TouchableOpacity style={[styles.icon, filtersShown && styles.filterClicked]} onPress={() => {
				setFiltersShown(!filtersShown);
			}} activeOpacity={.8} >
				<FontAwesome name='sliders' size={34} color={!filtersShown ? '#2846c4' : '#181818'} />
			</TouchableOpacity>
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
		},
		filtersWrapper: {
			width: width,
			height: 190,
			backgroundColor: '#181818',
			borderRadius: 13,
			display: !filtersShown && 'none',
			alignItems: 'center'
		},
		modal: {
			height: '50%',
      backgroundColor:'#181818',
			width: deviceWidth,
			borderTopRightRadius: 20,
			borderTopLeftRadius: 20
		}
	})

	const CustomSliderMarkerRight = () => {
		return (
			<View style={{height: 20, width: 20, borderRadius: '50%', backgroundColor:'#FFF'}}>

			</View>
		)
	}

	const CustomSliderMarkerLeft = () => {
		return (
			<View style={{height: 20, width: 20, borderRadius: '50%', backgroundColor:'#FFF'}}>

			</View>
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

			<Scrollable
				isVisible={filtersShown}
				onSwipeComplete={() => setFiltersShown(false)}
				deviceWidth={deviceWidth}
				deviceHeight={deviceHeight}
				backdropOpacity={0.7}
				style={{ justifyContent: 'flex-end', margin: 0}}
				swipeDirection='down'
				animationType="slide"
  			transparent={true}
				onBackdropPress={() => setFiltersShown(false)}
			>
				<View style={styles.modal}>
					<Slider min={min} max={max} handleValueChange={handleValueChange} />
				</View>
			</Scrollable>
		</ScrollView>
	)
}

export default SearchResult;