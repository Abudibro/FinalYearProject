import { useState } from 'react';
import { View, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
            borderWidth: isFocusOn || props.icon ? 2 : 0,
            width: width,
            borderRadius: 13,
            flexDirection: 'row',
            backgroundColor: "#181818",
            alignItems: 'center'
        }}>
            <TextInput
                style={{
                    backgroundColor: "#181818",
                    borderRadius: 13,
                    height: isFocusOn || props.icon ? 53 : 57,
                    padding: isFocusOn || props.icon ? 12 : 14,
                    color: "#848484",
                    fontSize: 16,
                    width: width-25
                }}
                onFocus={() => toggleFocus(true)}
                onBlur={() => toggleFocus(false)}
                placeholder={props.placeholder}
                placeholderTextColor='#848484'
                onChangeText={text => props.onChange(text)}
            >  
            </TextInput>
            {
                props.icon ? <Icon name={props.iconName} size={25} color={props.iconColor} style={{
                    position: 'absolute',
                    left: width - 40
                }}/> : null
            }
        </View>
    </View>
  );
}