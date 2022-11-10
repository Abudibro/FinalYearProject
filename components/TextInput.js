import { useState } from 'react';
import { View, Dimensions, TextInput } from 'react-native';
import Header from './Header'

export default function TextInputBox(props) {
    const [isFocusOn, toggleFocus] = useState(false);
    const width = (Dimensions.get('window').width * 0.85) + 4

  return (
    <View style={{margin: props.margin ? props.margin : 0}}>
        {
            !props.noLabel &&
            <Header size={15} margin={12} weight='600'>{props.label}</Header>
        }
        <View style={{
            margin: 5,
            borderColor: "#2846c4",
            borderWidth: isFocusOn ? 2 : 0,
            width: width,
            borderRadius: 13,
        }}>
            <TextInput
                style={{
                    backgroundColor: "#181818",
                    borderRadius: 13,
                    height: isFocusOn ? 53 : 57,
                    padding: isFocusOn ? 12 : 14,
                    color: "#848484",
                    fontSize: 16,
                    width: isFocusOn ? width - 4 : width
                }}
                onFocus={() => toggleFocus(true)}
                onBlur={() => toggleFocus(false)}
                placeholder={props.placeholder}
                placeholderTextColor='#848484'
                onChangeText={text => props.onChange(text)}
            >  
            </TextInput>
        </View>
    </View>
  );
}