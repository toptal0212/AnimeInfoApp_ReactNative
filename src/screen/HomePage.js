import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
import jiken from '../api/jikan';
import TopAnimeManga from './component/topAnime';
import TopManga from './component/todaysAnime';
import SerachBar from './component/searchBar';
import SerachResults from './SerachResult';

const HomeScreen = () => {

    const [term,setTerm]=useState('');
    // const [searchAPi,errorMsg,result]=useResults();
    const [topAnimeResult,setTopAnimeResult]= useState([]);
    const [todaysAnimeResult,setTodaysAnimeResult]= useState([]);
    const [errorMsg, setErrorMsg]= useState('');
    const[searchData,setSearchData]=useState([]);
    const[search,setSearch]=useState('');
    const[searchPage,setSearchPage]=useState(false);

    const topAnimeLoad =async()=>{
        try {
            const response = await jiken.get('/top/anime/1',{});
            setTopAnimeResult(response.data.top);
            //setTopAnimeResult(response.data.data.top);
            //console.log(response.data,'dddd')
            setErrorMsg('');
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
            setErrorMsg('Something Want Wrong');
        };
    }

    const searchResults =async()=>{
        setSearchPage(true);
        console.log(search);
        try {
            const response = await jiken.get('/search/anime?q='+search+'&page=1',{});
            setSearchData(response.data.results);
            console.log(response.data.results);
            setErrorMsg('');
        }catch (err){
            console.log(err);
            setErrorMsg('Something Want Wrong');
        };
    }




useEffect(()=>{
    topAnimeLoad();
    topMangaLoad();
    },[]);


    let pageData ='';
    if(!searchPage){
        pageData=(
        <ScrollView>
            <TopAnimeManga data={topAnimeResult}/>
            <TopAnimeManga data={todaysAnimeResult}/>
        </ScrollView>
        )
    }
    else{
        pageData=(
            <ScrollView>
                <SerachResults data={searchData}/>
            </ScrollView>
        )
    }

    return (
    <View style={{ flex: 1}}>
        <SerachBar
         onTermChnage={newTerm => setSearch(newTerm)}
         onTermSubmit={()=>searchResults()}
        />

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