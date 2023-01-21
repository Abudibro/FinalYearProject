import { useState } from 'react';
import { StyleSheet, Dimensions, View, TouchableWithoutFeedback } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'

export default function ConditionDropdown() {

  const [selected, setSelected] = useState(undefined);
  const [isOpen, setIsOpened] = useState(false);
  
  const data = [
    {key:'new', value:'New'},
    {key:'like-new', value:'Like New'},
    {key:'used', value:'Used'},
  ]

  return(
    <TouchableWithoutFeedback onPress={() => isOpen ? setIsOpened(false) : setIsOpen(true) }>

        <SelectList 
            setSelected={(val) => setSelected(val)} 
            data={data}
            save="key"
            dropdownShown={isOpen}
            onSelect={() => setIsOpened(false)} 
            label="Select a condition"
            search={false}
            dropdownTextStyles={styles.text}
            dropdownItemStyles={styles.textBox}
            boxStyles={{
                width: (Dimensions.get('window').width * 0.85) + 4,
                height: 57,
                backgroundColor: "#181818",
                margin: 5,
                borderColor: !isOpen ? "#181818" : "#2846c4",
                borderWidth: isOpen ? 2 : 0,
                borderRadius: 13,
                // flexDirection: 'row',
                backgroundColor: "#181818",
                alignItems: 'center'
            }}
        />
    </TouchableWithoutFeedback>
  )

};

const styles = StyleSheet.create({
    // box: ,
    textBox: {
        width: '100%',
        backgroundColor: "#181818"
    },
    text: {
        color: "#848484",
        fontSize: 16,
    }
});