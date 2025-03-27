import { Grid,Form } from "semantic-ui-react";
import { useState } from "react";


const Search=({setSearchedQuery})=>{

    const [value,setValue]=useState("");
    const onFormSubmit=()=>{
        setSearchedQuery(value);
    }
    return(
        <Grid column={2} textAlign="center" className="search-box">
            <Grid.Column>
                <h2 className="search-heading">
                    Search Recipes with <span style={{color:'#2185D0'}} >
                    our recipes   </span>
                </h2>
                <h4>Input recipes seperated by comma</h4>
                <Form onSubmit={onFormSubmit}>
                    <input
                    placeholder="totmato,potato,pizza"
                    action={{icon:'search',color:'blue'}}
                    onChange={(e)=>setValue(e.target.value)}
                    value={value}
                    />
                    
                </Form>
            </Grid.Column>

        </Grid>
        
    )
}
export default Search;