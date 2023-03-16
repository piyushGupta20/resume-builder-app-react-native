import { StyleSheet, Text, View ,TouchableOpacity ,Alert, TextInput} from 'react-native'
import React from 'react'

const AddButton = ({text,func}) => {
  return (
    <View>
        <TouchableOpacity 
        style={styles.appButtonContainer}>
          onPress={func}
            <Text style={styles.appButtonText}>{text} </Text>
      </TouchableOpacity> 
    </View>

        
  )
}

export default AddButton

const styles = StyleSheet.create({
  appButtonContainer: {
    // elevation: 8,
    backgroundColor: "#954EF8",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 12
    marginHorizontal:10,
    marginVertical:10
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

})