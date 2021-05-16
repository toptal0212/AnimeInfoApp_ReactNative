import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView,TouchableHighlight  } from 'react-native';
import jiken from '../api/jikan';
import TopAnimeManga from './component/topAnime';
import SerachBar from './component/searchBar';
import UpcomingAnime from './component/upcomingAnime';
const HomeScreen = (props) => {

    const [topAnimeResult,setTopAnimeResult]= useState([]);
    const [todaysAnimeResult,setTodaysAnimeResult]= useState([]);
    const [errorMsg, setErrorMsg]= useState('');
    const[search,setSearch]=useState('');
    const [serachType,setSerachType]=useState('anime');


    const topAnimeLoad =async()=>{
        try {
            const response = await jiken.get('/top/anime/1',{});
            setTopAnimeResult(response.data.top);
            //setTopAnimeResult(response.data.data.top);
            //console.log(response.data,'dddd')
            if(response.data.top==null){
                setErrorMsg('Data Not Found!');
            }else{
                setErrorMsg('');
            }
        
        }catch (err){
            console.log(err);
            setErrorMsg('Something Want Wrong');
        };
    }
    const topMangaLoad =async()=>{
        try {
            const response = await jiken.get('/top/manga/1',{});
            setTodaysAnimeResult(response.data.top);
            setErrorMsg('');
        }catch (err){
            console.log(err);
            setErrorMsg('Data Not Found!');
        };
    }

    const searchResults =async()=>{
        try {
            const response = await jiken.get('/search/'+serachType+'?q='+search+'&page=1',{});

            if(response.data.top==[]){
                setErrorMsg('Data Not Found!');
            }else{
                setErrorMsg('');
                props.navigation.navigate('SerachResult' ,{data : response.data.results,search:search,type:serachType})
            }
            
        
        }catch (err){
            console.log(err);
            setErrorMsg('Data Not Found!');
        };
    }

    const toAnimeHnadler =async()=>{
        setSerachType('anime');
        console.log(serachType);
    }
    const toMangaHnadler =async()=>{
        setSerachType('manga');
        console.log(serachType);
    }

useEffect(()=>{
    topAnimeLoad();
    topMangaLoad();
    },[]);


    let pageData ='';
    if(serachType=='anime'){
        pageData=(
        <ScrollView>
            <TopAnimeManga data={topAnimeResult} type={'anime'}/>
            <UpcomingAnime season={'winter'}/>
            <UpcomingAnime season={'summer'}/>
            <UpcomingAnime season={'fall'}/>
        </ScrollView>
        )
    }
    else{
        pageData=(
            <ScrollView>
                <TopAnimeManga data={todaysAnimeResult} type={'manga'}/> 
            </ScrollView>
        )
    }

    return (
    <View style={{ flex: 1}}>
        <SerachBar
        onTermChnage={newTerm => setSearch(newTerm)}
        onTermSubmit={()=>searchResults()}
        toAnime={toAnimeHnadler}
        toManga={toMangaHnadler}
        serachType={serachType}
        />
 


        <Text>{errorMsg}</Text>
        {pageData}

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        
    }
});

export default HomeScreen;