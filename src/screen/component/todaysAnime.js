import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import ResultsDetail from './resultDetails';
const TopAnime = (props) => {


    // if(!props.result.length){
    //     return null;
    // }

    //console.log(props.data)
    //console.log('TOp');
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Top Manga</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.data.top}
            renderItem={({item}) =>{
                //item is defult of renderItem
                //console.log(item,'top')
                //console.log('toppp')
                return (
                    // <TouchableOpacity onPress={()=>props.navigation.navigate('Result' ,{id : item.id})}>
                    <TouchableOpacity>
                        {/* props.navigation.navigate(sceenName , value that want to pass) */}
                        {/* For props.navigation have to import 'withNavigation' */}
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )

            }}
        />
        {/* <Text>{props.data.top[0].title}</Text> */}
    </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:15,
        borderBottomColor:'#F0EADE',
        paddingBottom:10,
        borderBottomWidth:3,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        
        // elevation: 5,
        
    },
});

export default withNavigation(TopAnime);