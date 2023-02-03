import React, { useRef, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import tick from '../assets/tick.json'

export default function Tick({ onTickFinish }) {
	const tickAnimation = useRef(null);

	useEffect(() => {
		if (tickAnimation.current) {
			setTimeout(() => {
				tickAnimation.current?.reset();
				tickAnimation.current?.play();
			}, 100);
		}
	}, [tickAnimation.current]);

  return (
    <View style={styles.animationContainer}>
			<LottieView
				ref={tickAnimation}
				loop={false}
				style={{
					width: 80,
					height: 80,
					backgroundColor: '#0d0d0d',
				}}
				source={tick}
				speed={.7}
				renderMode={"SOFTWARE"}
				onAnimationFinish={onTickFinish}
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