import { clsx } from "clsx";

const KpiCard = () => {
  return (
    <div className="grid aspect-square w-56 flex-shrink-0 place-items-center rounded-md bg-slate-300">
      KPI
    </div>
  );
};

export const Kpis = ({ children }: any) => {
  return (
    <div className="flex gap-2 overflow-x-scroll bg-slate-400 p-2">
      <KpiCard />
      <KpiCard />
      <KpiCard />
    </div>
  );
};
