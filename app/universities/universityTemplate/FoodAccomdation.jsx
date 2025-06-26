export default function FoodAccomdation({ data }) {
  return (
    <div className="bg-white flex flex-col gap-7 p-4 md:p-6 lg:p-8">
      <h2 className="md:text-4xl text-2xl text-primary font-bold">
        {data.title}
      </h2>
      <p className="text-sm md:text-base text-secondary font-medium">{data.content}</p>
    </div>
  );
}
