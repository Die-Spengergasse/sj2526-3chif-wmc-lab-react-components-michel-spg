import type { Recipe } from "../types/Recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeDetailCard({ recipe }: RecipeCardProps) {

  const { title, imgUrl, description } = recipe;

  return (
    <>
      <div className="mb-4 mt-4 max-w-2xl mx-auto">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg mb-8">{description}</p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
        >
          ← Zurück
        </button>
      </div>
    </>
  );
}
