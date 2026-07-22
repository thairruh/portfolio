function TechCard({ title, items, border }) {
  return (
    <div className={`rounded-[2rem] border-2 ${border} p-8 min-h-[520px]`}>
      <h2 className="text-4xl text-center text-[#57072F] font-serif mb-12">
        {title}
      </h2>

      <div className="grid grid-cols-4 gap-10 place-items-center">
        {items.map((item) => (
          <img
            key={item.name}
            src={item.src}
            alt={item.name}
            className="w-20 h-20 object-contain"
          />
        ))}
      </div>
    </div>
  );
}