import { useState } from 'react';
import { View, Dimensions, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from './Header'

export default function Description(props) {
    const [isFocusOn, toggleFocus] = useState(false);
    const width = (Dimensions.get('window').width * 0.85) + 4
    const height = 250

    const styles = StyleSheet.create({ 
        text: {
            backgroundColor: "#181818",
            borderRadius: 13,
            borderColor: null,
            minHeight: isFocusOn ? height-4 : height,
            padding: isFocusOn ? 12 : 14,
            color: "#848484",
            fontSize: 16,
            width: isFocusOn ? width-4 : width,
            paddingTop: isFocusOn ? 14 : 16,
        },
        borderView: {
            margin: 5,
            borderColor: !isFocusOn ? "#181818" : "#2846c4",
            borderWidth: isFocusOn ? 2 : 0,
            width: width,
            borderRadius: 13,
            flexDirection: 'row',
            backgroundColor: "#181818",
            alignItems: 'center'
        }
    });

    return (
    <View style={{marginTop: 20}}>
        <Header paddingLeft={19} size={15} marginV={10} weight='600'>{props.label}</Header>
        <View style={styles.borderView}> 
					<TextInput
							style={styles.text}
							multiline={true}
							autoFocus={props.autoFocus}
							onFocus={() => toggleFocus(true)}
							onBlur={() => toggleFocus(false)}
							placeholder={props.placeholder}
							placeholderTextColor='#848484'
							onChangeText={text => props.onChange(text)}
							defaultValue={props.initialValue ? props.initialValue : null}
					>  
					</TextInput>
        </View>
    </View>
  );
}

