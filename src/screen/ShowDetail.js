import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity,Image,Dimensions  } from 'react-native';
import { WebView } from 'react-native-webview';
import {withNavigation} from 'react-navigation'; 
import moment from 'moment';
//npm install --save moment
import jiken from '../api/jikan';
import axios from 'axios';

const TopAnime = (props) => {
    const [info,setInfo] = useState('');
    const id = props.navigation.getParam('id');
    const type = props.navigation.getParam('type');
    const [errorMsg, setErrorMsg]= useState('');

    const loadDetails =async()=>{
        try {
            const response = await jiken.get('/'+type+'/'+id,{});
    
            setInfo(response.data);
            console.log(response.data.mal_id);
           
        }catch (err){
            console.log(err);
            setErrorMsg('Data Not Found!');
        };
    }

    useEffect(()=>{
        loadDetails();
        },[]);

    return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>Details</Text>
            <Image style={styles.image} source={{ uri:info.image_url}}/>
            <Text>Name: {info.title}</Text>
            <Text>Japanese Name: {info.title_japanese}</Text>
            <Text>Total Episodes: {info.episodes== null? 'Unknown': info.episodes}</Text>
            <Text>Type: {info.type}</Text>
            <Text>Rating: {info.rating}</Text>
            {/* <Text>Aired: {info.aired.from}</Text> */}
            <Text>Duration: {info.duration}</Text>
            <Text>Score: {info.score}</Text>
            <Text>Rank: {info.rank}</Text>
            <Text>Popularity Rank: {info.popularity}</Text>

            <Text>Synopsis: {info.synopsis}</Text>
            <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{uri: 'https://www.youtube.com/watch?v=hqfUo4MZvZo&ab_channel=LinusTechTips'}}
            />
        </ScrollView>
    </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15
    },
    container:{
         marginTop:30,
         marginLeft:15,
        // borderBottomColor:'#F0EADE',
        // paddingBottom:10,
        borderBottomWidth:3,
       
    },
    data:{
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        width:(Dimensions.get('window').width/3)-35

    },
    image:{
        //width:Dimensions.get('window').width-80,
        width:130,
        height:200,
        borderRadius:4,
        marginBottom:6
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:5
    }
});

export default TopAnime;