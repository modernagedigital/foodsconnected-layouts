import { useState } from "react";
import { clsx } from "clsx";
import { useMediaQuery } from "usehooks-ts";
import { useLayoutEffect } from "react";

const ChevronIcon = () => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.29289 3.29289C5.68342 2.90237 6.31658 2.90237 6.70711 3.29289L10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L8.58579 8L5.29289 4.70711C4.90237 4.31658 4.90237 3.68342 5.29289 3.29289Z"
        fill="#006ADC"
      />
    </svg>
  );
};

export const AppShell = ({ children }: any) => {
  const matches = useMediaQuery("(max-width: 1024px)");
  const [sidebarOpen, toggleSidebarOpen] = useState(true);
  const [buttonClicked, toggleButtonClicked] = useState(false);

  useLayoutEffect(() => {
    if (!buttonClicked) {
      if (matches) {
        toggleSidebarOpen(false);
      } else {
        toggleSidebarOpen(true);
      }
    }
  }, [matches]);
  return (
    <div className="h-screen bg-slate-3">
      <div className="flex h-full">
        <div
          className={clsx(
            [
              "absolute z-20 h-full border-r border-slate-7 bg-white shadow-lg transition-all lg:relative ",
            ],
            [sidebarOpen ? "w-[280px]" : "w-[80px]"]
          )}
        >
          {/* Chevron */}
          <div
            className="absolute -right-[20px] top-[80px] grid h-10 w-10 cursor-pointer place-items-center"
            onClick={() => {
              toggleSidebarOpen(!sidebarOpen);
              toggleButtonClicked(true);
            }}
          >
            <div className="grid aspect-square w-7 place-items-center rounded-full border border-slate-7 bg-white">
              <div
                className={clsx(
                  ["h-4 w-4"],
                  [sidebarOpen ? "rotate-180" : "rotate-0"]
                )}
              >
                <ChevronIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full flex-1 overflow-x-hidden overflow-y-scroll p-xs-s pl-[calc(80px+var(--size-xs-s))] lg:p-xs-s">
          {children}
        </div>
      </div>
    </div>
  );
};
