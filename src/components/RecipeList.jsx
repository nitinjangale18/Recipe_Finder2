
import {Container, Header, Grid} from 'semantic-ui-react'
import RecipeListItem from './recipeListItem';

const RecipeList=({recipes,searchedQuery})=>{
    return(

        <Container>

            <Header
                size="huge"
                content={`Recipes list for ${searchedQuery}`}
                textAlign='center'
            >
            </Header>

            <Grid columns={4} doubling>
                {
                   recipes && recipes.map(recipe=>(
                    <Grid.Column>
                  <RecipeListItem recipe={recipe}/>
 
                    </Grid.Column>
                   ))
                }
            </Grid>

        </Container>
    )
}
export default RecipeList;