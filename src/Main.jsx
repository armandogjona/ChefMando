import { useState } from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"

export default function Main() {
    const[ingredients, setIngredients] = useState([])
    const[recipeShown, setRecipeShown] = useState(false)

    function toggleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main> 
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                    autoComplete="off"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 ? 
            <IngredientsList ingredients={ingredients} 
            toggleRecipeShown={toggleRecipeShown}/>   
            : null}

            {recipeShown && <ClaudeRecipe /> }
        </main>
    )
}