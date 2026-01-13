import RecipeCard from "./RecipeCard";
import { recipes } from "../data/recipes";

export default function GridLayout() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
}
