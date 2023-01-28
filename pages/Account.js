import Header from "../components/Header";
import { StyleSheet, Dimensions, View, Text, TextInput, ScrollView } from "react-native";
export default function Account() {
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#0d0d0d'}}> 
            <View style={styles.container}>
                <Header>wuss</Header>
            </View>
        </ScrollView>
    )
} 

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#0d0d0d',
      alignItems: 'center',
      justifyContent: 'center',
    }
})