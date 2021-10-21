import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade
  } from "rn-placeholder";


const Loading = (props) => {


    // var data = [];

	// for(let i = 0; i < 5; i++){

	// 	data.push(
    //         <Placeholder Animation={Fade}>
    //             <PlaceholderMedia  style={{width:100,height:160}}/>
    //             <Text />
    //             <PlaceholderLine width={80} />
    //             <PlaceholderLine width={30} />
    //         </Placeholder>
	// 	)
	// }

  // console.log(props);
    return (
    <View style={styles.container}>

        {/* {data} */}

        <Placeholder Animation={Fade}>
                <PlaceholderMedia  style={{width:100,height:160}}/>
                <Text />
                <PlaceholderLine width={80} />
                <PlaceholderLine width={30} />

                
        </Placeholder>

   
    </View>
    );
};

const styles = StyleSheet.create({

    container:{
        marginLeft:15,
        marginTop:10,
        width:200,
    },

});

export default Loading;