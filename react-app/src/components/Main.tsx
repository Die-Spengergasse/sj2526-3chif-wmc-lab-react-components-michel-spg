import GridLayout from "./GridLayout";

export default function Main() {
  return (
    <>
      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-4 mb-10">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Beliebte Rezepte</h2>
          <p className="text-gray-700">
            Drei schnelle Gerichte, die du mit wenigen Zutaten nachkochen
            kannst. Perfekt für stressige Wochentage – ohne komplizierte
            Techniken.
          </p>
        </section>
        {/* 3-Spalten-Layout mit Karten */}
        <GridLayout />
      </main>
    </>
  );
}
