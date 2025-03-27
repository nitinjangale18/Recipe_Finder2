import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../services/api";
import { useEffect, useState } from "react";

const Receipes=()=>{

    const [searchedQuery,setSearchedQuery]=useState('pizza');
    const [recipes,setRecipes]=useState([]);

    useEffect(()=>{
        getSearchedResult();
    },[searchedQuery]);


    const getSearchedResult=async()=>{
       let result=await getRecipes(searchedQuery);
       console.log("printing result",result);
       if(result && result.recipes){
        setRecipes(result.recipes);
       }
    }

    console.log("printing recipes here",recipes);


    return(
        <>
        <Search setSearchedQuery={setSearchedQuery}/>
        <RecipeList recipes={recipes} searchedQuery={searchedQuery} />
        </>
    )
}
export default Receipes;