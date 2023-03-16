import { View, Text ,Button,SafeAreaView, TextInput,StyleSheet,onChangeText, ScrollView, TouchableOpacity,Alert}
 from 'react-native'
import React,{useState} from 'react'
import Input from "./input"
import AddButton from './AddButton'


const Form = ({navigation}) => {
    // const [InputFields,afterset]=useState(inputBoxes);
  return (
<ScrollView style={styles.scrollView}>
    <SafeAreaView style={styles.container} >
    <AddButton/>
        <Input/>
        <TouchableOpacity 
        style={styles.appButtonContainer}
         onPress={()=>navigation.navigate("Last")}>
            <Text style={styles.appButtonText}>Press me</Text>
      </TouchableOpacity>
    </SafeAreaView>
</ScrollView>
  )
}

const styles = StyleSheet.create({
    scrollView: {
        height:500,
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

export default Form;