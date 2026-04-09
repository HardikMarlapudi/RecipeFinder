import React, {useState} from 'react';

const RecipeFinder = () => {

    const [recipe, setRecipe] = useState([]);
    const [search, setSearch] = useState('');
    const [recipeError, setRecipeError] = useState("No recipe found.");

    const findRecipe = async () => {
        try {
            const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${search}`, 
            {
                headers: {
                'X-Api-Key': '1QaEXXiMr42UQHgffVLNDA==uoRjZZaDnhJg5v1O',
                },
            }
        );

        const data = await response.json();
        console.log("API response: ", data);

        setRecipe(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching recipe:", error);
        }
    };

    return (
        <div className="recipeFinder">
        <h2>RecipeFinder</h2>

        <center>
        <input 
            type="search"
            id="searchRecipe"
            value={search}
            placeholder="Search Recipe..."
            onChange={(e) => setSearch(e.target.value)}
        />
        </center>

        <button id="findRecipe" onClick={findRecipe}>Search Recipe</button>

        <div id="recipeResults">
        {Array.isArray(recipe) && recipe.length > 0 ? (
            recipe.map((item, index) => (
            <div className="recipe-card" key={index}>
                <h3>{item.title}</h3>
                <p><strong>Ingredients: </strong>{item.ingredients}</p>
                <p><strong>Instructions: </strong>{item.instructions}</p>
            </div>
        ))
        ) : (
            <p id="recipeError" onChange={(e) => setRecipeError(e.target.value)}>{recipeError}</p>
        )}
        </div>
        </div>
        )
    };

export default RecipeFinder;
