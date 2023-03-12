import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import Header from "../components/Header";
import TitleSection from "../components/TitleSection";
import Loading from '../components/Loading'
import { TouchableOpacity } from "react-native-gesture-handler";
import constants from "../global";

export default function UpcomingMeetups({navigation}) {
	const [meetups, setMeetups] = useState([
		constants.MOCK_LISTING, constants.MOCK_LISTING, constants.MOCK_LISTING, constants.MOCK_LISTING, constants.MOCK_LISTING, 
	]);

	useEffect(() => {

	}, []);

	const renderMeetups = () => {
		return (
			<ScrollView  bounces={false} contentContainerStyle={{alignItems: 'center', justifyContent: 'center'}} style={{flex: 1, marginBottom: constants.MARGIN_BOTTOM}} >
				{
					meetups == null ? <Loading /> :
					meetups.length == 0 ? 
					<Header
						center
						size={23}
						color={'#2e2e2e'}
						width={constants.width}
					>
						You don't have any upcoming meet-ups
					</Header>:
					meetups.map((meetup, i) => {
						return <MeetUp key={i} meetup={meetup} />
					})
				}
			</ScrollView>
		)
	}

	const MeetUp = meetup => {
		const {img, title, price, listingId} = meetup.meetup;

		return (
			<TouchableOpacity activeOpacity={.8} style={styles.meetUpContainer}
				onPress={() => navigation.navigate('view-listing-router', {listingId, userOwnsListing: false})} >
				<View style={styles.imgWrapper}>
					<Image source={'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.thetimes.co.uk%2Farticle%2Fboris-bikes-don-t-improve-health-or-reduce-pollution-nhmrv920k&psig=AOvVaw3Jrz-4X2n4jfho04T3sTXI&ust=1678642712674000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDxxMa11P0CFQAAAAAdAAAAABAE'} style={styles.img}/>
				</View>
				<View style={{flexDirection: 'column', marginLeft: 10}}>
					<Header weight={'400'} color='#f1f1f1' size={17} numOfLines={1}>{title}</Header>
					<Header weight={'800'} color='#f1f1f1' size={20} marginT={3} numOfLines={1}>£{price}</Header>
				</View>
				
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container} >
			<TitleSection jC ={'center'}>
				<Header width={constants.width} center size={28} >My upcoming meet-ups</Header>
			</TitleSection>

			{renderMeetups()}

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0d0d0d',
		alignItems: 'center',
		justifyContent: 'center'
	},
	meetUpContainer: {
		width: constants.width,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		backgroundColor: '#181818',
		margin: 7,
		paddingVertical: 7,
		borderRadius: 7
	},
	imgWrapper: {
		width: 60,
		height: 60,
		borderRadius: 5,
		marginLeft: 7,
		overflow: 'hidden',
		alignItems: 'center',
		position: 'relative',
	},
	img: {
		width: 60,
		height: undefined,
		aspectRatio: 1,
		backgroundColor: '#f1f1f1'
	}
})