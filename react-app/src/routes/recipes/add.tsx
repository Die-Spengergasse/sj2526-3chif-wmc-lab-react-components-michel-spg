import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import type { Recipe } from "../../types/Recipe";

export const Route = createFileRoute("/recipes/add")({
  component: AddRecipePage,
});

type FormState = {
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  ingredientsText: string;
  instructionsText: string;
  tagsText: string;
  mealTypeText: string;
};

function splitCsv(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function AddRecipePage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    image: "",
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 1,
    difficulty: "",
    cuisine: "",
    ingredientsText: "",
    instructionsText: "",
    tagsText: "",
    mealTypeText: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [createdRecipe, setCreatedRecipe] = useState<Recipe | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    if (name === "prepTimeMinutes" || name === "cookTimeMinutes" || name === "servings") {
      setForm((prev) => ({ ...prev, [name]: Number(value) || 0 }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setCreatedRecipe(null);

    const payload = {
      name: form.name,
      image: form.image,
      prepTimeMinutes: form.prepTimeMinutes,
      cookTimeMinutes: form.cookTimeMinutes,
      servings: form.servings,
      difficulty: form.difficulty,
      cuisine: form.cuisine,
      ingredients: splitCsv(form.ingredientsText),
      instructions: splitCsv(form.instructionsText),
      tags: splitCsv(form.tagsText),
      mealType: splitCsv(form.mealTypeText),
    };

    try {
      const res = await fetch("https://dummyjson.com/recipes/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to add recipe");
      }

      const data: Recipe = await res.json();
      setCreatedRecipe(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-10 text-zinc-900 dark:text-zinc-100">
      <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-800">
        Add a New Recipe
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="prepTimeMinutes"
          type="number"
          placeholder="Prep Time (min)"
          value={form.prepTimeMinutes}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="cookTimeMinutes"
          type="number"
          placeholder="Cook Time (min)"
          value={form.cookTimeMinutes}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="servings"
          type="number"
          placeholder="Servings"
          value={form.servings}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="difficulty"
          placeholder="Difficulty"
          value={form.difficulty}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <input
          name="cuisine"
          placeholder="Cuisine"
          value={form.cuisine}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <textarea
          name="ingredientsText"
          placeholder="Ingredients (comma separated)"
          value={form.ingredientsText}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows={3}
        />
        <textarea
          name="instructionsText"
          placeholder="Instructions (comma separated)"
          value={form.instructionsText}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows={3}
        />
        <textarea
          name="tagsText"
          placeholder="Tags (comma separated)"
          value={form.tagsText}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows={2}
        />
        <textarea
          name="mealTypeText"
          placeholder="Meal types (comma separated)"
          value={form.mealTypeText}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          rows={2}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-orange-500 px-4 py-2 font-medium text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-orange-600 dark:hover:bg-orange-500"
        >
          {isSubmitting ? "Adding..." : "Add Recipe"}
        </button>
      </form>

      {error && <p className="mt-4 text-sm text-red-600 dark:text-red-400">{error}</p>}

      {createdRecipe && (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
          <p className="font-semibold text-emerald-700 dark:text-emerald-300">
            Recipe created successfully!
          </p>
          <p className="text-zinc-800 dark:text-zinc-200">
            New recipe id: <strong>{createdRecipe.id}</strong>
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">Name: {createdRecipe.name}</p>
        </div>
      )}

      <Link
        to="/recipes"
        className="mt-6 block text-orange-600 hover:underline dark:text-orange-400"
      >
        ← Back to Recipes
      </Link>
    </main>
  );
}