import { createFileRoute } from "@tanstack/react-router";
import Main from "../../components/Main";

export const Route = createFileRoute("/recipes/")({
  component: Recipes,
});

function Recipes() {
  return (
    <>
      <Main />
    </>
  );
}