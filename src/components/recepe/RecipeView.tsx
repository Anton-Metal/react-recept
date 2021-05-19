// map för att omvandla listan från data till



import { Recipe } from '../../types/recipe'

 

interface props {

	recipe: Recipe

}


const RecipeView = ({ recipe }: props) => (

	<div>
		<h2> {recipe.title} </h2>
		<ul>
			{recipe.ingredients.map(ingredient => (
				<li key={ingredient.id}>
					{ingredient.name} 
				</li> 
			))}
		
		
		</ul>
		<p> {recipe.instructions} </p>
	</div>


)
export default RecipeView