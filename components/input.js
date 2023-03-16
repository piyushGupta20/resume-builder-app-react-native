import { View, Text,StyleSheet,TextInput,useState,ScrollView,Keyboard, Alert } from 'react-native'
import React from 'react'
// import inputBoxes from './inputFields'

const inputBoxes=[
    {
        id:1,
        placeholder:"Enter your Name",
        Label:"Name"
    },
    {
        id:2,
        placeholder:"Enter your Contact number",
        Label:"Contact No.",
        type:"numeric"
    },
    {
        id:3,
        placeholder:"Enter your Email Id",
        Label:"Email Id"
    },
    {
        id:4,
        placeholder:"Enter your Address",
        Label:"Address"
    },
    {
        id:5,
        placeholder:"Enter your LiknedIn Id",
        Label:"LinkedIn Id"
    },
    {
        id:6,
        placeholder:"Enter your Objective",
        Label:"Objective"
    },
    {
        id:7,
        Label:"Enter your Technical Skills",
        placeholder:"Ex: abc, def, ghi",
        // multiline:""
    },
    {
        id:8,
        Label:"Enter your Non-Technical Skills",
        placeholder:"Ex: abc, def, ghi",
        // multiline:""
    },
    {
        id:9,
        Label:"Enter your Qualification",
        placeholder:"Ex: abc, def, ghi",
        // multiline:"",
        // lines:'{10}',
        // textAlignVertical:'top',
    },
    {
        id:10,
        Label:"Enter your Work Experience",
        placeholder:"Ex: abc, def, ghi",
        multiline:""
    },
    {
        id:11,
        Label:"Enter you Projects",
        placeholder:"Ex: abc, def, ghi",
        // multiline:""
    },
    {
        id:12,
        Label:"Miscelleneous Activities",
        placeholder:"Ex: abc, def, ghi",
        // multiline:""
    },
    {
        id:13,
        Label:"Your Extra Curricular Activities",
        placeholder:"Ex: abc, def, ghi",
        // multiline:""
    },
    {
        id:14,
        Label:"Enter your Hobbies",
        placeholder:"abc, def, ghi",
        multiline:""
    },
    {
        id:15,
        placeholder:"Enter your Reference Name",
        Label:"Reference Name"
    },
    {
        id:16,
        placeholder:"Enter you Reference Contact No.",
        Label:"Reference Contact No."
    }

];

const Input = () => {
    
  return (
    <View> 
        {inputBoxes.map((curElem)=>{
            return(
                <ScrollView key={curElem.id}>
                    <Text style={styles.inputText}>{curElem.Label}</Text>
                <TextInput
                    style={styles.input}
                    multiline
                    numberOfLines={10}
                    placeholder={curElem.placeholder}
                    keyboardType={curElem.type}
                    
                />
                </ScrollView>
      )
    })}
    </View>
      
  )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        marginHorizontal: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:7,
        borderColor:"#954EF8"
        
      },
      inputText:{
          marginTop:10,
          marginBottom:3,
          marginHorizontal:12,
          fontWeight: "bold",
      }
});


export default Input