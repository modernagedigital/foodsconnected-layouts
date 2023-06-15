const Filter = () => {
  return <div className="h-14 w-[180px] bg-slate-500">Filter</div>;
};

export const FilterRow = () => {
  return (
    <div className="flex items-center justify-between bg-slate-400 p-4">
      <div className="flex gap-4">
        <Filter />
        <Filter />
        <Filter />
        <Filter />
      </div>
      <div>asdasd</div>
    </div>
  );
};
