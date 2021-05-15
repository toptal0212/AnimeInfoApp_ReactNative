import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import ResultsDetail from './resultDetails';
const TopAnime = (props) => {


    return (
    <View style={styles.container}>
        <Text style={styles.title}>Top Anime</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity>
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
        borderBottomColor:'#F0EADE',
        paddingBottom:10,
        borderBottomWidth:3,
    },
});

export default withNavigation(TopAnime);