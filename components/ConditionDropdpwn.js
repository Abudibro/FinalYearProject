import { useState } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Header from './Header';


export default function ConditionDropdown(props) {

  const [isFocus, setIsFocus] = useState(false);

  const styles = StyleSheet.create({
    
    box: {
      width: (Dimensions.get('window').width * 0.85) + 4,
      height: 57,
      backgroundColor: "#181818",
      paddingRight: !isFocus ? 9 : 7,
      margin: 5,
      borderRadius: 13,
      borderColor: !isFocus ? "#181818" : "#2846c4",
      borderWidth: isFocus ? 2 : 0,
      backgroundColor: "#181818",
      alignItems: 'center',
      position: 'relative'
    },
    dropdownContainer: {
      marginTop: 8,
      backgroundColor: "#181818",
      borderRadius: 13,
      borderWidth:  0,
      shadowOffset: {width: -2, height: 4},  
      shadowColor: '#000',  
      shadowOpacity: 0.3,  
      shadowRadius: 3, 
    },
    textBox: {
        width: '100%',
        backgroundColor: "#181818",
        color: "#848484",
        borderRadius: 11
    },
    text: {
        color: "#848484",
        fontSize: 16,
        paddingLeft: !isFocus ? 15 : 13
    },
});
  
  const data = [
    {value:'new', label:'New'},
    {value:'like-new', label:'Like New'},
    {value:'used', label:'Used'},
  ]

  return (
    <View >
      <Header paddingLeft={19} size={15} margin={17} weight='600'>Condition</Header>
      <Dropdown
        style={styles.box}
        placeholderStyle={styles.text}
        selectedTextStyle={styles.text}
        itemContainerStyle={styles.textBox}
        itemTextStyle={{color: "#848484", fontSize: 16}}
        activeColor='#1f1f1f'
        containerStyle={styles.dropdownContainer}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={props.condition === null ? 'Select a condition' : props.condition}
        value={props.condition}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          props.setCondition(item.value);
          setIsFocus(false);
        }}
      />
    </View>
  );

};

