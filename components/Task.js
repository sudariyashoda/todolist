import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Image } from 'react-native';

const Task =(props)=>{
    return(
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style ={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
           
            <View style={styles.circular}></View>
          
        </View>
    )
}

const styles =StyleSheet.create({
    items:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    square:{
        width:20,
        height:20,
        marginRight:25,
        borderColor:'black',
        borderWidth:2,
        opacity:0.4
    },
    itemText:{
        maxWidth:"90%",
        fontSize:20,
    },
    circular:{
        width:10,
        height:10,
        borderColor:'#800000',
        borderWidth:2,
        borderRadius:5,
        
    },
});
export default Task;