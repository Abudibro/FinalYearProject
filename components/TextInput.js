import { useState } from 'react';
import { View, Dimensions, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from './Header'
import constants from '../global';

export default function TextInputBox(props) {
    const [isFocusOn, toggleFocus] = useState(false);
    const height = props.height ? props.height : 57

  return (
    <View style={{margin: props.margin && props.margin, marginTop: props.marginT && props.marginT, marginBottom: props.marginB && props.marginB}}>
			<View style={{paddingLeft: 19}}>
					{
							!props.noLabel &&
							<Header size={15} marginV={10} weight='600'>{props.label}</Header>
					}
			</View>
			<View 
			style={[{
					margin: 5,
					borderColor: !isFocusOn ? "#181818" : "#2846c4",
					borderWidth: isFocusOn || props.icon ? 2 : 0,
					width: constants.width,
					borderRadius: 13,
					flexDirection: 'row',
					backgroundColor: "#181818",
					alignItems: 'center'
				}, props.styles]}
			> 
        {
					props.prefix &&
					<Text style={{
							color: "#848484",
							fontSize: 16,
							paddingLeft: !isFocusOn ? 15 : 13
					}}>
							{props.prefix}
					</Text>
        }
				<TextInput
						style={[{
								backgroundColor: "#181818",
								borderRadius: 13,
								height: isFocusOn || props.icon ? height-4 : height,
								paddingLeft: props.prefix ? 14 : isFocusOn || props.icon ? 12 : 14,
								color: "#848484",
								fontSize: 16,
								width: props.prefix && isFocusOn ? constants.width-36 : props.prefix ? constants.width-40 : isFocusOn ? constants.width-4 : constants.width,
								paddingTop: 0,
								paddingBottom: 0
						}, props.styles]}
						// multiline={true}
						keyboardType={props.int && 'numeric'}
						defaultValue={props.initialValue ? props.initialValue : null}
						autoFocus={props.autoFocus}
						onFocus={() => toggleFocus(true)}
						onBlur={() => toggleFocus(false)}
						placeholder={props.placeholder}
						placeholderTextColor='#848484'
						onChangeText={text => props.onChange(text)}
						secureTextEntry={props.showPassword}
				>  
				</TextInput>
				{
						props.icon != null ?
								props.icon(25, props.iconColor, styles.icon, props.toggleHidePassword)
						: null
				}
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        left: (Dimensions.get('window').width * 0.85) - 36,
        opacity: .7
    }, 
    prefix: {
        color: "#848484",
        fontSize: 16,
        paddingLeft: 15
    }
});