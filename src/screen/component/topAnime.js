import React from 'react';
import { View, Text, StyleSheet,FlatList,TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation'; 
import ResultsDetail from './resultDetails';
import { AntDesign } from '@expo/vector-icons'; 
import Loading  from './loading';


const TopAnime = (props) => {


    return (
    <View style={styles.container}>
        <Text style={styles.title}>Top {props.type=='anime'?'Anime':'Manga'}</Text>

  

        {props.data!=''?
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={[...props.data,{type:'nextBtn',mal_id:'nextBtn'}]}
            //keyExtractor={(r) => r.mal_id}
            renderItem={({item}) =>{
                return (

                    <TouchableOpacity onPress={()=>props.navigation.navigate('Details',{id : item.mal_id,type:props.type})}>
                        {item.type!='nextBtn'?
                        <ResultsDetail result={item}/>:
                        <TouchableOpacity onPress={props.nextPage}><AntDesign style={styles.nextBtn} name="rightcircleo" color="black" /></TouchableOpacity>}
                    </TouchableOpacity>

                )
            }}
        />: <Loading/>}

{/* <TouchableOpacity onPress={props.nextPage}><AntDesign name="rightcircleo" size={34} color="black" /></TouchableOpacity>
        <TouchableOpacity onPress={props.pageZero}><Text> F</Text></TouchableOpacity> */}
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
    nextBtn:{
        fontSize:48,
        padding: 15,
        marginTop:50
    }
});

export default withNavigation(TopAnime);