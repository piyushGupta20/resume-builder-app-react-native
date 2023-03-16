import React from 'react';
import {View ,Text,Button,Alert,StyleSheet,TouchableOpacity} from 'react-native';
import Form from 'D:/_VScode/Expo/New folder/my-app/components/Form'

const InputScreen = () => (
  <View>
    <Form/>
     
  </View>
)


const styles = StyleSheet.create({
  textstyle:{
    fontSize: 20,
fontWeight: "bold"
},
  scrollView: {
      height:420,
    },
  textstyle:{
      fontSize: 20,
  fontWeight: "bold"
  },
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
    addButton:{
      fontSize:20,
      borderColor:"black",
      borderRadius:50,
      borderWidth:2

    }
});


export default InputScreen;