import {
  AppShell,
  SecondaryNav,
  Kpis,
  FilterRow,
  Table,
  CustomViews,
  PageTitle,
} from "components";

export default function SupplierManager() {
  return (
    <main>
      <AppShell>
        <div className="space-y-2xs-xs">
          <PageTitle />
          <CustomViews />
          <FilterRow />
          <Table />
        </div>
      </AppShell>
    </main>
  );
}
