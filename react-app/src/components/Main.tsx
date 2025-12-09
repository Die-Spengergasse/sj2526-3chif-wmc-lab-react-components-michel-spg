export default function Main() {
  return (
    <>
      {/* MAIN */}
      <main className="container ml-18">
        <section className="mb-4">
          <h2 className="text-2xl mb-3">Beliebte Rezepte</h2>
          <p className="text-muted">
            Drei schnelle Gerichte, die du mit wenigen Zutaten nachkochen
            kannst. Perfekt für stressige Wochentage – ohne komplizierte
            Techniken.
          </p>
        </section>
        {/* 3-Spalten-Layout mit Karten */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="h-100 card shadow-sm">
            <img
              src="https://cdn.dummyjson.com/recipe-images/1.webp"
              className="card-img-top"
              alt="Cremige Pasta im Teller"
            />
            <div className="card-body">
              <h3 className="h5 card-title">Cremige One-Pot-Pasta</h3>
              <p className="card-text">
                Eine einfache, cremige Pasta, die komplett in einem Topf gekocht
                wird – ideal, wenn es schnell gehen soll.
              </p>
              <ul className="small mb-0">
                <li>Fertig in ca. 20 Minuten</li>
                <li>Wenig Abwasch</li>
                <li>Perfekt für unter der Woche</li>
              </ul>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card h-100 shadow-sm">
            <img
              src="https://cdn.dummyjson.com/recipe-images/2.webp"
              className="card-img-top"
              alt="Bunte Bowl mit Gemüse"
            />
            <div className="card-body">
              <h3 className="h5 card-title">Bunte Veggie Bowl</h3>
              <p className="card-text">
                Eine frische Schüssel voller Gemüse, Körner und einem leichten
                Dressing – gesund und trotzdem sättigend.
              </p>
              <ul className="small mb-0">
                <li>Viel frisches Gemüse</li>
                <li>Einfach variierbar</li>
                <li>Auch ideal zum Mitnehmen</li>
              </ul>
            </div>
          </div>
          {/* Card 3 */}
          <div className="card h-100 shadow-sm">
            <img
              src="https://cdn.dummyjson.com/recipe-images/3.webp"
              className="card-img-top"
              alt="Chocolate-Chip-Cookies auf einem Gitter"
            />
            <div className="card-body">
              <h3 className="h5 card-title">Chewy Choco Cookies</h3>
              <p className="card-text">
                Weiche Schoko-Cookies mit knusprigem Rand – perfekt als Dessert
                oder zum Kaffee am Nachmittag.
              </p>
              <ul className="small mb-0">
                <li>Innen weich, außen knusprig</li>
                <li>Ideal zum Teilen</li>
                <li>Teig lässt sich einfrieren</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
