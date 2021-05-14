import React from 'react';
import { View, Text, StyleSheet,TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

//icon are from https://github.com/expo/vector-icons

const SearchScreen = ({term,onTermChnage,onTermSubmit}) => {
    return (
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
);
};

const styles = StyleSheet.create({

    background:{
        marginTop:15,
        marginBottom:15,
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
    }
});

export default SearchScreen;