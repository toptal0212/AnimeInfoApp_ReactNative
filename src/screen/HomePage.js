import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,ScrollView  } from 'react-native';
import jiken from '../api/jikan';
import TopAnimeManga from './component/topAnime';
import SerachBar from './component/searchBar';
import UpcomingAnime from './component/upcomingAnime';
const HomeScreen = (props) => {

    const [topAnimeResult,setTopAnimeResult]= useState([]);
    const [topMangaResult,setTopMangaResult]= useState([]);
    const [errorMsg, setErrorMsg]= useState('');
    const[search,setSearch]=useState('');
    const [serachType,setSerachType]=useState('anime');
    const[pageAnime,setPageAnime]=useState(1);
    const[pageManga,setPageManga]=useState(1);

    const topAnimeLoad =async(pageNum)=>{
        // try {
        //     setPageAnime(pageNum);
        //     const response = await jiken.get('/top/anime/'+pageNum,{});
        //     let temp = [...topAnimeResult,...response.data.top];
        //     //setTopAnimeResult(response.data.top);
        //     setTopAnimeResult(temp);
        //     //setTopAnimeResult(response.data.data.top);
        //     //console.log(response.data.top,'dddd')

        //     if(response.data.top==null){
        //         setErrorMsg('Data Not Found!');
        //     }else{
        //         setErrorMsg('');
        //     }
        // }catch (err){
        //     console.log(err);
        //     //setErrorMsg('Something Want Wrong');
        // };
    }
    const topMangaLoad =async(pageNum)=>{
        try {
            setPageManga(pageNum);
            const response = await jiken.get('/top/manga/'+pageNum,{});
            let temp = [...topMangaResult,...response.data.top];
            setTopMangaResult(temp);
            setErrorMsg('');
        }catch (err){
            console.log(err);
            //setErrorMsg('Data Not Loaded!');
        };
    }

    const searchResults =async()=>{
        try {
            const response = await jiken.get('/search/'+serachType+'?q='+search+'&page=1',{});

            
            if(response.data.top==[]){
                setErrorMsg('Data Not Found!');
            }else if(search==null){
                setErrorMsg('');
            }
            else{
                setErrorMsg('');
                props.navigation.navigate('SerachResult' ,{data : response.data.results,search:search,type:serachType})
            }
            
        
        }catch (err){
            //console.log(err);
            if(search==''){
                setErrorMsg('');
            }else{
                setErrorMsg('Data Not Found!');
            }
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
    const nextPageAnime=()=>{

        if(pageAnime<20){
            topAnimeLoad(pageAnime+1);
        }
    }
    const nextPageManga=()=>{

        if(pageManga<20){
            topMangaLoad(pageManga+1);
        }
    }
        
    const nextZero=()=>{
        setPage(1);
        topAnimeLoad();
    }

useEffect(()=>{
    topAnimeLoad(1);
    topMangaLoad(1);
    },[]);


    let pageData ='';
    if(serachType=='anime'){
        pageData=(
        <ScrollView>
            <TopAnimeManga data={topAnimeResult} type={'anime'} nextPage={nextPageAnime} pageZero={nextZero}/>
            <UpcomingAnime season={'winter'}/>
            <UpcomingAnime season={'summer'}/>
            <UpcomingAnime season={'fall'}/>
        </ScrollView>
        )
    }
    else{
        pageData=(
            <ScrollView>
                <TopAnimeManga data={topMangaResult} type={'manga'} nextPage={nextPageManga}/> 
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
 


        <Text style={{marginLeft:20,marginTop:8,marginBottom:8,color:'red'}}>{errorMsg}</Text>
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