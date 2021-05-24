import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';



const ResultsDetail = (props) => {

  // console.log(props);
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={{ uri:props.result.image_url}}/>
        <Text style={styles.name}>{props.result.title}</Text>
        <Text style={styles.name1}>Rating: {props.result.score==null?'NaN':props.result.score}</Text>
        {/* <Text style={styles.name1}>Epasords: {props.result.episodes}</Text> */}
    </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        marginTop:10,
        width:110,
    },
    image:{
        width:100,
        height:160,
        borderRadius:4,
        marginBottom:6
    },
    name:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom:5
    }
});

export default ResultsDetail;