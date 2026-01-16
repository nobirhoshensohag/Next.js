import CakeCard from "@/components/itemCard/CakeCard";



export default function CakesPage() {
  const cakes = [
    {
      id: 1,
      name: "Chocolate Truffle Cake",
      price: 1200,
      offerPrice: 950,
      discount: 20,
      image:
        "https://unsplash.com/photos/baked-cupcake-S2jw81lfrG0",
    },
    {
      id: 2,
      name: "Strawberry Cream Cake",
      price: 1000,
      offerPrice: 850,
      discount: 15,
      image:
        "https://unsplash.com/photos/chocolate-cake-with-white-icing-on-white-ceramic-plate-hcEDfkiVmMI",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Our Popular Cakes 🎂
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cakes.map((cake) => (
          <CakeCard key={cake.id} {...cake} />
        ))}
      </div>
    </section>
  );
}