import RecipeCard from "../components/RecipeCard";
import { Link } from "@tanstack/react-router";
import { recipes } from "../data/recipes";

function getRandomRecipes(count: number) {
  const shuffled = [...recipes].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export default function Main() {
  const randomRecipes = getRandomRecipes(3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl py-10 mx-auto text-center">
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Entdecke leckere Rezepte für jeden Tag - schnell, einfach und mit
            wenigen Zutaten. Lass dich inspirieren!
          </p>
          <Link
            to="/recipes"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-yellow-100 hover:scale-105 transition-all duration-200"
          >
            Alle Rezepte entdecken →
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-4 left-8 text-6xl opacity-20 select-none">🥗</div>
        <div className="absolute bottom-4 right-8 text-6xl opacity-20 select-none">🍕</div>
      </section>

      {/* ZUFÄLLIGE REZEPTE */}
      <main className="max-w-6xl mx-auto px-4 mb-16">
        <section className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Unsere Empfehlungen
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Drei zufällige Rezepte, die du heute ausprobieren könntest.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {randomRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </>
  );
}
