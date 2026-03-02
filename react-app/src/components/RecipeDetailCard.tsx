import type { Recipe } from "../types/Recipe";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeDetailCard({ recipe }: RecipeCardProps) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <>
      {/* Header */}
      <div className="relative rounded-2xl overflow-hidden mb-8">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-full h-72 md:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-extrabold drop-shadow-lg">
            {recipe.name}
          </h1>
          <p className="text-lg text-white/80 mt-1">{recipe.cuisine}</p>
        </div>
      </div>

      {/* Meta-Infos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">
            {recipe.prepTimeMinutes}
          </p>
          <p className="text-sm text-gray-600">Min. Preparation</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">
            {recipe.cookTimeMinutes}
          </p>
          <p className="text-sm text-gray-600">Min. Cooking</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">
            {recipe.servings}
          </p>
          <p className="text-sm text-gray-600">Portions</p>
        </div>
        <div className="bg-orange-50 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-orange-600">
            ⭐ {recipe.rating.toFixed(1)}
          </p>
          <p className="text-sm text-gray-600">{recipe.difficulty}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {recipe.tags.map((tag) => (
          <span
            key={tag}
            className="bg-orange-100 text-orange-700 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
        {recipe.mealType.map((type) => (
          <span
            key={type}
            className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full"
          >
            {type}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Zutaten */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ingredients
          </h2>
          <ul className="space-y-2">
            {recipe.ingredients.map((ingredient, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-700"
              >
                <span className="w-2 h-2 bg-orange-400 rounded-full shrink-0" />
                {ingredient}
              </li>
            ))}
          </ul>
        </section>

        {/* Zubereitung */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Preparation
          </h2>
          <ol className="space-y-3">
            {recipe.instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-gray-700">
                <span className="bg-orange-500 text-white text-sm font-bold w-7 h-7 rounded-full flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Gesamtzeit Footer */}
      <div className="mt-10 p-4 bg-gray-100 rounded-xl text-center text-gray-600">
        Total time: <strong>{totalTime} minutes</strong>
      </div>
    </>
  );
}
