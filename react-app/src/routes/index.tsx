import { createFileRoute } from "@tanstack/react-router";
import Main from "../components/Main";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Main />
    </>
  );
}
