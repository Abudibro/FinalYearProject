import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import loading from '../assets/loading_ring_medium.json';

export default function Loading() {
  const loadingAnimation = useRef(null);

	useEffect(() => {
		if (loadingAnimation.current) {
			setTimeout(() => {
				loadingAnimation.current?.reset();
				loadingAnimation.current?.play();
			}, 100);
		}
	}, [loadingAnimation.current]);

  return (
    <View style={styles.animationContainer}>
			<LottieView
				ref={loadingAnimation}
				loop={true}
				style={{
					width: 80,
					height: 80,
					backgroundColor: '#0d0d0d',
				}}
				source={loading}
				speed={.7}
				renderMode={"SOFTWARE"}
			/>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
		backgroundColor: '#0d0d0d',
    alignItems: 'center',
    justifyContent: 'center',
  }
});