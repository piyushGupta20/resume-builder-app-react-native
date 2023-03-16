import React from 'react';
import {View ,Text,Button,Alert,StyleSheet,TouchableOpacity,Image} from 'react-native';
// import Profile data-bro.svg from ".."



const HomeScreens = ({navigation}) => (
  
  
    <View style={styles.container}>

      {/* header */}
    
    <View>
    {/* <Text style={styles.appHeadText}>Build Your</Text>
    <Text style={styles.appHeadMainText}>CAREER</Text>*/}
    
    <Image
  source={{ uri: 'https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-3319.jpg?w=740&t=st=1665917658~exp=1665918258~hmac=39e85b37271cd4a6a8b605cb30ef2e7f2e50cc82e36a0a52bffe99c0aa5ad069' }}
  style={{ width: 300, height: 300,alignSelf:"center" }}
/>
    </View>
    <View style={styles.appText} >
    <Text style={styles.appHeadText}>Build Your </Text>
    <Text style={styles.appHeadMainText}>RESUME</Text> 
    </View>
    <TouchableOpacity 
        style={styles.appButtonContainer}
         onPress={()=>navigation.navigate("Details")}>
            <Text style={styles.appButtonText}>boost your career </Text>
      </TouchableOpacity> 
  </View>
)
//  function HomeScreens() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen is good</Text>
//       </View>
//     );
//   }

const styles=StyleSheet.create({
  
  textstyle:{
    fontSize: 20,
    fontWeight: "bold"
},
container:{
  // marginVertical:50
  backgroundColor: '#FFFFFF',
  flex:1,
  justifyContent:'space-between',
},
appText:{
  marginTop:5
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
appHeadText: {
  fontSize: 35,
  marginTop:5,
  color: "#aaa",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
},
appHeadMainText: {
  fontSize: 50,
  color: "#954EF8",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
}
})
export default HomeScreens;