import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity,Image,Dimensions  } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import ResultsDetail from './component/resultDetails';
import moment from 'moment';
//npm install --save moment


const TopAnime = (props) => {


    // if(!props.result.length){
    //     return null;
    // }

    //console.log(props.data)
    //console.log('TOp');
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Search Results</Text>
        <FlatList
           
            //horizontal
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            data={props.data}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity>
                        {/* <ResultsDetail result={item}/> */}
                        <View  style={styles.data}>
                            <Image style={styles.image} source={{ uri:item.image_url}}/>
                            <Text style={styles.name}>{item.title}</Text>
                            <Text style={styles.name1}>Release Date: {moment(item.start_date).format('MMM DD, YYYY')}</Text>
                        </View>
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
        // marginBottom:30,
        // borderBottomColor:'#F0EADE',
        // paddingBottom:10,
        // borderBottomWidth:3,
       
    },
    data:{
        marginLeft:15,
        marginRight:15,
        marginTop:10,

    },
    image:{
        width: Dimensions.get('window').width-30,
        height:100,
        borderRadius:4,
        marginBottom:6
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:5
    }
});

export default withNavigation(TopAnime);