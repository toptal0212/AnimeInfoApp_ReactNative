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
                        <Text style={styles.btnText}>Anime</Text>
                </Pressable>
                <Pressable 
                    onPress={toManga.bind()}
                    style={serachType=='manga'? styles.btnAMSelected:styles.btnAM}>
                        <Text style={styles.btnText}>Manga</Text>
                </Pressable>
            </View>

        </View>
);
};

const styles = StyleSheet.create({

    background:{
        marginTop:15,
        marginBottom:35,
        backgroundColor:'#F0EADE',
        height:50,
        borderRadius:5,
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
        marginLeft:2,
        marginRight:3
    },
    buttons:{
        width:100,
        flexDirection:'row',
        
    },
    btnAM:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginLeft:5,
        backgroundColor:'#F0EADE',
        height:30,
        width:80
    },
    btnAMSelected:{
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        marginLeft:5,
        backgroundColor:'#F0E12E',
        height:30,
        width:80
    },
    btnNormal:{
        borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 100,
    },
    btnPress:{
        borderColor: 'blue',
        borderWidth: 1,
        height: 30,
        width: 100,
    }
});

export default SearchScreen;



