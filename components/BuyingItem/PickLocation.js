import { useState } from "react"
import { View } from "react-native"
import Header from "../Header"
import Map from "../Map"
import TitleSection from "../TitleSection"

function PickLocation({route}) {
    const [selectedLocation, setSelectedLocation]  = useState(null);
    const { selectedLocations } =   route.params;

  return (
    <View>
        <TitleSection>
            <Header size={25} color='#f1f1f1' >Pick your preferred location to meet the seller</Header>
            <Map locations={selectedLocations} selectedLocations={selectedLocation} setSelectedLocations={setSelectedLocation} prevScreen='view-listing' />
            
        </TitleSection>
    </View>
  )
}

export default PickLocation