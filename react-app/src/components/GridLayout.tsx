export default function GridLayout() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition">
        <img
          src="https://cdn.dummyjson.com/recipe-images/1.webp"
          className="w-full"
          alt="Cremige Pasta im Teller"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Cremige One-Pot-Pasta</h3>
          <p className="text-gray-700 mb-3">
            Eine einfache, cremige Pasta, die komplett in einem Topf gekocht
            wird – ideal, wenn es schnell gehen soll.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Fertig in ca. 20 Minuten</li>
            <li>Wenig Abwasch</li>
            <li>Perfekt für unter der Woche</li>
          </ul>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition">
        <img
          src="https://cdn.dummyjson.com/recipe-images/2.webp"
          className="w-full"
          alt="Bunte Bowl mit Gemüse"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Bunte Veggie Bowl</h3>
          <p className="text-gray-700 mb-3">
            Eine frische Schüssel voller Gemüse, Körner und einem leichten
            Dressing – gesund und trotzdem sättigend.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Viel frisches Gemüse</li>
            <li>Einfach variierbar</li>
            <li>Auch ideal zum Mitnehmen</li>
          </ul>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg transition">
        <img
          src="https://cdn.dummyjson.com/recipe-images/3.webp"
          className="w-full"
          alt="Chocolate-Chip-Cookies auf einem Gitter"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Chewy Choco Cookies</h3>
          <p className="text-gray-700 mb-3">
            Weiche Schoko-Cookies mit knusprigem Rand – perfekt als Dessert oder
            zum Kaffee am Nachmittag.
          </p>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Innen weich, außen knusprig</li>
            <li>Ideal zum Teilen</li>
            <li>Teig lässt sich einfrieren</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
