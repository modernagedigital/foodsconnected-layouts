import { ReactNode } from "react";
import { JsxElement } from "typescript";
import clsx from "clsx";

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
};

const CellWrapper = (props: CellWrapperProps) => {
  const { headerSlot, contentSlot, isTall } = props;
  return (
    <div
      className={clsx([
        "flex w-fit flex-col justify-center gap-1 bg-slate-200 px-4 py-2",
        isTall ? "h-16" : "h-12",
      ])}
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

type CellProps = {
  doubled?: boolean;
};
type Cell_HeadingProps = {
  doubled?: boolean;
};

const Cell_Heading = (props: Cell_HeadingProps) => {
  const { doubled } = props;
  return (
    <>
      <CellWrapper
        isTall={doubled}
        headerSlot={
          <>
            <h4 className="font-text text-sm font-semibold leading-tighter">
              Value
            </h4>
          </>
        }
        contentSlot={
          doubled ? (
            <>
              <div className="flex gap-1">
                <Icon_File className="h-4 w-4" />
                <div className="font-text text-xs text-slate-400">
                  Secondary label
                </div>
              </div>
            </>
          ) : (
            false
          )
        }
      />
    </>
  );
};

const Cell_Value = (props: CellProps) => {
  const { doubled } = props;
  return (
    <>
      <CellWrapper
        isTall={doubled}
        headerSlot={
          <>
            <h4 className="font-text text-xs font-semibold text-slate-11">
              Heading label
            </h4>
          </>
        }
        contentSlot={
          doubled ? (
            <>
              <div className="flex gap-1">
                <div className="font-text text-sm text-slate-12">
                  Secondary label
                </div>
              </div>
            </>
          ) : (
            false
          )
        }
      />
    </>
  );
};

export const DataTable = () => {
  return (
    <div className="flex flex-col gap-6">
      <h3 className="mt-8">Cell Heading</h3>
      <Cell_Heading />
      <Cell_Heading doubled />
      <h3 className="mt-6">Cell Value</h3>
      <Cell_Value />
      <Cell_Value doubled />
    </div>
  );
};
