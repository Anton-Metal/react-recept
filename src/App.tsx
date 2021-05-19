import React from 'react';
import RecipeView from './components/recepe/RecipeView'
import { Recipe } from './types/recipe'
import './App.css';

const data: Recipe = {
	title: 'Pankaka',
	instructions: 'och lite ris',
	ingredients: [
		{ id: 1, name: '1' },
		{ id: 2, name: '2' },
		{ id: 3, name: '3' },
		{ id: 4, name: '4' }
	]	
}	 

function App() {
  return (
    <div className="App">
     
		<RecipeView recipe={data}/>

    </div>
  );
}

export default App;
