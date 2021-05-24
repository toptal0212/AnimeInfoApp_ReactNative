import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity,Image,Dimensions  } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import moment from 'moment';
//npm install --save moment
import jiken from '../api/jikan';

const SearchResultGenre = (props) => {

    
    const type = props.navigation.getParam('type');
    const searchTopic = props.navigation.getParam('searchTopic');
    const id = props.navigation.getParam('id');
    const [data,setData]= useState([]);

    const loadDetails =async()=>{
        try {
            const response = await jiken.get('/search/anime?genre='+id+'&genre_exclude=0&order_by=score&sort=desc&type='+type,{});
            setData(response.data);
           // console.log(response.data)
           
        }catch (err){
            console.log(err);
            setErrorMsg('Data Not Found!');
        };
    }

    useEffect(()=>{
        loadDetails();
        },[searchTopic]);

    return (
    <View style={styles.container}>
        <Text style={styles.title}>Search Results '{searchTopic}'</Text>
        <FlatList
            //horizontal
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            
            data={data.results}
            keyExtractor={(r) => r.mal_id}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity 
                    onPress={()=>props.navigation.navigate('Details',{id : item.mal_id,type:'anime'})}>
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
         marginTop:30,
        // borderBottomColor:'#F0EADE',
        // paddingBottom:10,
        // borderBottomWidth:3,
       
    },
    data:{
        marginLeft:15,
        marginRight:15,
        marginTop:10,
        width:(Dimensions.get('window').width/3)-35

    },
    image:{
        // width: Dimensions.get('window').width-30,
        width:100,
        height:170,
        borderRadius:4,
        marginBottom:6
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:5
    }
});

//export default withNavigation(TopAnime);

export default withNavigation(SearchResultGenre);