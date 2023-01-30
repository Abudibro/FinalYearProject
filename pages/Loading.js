import React, { useRef, useEffect, useState } from 'react';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Lottie from 'lottie-react-native';
import loading from '../assets/99274-loading.json';
import tick from '../assets/tick.json'

export default function Loading() {
	const [isLoading, setIsLoading] = useState(true)

  const loadingAnimation = useRef(null);
	const tickAnimation = useRef(null);

	console.log(isLoading);

	useEffect(() => {
    // You can control the ref programmatically, rather than using autoPlay
    loadingAnimation.current?.play(15, 47);
  }, []);

	useEffect(() => {
		loadingAnimation.current?.play(15, 47)
		!isLoading && loadingAnimation.current?.pause();
		tickAnimation.current?.play();
	}, [isLoading]);

  return (
    <View style={styles.animationContainer}>
			{	isLoading ?
				<LottieView
				autoPlay
				ref={loadingAnimation}
				style={{
					width: 150,
					height: 150,
					backgroundColor: '#0d0d0d',
					marginBottom: 35
				}}
				source={loading}
			/>
			:
			<LottieView
				loop={false}
				ref={tickAnimation}
				style={{
					width: 90,
					height: 90,
					backgroundColor: '#0d0d0d',
				}}
				speed={.7}
				source={tick}
			/>
			}
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