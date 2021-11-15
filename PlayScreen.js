import { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
var newX = 0
var newY = 0
export default class HomeScreen extends Component{
    render(){
        return(
        <View>
           <Text> Play Screen </Text>
           <Image source="assets/DisabledPerson.png" style={{width:50, height:75}}/>
            <Image source="assets/Bedroom.png" style={styles.brContainer}/>
            <Image source="assets/Bedroom.png" style={styles.BrContainer}/>
           </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        position: "absolute",
        top:0,
        bottom:0,
        left:0,
        right:0 
    },
    brContainer:{
        position: "absolute",
        top:10,
        bottom:2,
        left:10,
        right:0 
    },
    BrContainer:{
        position: "absolute",
        top:400,
        bottom:0,
        left:0,
        right:100 
    },
    srContainer:{
        position: "absolute",
        top:10,
        bottom:10,
        left:0,
        right:100 
    }
})
