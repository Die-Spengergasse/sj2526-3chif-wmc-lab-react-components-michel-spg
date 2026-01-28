import { createFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Main from "../components/Main";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
