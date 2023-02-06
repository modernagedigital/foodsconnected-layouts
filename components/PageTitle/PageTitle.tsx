import { Breadcrumb } from "components";

export const PageTitle = (props: any) => {
  const { title = "Supplier List" } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-2">
        <Breadcrumb />
        <h1 className="ui-typography-title1 font-bold text-indigo-12">
          {title}
        </h1>
      </div>
      <button className="flex h-14 w-fit items-center rounded-md bg-primary-brand py-5xs px-2xs text-center font-display text-lg font-bold text-white">
        Actions
      </button>
    </div>
  );
};
