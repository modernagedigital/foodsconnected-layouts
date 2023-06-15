import clsx from "clsx";

type BadgeProps = {
  size?: "sm" | "md" | "lg";
  status?: "success" | "warning" | "danger" | "info";
  text?: string;
};

export const Badge = (props: BadgeProps) => {
  const { size = "md", status = "info", text = "Badge" } = props;
  return (
    <div
      className={clsx([
        "flex w-fit items-center rounded border",
        size == "sm"
          ? "ui-typography-micro h-5 px-2 font-semibold"
          : size == "md"
          ? "ui-typography-footnote h-6 px-2 font-semibold"
          : // lg
            "ui-typography-body h-8 px-3 font-semibold",
        status == "info"
          ? "border-info-tint-5 bg-info-tint text-info"
          : status == "danger"
          ? "border-danger-tint-5 bg-danger-tint text-danger"
          : status == "warning"
          ? "border-warning-tint-5 bg-warning-tint text-warning"
          : // Success
            "border-success-tint-5 bg-success-tint text-success",
      ])}
    >
      {text}
    </div>
  );
};
