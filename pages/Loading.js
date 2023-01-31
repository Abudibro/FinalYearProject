import React, { useRef, useEffect, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View, Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';
import Lottie from 'lottie-react-native';
import loading from '../assets/loading_ring_medium.json';
import tick from '../assets/tick.json'

export default function Loading() {
	const [isLoading, setIsLoading] = useState(true);

  const loadingAnimation = useRef(null);
	const tickAnimation = useRef(null);

	const onLoadingFinished = () => {
		setIsLoading(false);
		tickAnimation.current?.play();
	}

  return (
    <View style={styles.animationContainer}>
			{
				isLoading &&
				<LottieView
					ref={loadingAnimation}
					autoPlay
					loop
					style={{
						width: 80,
						height: 80,
						backgroundColor: '#0d0d0d',
					}}
					source={loading}
					speed={.7}
				/>
			}
			<LottieView
				loop={false}
				ref={tickAnimation}
				style={{
					width: 70,
					height: 70,
					backgroundColor: '#0d0d0d',
					display: isLoading && 'none'
				}}
				speed={.7}
				source={tick}
			/>
			<Button title='press' onPress={() => onLoadingFinished()}>
			</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
		backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    paddingTop: 20,
  },
});