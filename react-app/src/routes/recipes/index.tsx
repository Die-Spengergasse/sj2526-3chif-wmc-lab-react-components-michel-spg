import { createFileRoute } from "@tanstack/react-router";
import GridLayout from "../../components/GridLayout";

export const Route = createFileRoute("/recipes/")({
  component: Recipes,
});

function Recipes() {
  return (
    <main className="max-w-6xl mx-auto px-4 mb-16">
      <GridLayout />
    </main>
  );
}