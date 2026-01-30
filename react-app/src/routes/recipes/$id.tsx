import { createFileRoute, useParams } from "@tanstack/react-router";
import { recipes } from "../../data/recipes";
import RecipeDetailCard from "../../components/RecipeDetailCard";

export const Route = createFileRoute("/recipes/$id")({
  component: RecipeDetail,
});

function RecipeDetail() {
  const { id } = useParams({ from: "/recipes/$id" });
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <main className="max-w-6xl mx-auto px-4 mb-10">
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Rezept nicht gefunden</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 mb-10">
      <RecipeDetailCard recipe={recipe} />
    </main>
  );
}
