import { createFileRoute, useParams } from "@tanstack/react-router";
import { recipes } from "../data/recipes";

export const Route = createFileRoute("/recipe/$id")({
  component: RecipeDetail,
});

function RecipeDetail() {
  const { id } = useParams({ from: "/recipe/$id" });
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
    <main className="max-w-6xl mx-auto px-4 mb-10 py-10">
      <div className="mb-4 mt-4 max-w-2xl mx-auto">
        <img
          src={recipe.imgUrl}
          alt={recipe.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {recipe.title}
        </h1>
        <p className="text-gray-600 text-lg mb-8">{recipe.description}</p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          ← Zurück
        </button>
      </div>
    </main>
  );
}
