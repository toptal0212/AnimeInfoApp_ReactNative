import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,TouchableOpacity,Image,Dimensions  } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import ResultsDetail from './component/resultDetails';
import moment from 'moment';
//npm install --save moment


const SearchResult = (props) => {

    const data = props.navigation.getParam('data');
    const serachName = props.navigation.getParam('search');
    const type = props.navigation.getParam('type');
    // if(!props.result.length){
    //     return null;
    // }

    //console.log(props.data)
    //console.log('TOp');
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Search Results '{serachName}'</Text>
        <FlatList
           
            //horizontal
            numColumns={3}
            showsHorizontalScrollIndicator={false}
            //data={props.data}
            data={data}
            renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Details',{id : item.mal_id,type:type})}>
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

export default SearchResult;