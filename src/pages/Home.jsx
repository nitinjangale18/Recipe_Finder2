
import Header from "../components/common/Header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Receipes from "./Receipes";

const Home=()=>{
    return(
        <>
        <Header title="our recipes" bgClass="bg-image"> 

            <Button 
             content="seach receipes"
             color="orange"
             as={Link} to="/recipes"
             
             />
        </Header>
        <Receipes/> 



        </>
    )
}

export default Home;