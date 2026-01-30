import { Link } from "@tanstack/react-router";
import type { Recipe } from "../types/Recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const { id, title, imgUrl, description, hints } = recipe;

  return (
    <>
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition">
        <img src={imgUrl} className="w-full" alt={title} />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-3">{description}</p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            {hints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>
        </div>
        <Link
          to={`/recipes/$id`}
          params={{ id: id.toString() }}
          className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-b-lg hover:bg-red-600 transition-colors text-center block"
        >
          Details
        </Link>
      </div>
    </>
  );
}
