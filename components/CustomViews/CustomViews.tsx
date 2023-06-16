import { cva, type VariantProps } from "class-variance-authority";

const pillItem = cva(
  [
    [
      // Outer styles
      "h-11",
      "w-fit",
      "flex",
      "font-text",
      "font-bold",
      "text-sm",
      "leading-snug",
      "text-slate-11",
      "whitespace-nowrap",
      "shrink-0",
    ],
  ],
  {
    variants: {
      intent: {
        primary: ["your", "primary", "classes"],
      },
      active: {
        true: ["[&>*]:bg-blue-10", "[&>*]:text-white"],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export interface PillNavItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pillItem> {
  children: React.ReactNode;
}

export const PillNavItem: React.FC<PillNavItemProps> = ({
  className,
  intent,
  active,
  children,
  ...props
}) => (
  <button className={pillItem({ intent, active, className })} {...props}>
    <div className="rounded-full bg-white border border-blue-10 h-8 px-3 flex items-center">
      {children}
    </div>
  </button>
);

export const CustomViews = () => {
  return (
    <div className="flex gap-1">
      <PillNavItem>All Suppliers</PillNavItem>
      <PillNavItem active>Spring suppliers</PillNavItem>
      <PillNavItem>View name</PillNavItem>
      <PillNavItem>View name</PillNavItem>
      <PillNavItem>View name</PillNavItem>
      <PillNavItem>View name</PillNavItem>
      <PillNavItem>View name</PillNavItem>
      <PillNavItem>View name</PillNavItem>
    </div>
  );
};
