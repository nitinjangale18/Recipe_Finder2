import { Button, Card, CardDescription } from "semantic-ui-react";
import { Link } from "react-router-dom";

const RecipeListItem = ({ recipe }) => {
    console.log("Image URL:", recipe.image_url); // Debugging line

    if (!recipe) {
        return <div>Loading...</div>;  // Handle undefined recipe
    }
    console.log("Image URL:", recipe.image_url); // Debugging line

    return (
        <Card>
           <img src={recipe.image_url} alt="thumbnail" style={{height:170}} />
           <Card.Content>
            <Card.Header content={recipe.title}/>
            <Card.Description>
                <h4>{recipe.publisher}</h4>
            </Card.Description>
            </Card.Content>

            <div style={{ display: "flex", gap: "10px" , marginTop: "-10px"}}>

            <Button  as={Link} to={`/recipes/${recipe.recipe_id}`} target="_blank" color="blue" size="tiny" content="Details" >               
            </Button> 

         <Button  href={recipe.source_url} target="_blank" color="green" size="tiny" content="Recipe URL" >                
         </Button>

          </div>

        </Card>
    );
};

export default RecipeListItem;
