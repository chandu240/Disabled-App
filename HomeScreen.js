import { Component } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
        <View>
           <Text> Home Screen </Text> 
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('playScreen')}}>
                <Text> Play </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ScoreScreen')}}>
                <Text> Scores </Text>
           </TouchableOpacity>
           <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FOj5bdPgj686S-JKcEDZQUtsMXsPzjWpxFNjpf7aTtBuKPvn0mgiBI81ZW7gv2ZQi80&usqp=CAU'}}/>
        </View>
        )
    }
}