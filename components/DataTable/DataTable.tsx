import { ReactNode, useRef } from "react";
import { JsxElement } from "typescript";
import clsx from "clsx";
import { Badge } from "components";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { gsap } from "gsap-trial";
import ScrollTrigger from "gsap-trial/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Icon_File = (props: any) => {
  const { className } = props;
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 2C2 0.895313 2.89531 0 4 0H9.17188C9.70312 0 10.2094 0.210719 10.5844 0.585938L13.4156 3.41563C13.7906 3.79063 14 4.29688 14 4.82812V14C14 15.1031 13.1031 16 12 16H4C2.89531 16 2 15.1031 2 14V2ZM12.5 14V5H10C9.44687 5 9 4.55313 9 4V1.5H4C3.72375 1.5 3.5 1.72375 3.5 2V14C3.5 14.275 3.72375 14.5 4 14.5H12C12.275 14.5 12.5 14.275 12.5 14Z"
        fill="#687076"
      />
    </svg>
  );
};

type CellWrapperProps = {
  headerSlot?: ReactNode;
  contentSlot?: ReactNode;
  isTall?: boolean;
  width?: number;
};

const CellWrapper = (props: CellWrapperProps) => {
  const { headerSlot, contentSlot, isTall, width } = props;
  return (
    <div
      className={clsx([
        "flex w-fit shrink-0 flex-col justify-center gap-1 px-4 py-2",
        isTall ? "h-16" : "h-12",
      ])}
      style={{
        width: width && width,
      }}
    >
      {headerSlot && (
        <div className="flex min-h-5 items-center">{headerSlot}</div>
      )}
      {contentSlot && (
        <div className="flex min-h-6 items-center">{contentSlot}</div>
      )}
    </div>
  );
};

type Cell_HeadingProps = {
  heading: string;
  secondaryLabel?: string;
  width?: number;
};

const Cell_Heading = (props: Cell_HeadingProps) => {
  const { secondaryLabel, width, heading } = props;
  return (
    <>
      <CellWrapper
        isTall={secondaryLabel ? true : false}
        width={width}
        headerSlot={
          <>
            <h4 className="font-text text-sm font-semibold leading-tighter text-type-strong">
              {heading}
            </h4>
          </>
        }
        contentSlot={
          secondaryLabel && (
            <>
              <div className="flex gap-1">
                <Icon_File className="h-4 w-4" />
                <div className="font-text text-xs text-type">
                  {secondaryLabel}
                </div>
              </div>
            </>
          )
        }
      />
    </>
  );
};

type Cell_ValueProps = {
  doubled?: boolean;
  heading?: string;
  value: string;
  width?: number;
};

const Cell_Value = (props: Cell_ValueProps) => {
  const { doubled, heading, value, width } = props;
  return (
    <>
      <CellWrapper
        isTall={heading ? true : false}
        width={width}
        headerSlot={
          heading && (
            <>
              <h4 className="font-text text-xs font-semibold text-type">
                {heading}
              </h4>
            </>
          )
        }
        contentSlot={
          <>
            <div className="flex gap-1">
              <div className="font-text text-sm text-type-strong">{value}</div>
            </div>
          </>
        }
      />
    </>
  );
};

type Cell_BadgeProps = {
  doubled?: boolean;
  heading?: string;
  value: string;
  status?: "info" | "danger" | "warning" | "success";
  width?: number;
};

const Cell_Badge = (props: Cell_BadgeProps) => {
  const { doubled, heading, status = "info", value, width } = props;
  return (
    <>
      <CellWrapper
        isTall={heading ? true : false}
        width={width}
        headerSlot={
          heading && (
            <>
              <h4 className="font-text text-xs font-semibold text-slate-11">
                {heading}
              </h4>
            </>
          )
        }
        contentSlot={
          <>
            <Badge size="md" text={value} status={status} />
          </>
        }
      />
    </>
  );
};

const SectionDivider = ({ children }: any) => (
  <h3 className="ui-typography-title3 mt-6 font-semibold">{children}</h3>
);

type DataRowProps = {
  heading?: string;
  secondary?: string;
  version?: string;
  statusLabel?: "Active" | "Inactive";
  department?: string;
  creator?: string;
  updated?: string;
  due?: string;
  complianceLabel?: "Compliant" | "Non compliant";
  responses?: string;
};

const DataRow = (props: DataRowProps) => {
  const {
    heading = "Heading",
    secondary = "Secondary",
    version = "1.0",
    statusLabel = "Active",
    department = "Dept",
    creator = "Steve",
    updated = "22/02/2022",
    due = "1 week",
    complianceLabel = "Compliant",
    responses,
  } = props;
  return (
    <div className="flex h-24 w-[2740px] shrink-0 items-center gap-4 rounded border border-neutral-6 bg-neutral-1 p-4 shadow-lg">
      <div className="shrink-0">
        <Cell_Heading
          width={200}
          heading={heading}
          secondaryLabel={secondary}
        />
      </div>
      <Cell_Badge heading="Version" value={version} width={80} />
      <Cell_Badge
        heading="Status"
        value={statusLabel}
        status={statusLabel == "Active" ? "success" : "danger"}
        width={100}
      />
      <Cell_Value heading="Department" value={department} width={100} />
      <Cell_Value heading="Creator" value={creator} width={120} />
      <Cell_Value heading="Updated" value={updated} width={100} />
      <Cell_Value heading="Due" value={due} width={80} />
      <Cell_Badge
        heading="Compliance"
        value={complianceLabel}
        status={complianceLabel == "Compliant" ? "success" : "danger"}
        width={150}
      />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
    </div>
  );
};

const tableData = [
  {
    heading: "Heading",
    secondary: "Secondary label",
    version: "1.0",
    statusLabel: "Active",
    department: "Shipping",
    creator: "Steven Jones",
    updated: "12/05/22",
    due: "14/06/23",
    complianceLabel: "Non compliant",
    responses: "None",
  },
  {
    heading: "Heading",
    secondary: "Secondary label",
    version: "1.0",
    statusLabel: "Active",
    department: "Shipping",
    creator: "Steven Jones",
    updated: "12/05/22",
    due: "14/06/23",
    complianceLabel: "Non compliant",
    responses: "None",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export const DataTable = () => {
  // const comp = useRef(null);
  // useIsomorphicLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "[data-listrow]",
  //         markers: true,
  //         start: "top center",
  //         scroller: "[data-contentPane]",
  //       },
  //     });
  //   }, comp);
  //   return () => ctx.revert();
  // }, []);
  return (
    <div className="flex flex-col gap-6 pb-40">
      <SectionDivider>Cell Heading</SectionDivider>
      <Cell_Heading heading="Table heading" />
      <Cell_Heading heading="Table heading" secondaryLabel="Secondary label" />
      <SectionDivider>Cell Value</SectionDivider>
      <Cell_Value value="Cell value" />
      <Cell_Value heading="Cell heading" value="Cell value" />
      <SectionDivider>Cell Badge</SectionDivider>
      <Cell_Badge value="Badge" status="success" />
      <Cell_Badge value="Badge" heading="Badged cell" status="success" />

      <SectionDivider>Data List Row</SectionDivider>
      <div
        className="-mr-[calc(var(--size-xs-s))] -ml-[var(--size-xs-s)] overflow-hidden"
        data-listrow
      >
        <div className="relative flex h-[3000px] w-fit flex-col gap-2 pb-6 pl-xs-s">
          <div data-header className="sticky top-0 bg-red-500">
            Header
          </div>
          {tableData.map((row, i) => {
            // @ts-ignore
            return <DataRow key={i} {...row} />;
          })}
          <div data-footer className="bg-blue-500">
            Footer
          </div>
        </div>
      </div>
    </div>
  );
};
