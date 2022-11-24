import { StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Header from "./Header";

export default function SearchSuggestion ({suggestionName}) {
    return (
        <TouchableOpacity activeOpacity={.8} style={styles.wrapper}>
            <Header size={18} color='#FFF' weight={'700'} marginH={40}>
                {suggestionName}
            </Header>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: Dimensions.get('window').width,
        height: 60,
        backgroundColor: 'black',
        justifyContent: 'center',
        
    }
});