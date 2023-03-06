import React, { useCallback, useState } from "react";
import RangeSlider from "rn-range-slider";
import { View, Text, StyleSheet } from "react-native";


const Label = ({ text }) => (
	<View style={styles.label} >
    <Text style={styles.labelText}>{text}</Text>
  </View>
)
const Rail = () => <View style={styles.rail} />
const RailSelected = () => <View style={styles.railSelected} />
const Thumb = () => <View style={styles.thumb} />

const Slider = ({ }) => {
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(100);

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback((value) => <Label text={value} />, []);

	const handleValueChange = useCallback((min, max) => {
    setMin(min);
    setMax(max);
  }, []);

  return (
		<RangeSlider
			style={{width: '90%', alignSelf: 'center'}}
			min={min}
			max={max}
			step={1}
			disableRange={true}
			renderThumb={renderThumb}
			renderRail={renderRail}
			renderRailSelected={renderRailSelected}
			renderLabel={renderLabel}
			onValueChanged={(min, max) => handleValueChange(min, max)}
		/>
  );
};

const THUMB_RADIUS = 15;

const styles = StyleSheet.create({
	rail: {
    flex: 1,
    height: 8,
    borderRadius: 2,
    backgroundColor: "#f1f1f1"
  },
	railSelected: {
    height: 8,
    backgroundColor: "#2846c4",
    borderRadius: 2
  },
	thumb : {
		width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 1,
    borderColor: "#ffffff",
    backgroundColor: "#2846c4",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.16,
    shadowRadius: 6
	},
	label: {
		alignItems: "center",
    padding: 8,
    backgroundColor: "#2846c4",
    borderRadius: 4
	}, 
	labelText: {
		fontSize: 16,
    color: "#fff"
	}
})



export default RangeSlider;
