import React,{useState} from 'react';
import { TouchableHighlight,View, Text, StyleSheet,TextInput, Pressable ,Dimensions, Button, Touchable} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//icon are from https://github.com/expo/vector-icons

const SearchScreen = ({term,onTermChnage,onTermSubmit,serachType,toAnime,toManga}) => {

  

    // const setSerachTypeHnadler=(v)=>{
    //     setSerachType(v);
    //     console.log(serachType);
    // }
    var [ isPress, setIsPress ] = React.useState(false);


    console.log(serachType,'serachType');

    return (
        <View>
            <View style={styles.background}>
                <Ionicons name="search-sharp" style={styles.searchIcon}color="black" />
                <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search"
                value={term}
                onChangeText={onTermChnage}
                onEndEditing={onTermSubmit}
                />
            </View>
            <View  style={styles.buttons}> 
                <Pressable 
                    onPress={toAnime.bind()}
                    style={serachType=='anime'? styles.btnAMSelected:styles.btnAM}>
                        <Text style={serachType=='anime'? styles.btnTextSelected: styles.btnText}>Anime</Text>
                </Pressable>
                <Pressable 
                    onPress={toManga.bind()}
                    style={serachType=='manga'? styles.btnAMSelected:styles.btnAM}>
                        <Text style={serachType=='manga'? styles.btnTextSelected: styles.btnText}>Manga</Text>
                </Pressable>
            </View>

        </View>
);
};

const styles = StyleSheet.create({

    background:{
        marginTop:15,
        marginBottom:25,
        backgroundColor:'white',
        borderWidth:2,
        height:50,
        borderRadius:30,
        marginHorizontal:15,
        flexDirection:'row',
    },
    inputStyle:{
        flex:1,
        fontSize:20
    },
    searchIcon:{
        fontSize:35,
        alignSelf:'center',
        marginLeft:8,
        marginRight:3
    },
    buttons:{
        width:100,
        flexDirection:'row',
        marginHorizontal:15,
        
    },
    btnAM:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 4,
        marginLeft:5,
        backgroundColor:'white',
        borderWidth:2,
        height:30,
        width:80
    },
    btnAMSelected:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginLeft:5,
        backgroundColor:'black',
        height:30,
        width:80
    },
    btnText:{
        color:'black',
        fontWeight:'bold',
        paddingBottom:2,
        fontSize:15
    },
    btnTextSelected:{
        color:'white',
        fontWeight:'bold',
        paddingBottom:2,
        fontSize:15
    },
    btnPress:{
        borderColor: 'blue',
        borderWidth: 1,
        height: 30,
        width: 100,
    }
});

export default SearchScreen;



