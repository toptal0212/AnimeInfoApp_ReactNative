import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import ResultsDetail from './resultDetails';
const TopAnime = (props) => {


    return (
    <View style={styles.container}>
        <Text style={styles.title}>Top {props.type=='anime'?'Anime':'Manga'}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Details',{id : item.mal_id,type:props.type})}>
                        <ResultsDetail result={item}/>
                    </TouchableOpacity>
                )
            }}
        />
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
        borderBottomColor:'black',
        paddingBottom:10,
        borderBottomWidth:3,
    },
});

export default withNavigation(TopAnime);