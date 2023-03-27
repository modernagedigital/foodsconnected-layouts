import { useState } from "react";
import { clsx } from "clsx";
import { useMediaQuery } from "usehooks-ts";
import { useLayoutEffect } from "react";
import { text } from "stream/consumers";

// ICONS
const ChevronIcon = () => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.29289 3.29289C5.68342 2.90237 6.31658 2.90237 6.70711 3.29289L10.7071 7.29289C11.0976 7.68342 11.0976 8.31658 10.7071 8.70711L6.70711 12.7071C6.31658 13.0976 5.68342 13.0976 5.29289 12.7071C4.90237 12.3166 4.90237 11.6834 5.29289 11.2929L8.58579 8L5.29289 4.70711C4.90237 4.31658 4.90237 3.68342 5.29289 3.29289Z"
        fill="#006ADC"
      />
    </svg>
  );
};

// SettingsMenu
const SettingsMenu = ({ sidebarOpen }: any) => {
  const settingsItems = [
    {
      label: "Search",
    },
    {
      label: "My tasks",
    },
    {
      label: "Settings",
    },
    {
      label: "Notifications",
    },
    {
      label: "Steven Jones",
    },
  ];
  return (
    <div>
      <div>
        {settingsItems.map((item, i) => {
          return (
            <div
              key={i}
              className={clsx([
                "hidden",
                "h-12",
                "items-center",
                "bg-slate-200",
                "short:flex",
                "tall:h-14",
                "shrink-0",
                "relative",
                "cursor-pointer",
              ])}
            >
              <div
                className={clsx(
                  [
                    "flex h-full w-full cursor-pointer items-center gap-2 overflow-hidden px-5",
                  ],
                  [!sidebarOpen && "[&+[data-popover]]:hover:block"]
                )}
              >
                <div className="rounded-m grid h-10 w-10 shrink-0 place-items-center">
                  <div className="aspect-square w-6 bg-stone-800" />
                </div>
                <div
                  className={clsx(
                    ["whitespace-nowrap", "transition-opacity"],
                    [sidebarOpen ? "opacity-100" : "opacity-0"]
                  )}
                >
                  {item.label}
                </div>
              </div>
              <Popover
                text={item.label}
                rest={
                  "absolute whitespace-nowrap right-0 top-[50%] translate-x-[calc(100%+4px)] translate-y-[-50%] hidden"
                }
              />
            </div>
          );
        })}
      </div>
      <div className="h-8 w-8 bg-red-700 short:hidden" />
    </div>
  );
};

type PopoverProps = {
  text: string;
  rest?: any;
};
const Popover = (props: PopoverProps) => {
  const { text, rest } = props;
  return (
    <div
      data-popover
      className={clsx(
        `z-10 w-fit rounded bg-slate-12 px-2 py-1 text-white ${rest}`
      )}
    >
      {text}
      <div className="absolute left-0 top-1/2 aspect-square w-2 translate-x-[-50%] translate-y-[-50%] rotate-45 bg-slate-12" />
    </div>
  );
};

// SIDEBAR Content
const SidebarContent = ({ sidebarOpen }: any) => {
  // const navItems = Array.from({ length: 7 }, (_, i) => i + 1);
  const navItems = [
    {
      label: "Dashboard",
      active: true,
    },
    {
      label: "Product Checks",
    },
    {
      label: "Supplier Approval",
    },
    {
      label: "Internal Specification",
    },
    {
      label: "Nav Item 5",
    },
    {
      label: "Nav Item 6",
    },
    {
      label: "Nav Item 7",
    },
  ];

  return (
    <div className="flex h-full min-h-[568px] flex-col">
      {/* TOP Block */}
      <div className="h-[88px] bg-white"></div>

      <div className="mb-4 flex flex-1 flex-col justify-between">
        {/* Main menu */}
        <div>
          {navItems.map((item, i) => {
            return (
              <div key={i} className={clsx(["relative h-14 tall:h-16"])}>
                <div
                  className={clsx(
                    [
                      "overflow-hidd en flex h-full w-full items-center gap-3 px-6 transition-all",
                    ],
                    [!sidebarOpen && "[&+[data-popover]]:hover:block"],
                    [
                      item.active
                        ? "border-y border-y-blue-5 bg-blue-2 text-blue-11"
                        : "cursor-pointer text-indigo-12 hover:bg-blue-2 hover:text-blue-11",
                    ]
                  )}
                >
                  <div className="h-8 w-8 shrink-0 rounded-full bg-gray-400" />
                  <div
                    className={clsx(
                      [
                        "w-full whitespace-nowrap font-display font-bold leading-tight transition-opacity",
                      ],
                      [!sidebarOpen ? "opacity-0" : "opacity-100"]
                    )}
                  >
                    {item.label}
                  </div>
                </div>
                <Popover
                  text={item.label}
                  rest={
                    "absolute whitespace-nowrap right-0 top-[50%] translate-x-[calc(100%+4px)] translate-y-[-50%] hidden duration-[200ms]"
                  }
                />
              </div>
            );
          })}
        </div>

        <SettingsMenu sidebarOpen={sidebarOpen} />
      </div>
    </div>
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
            className="absolute -right-[20px] top-[80px] z-10 grid h-10 w-10 cursor-pointer place-items-center"
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

          <SidebarContent sidebarOpen={sidebarOpen} />
        </div>
        <div className="h-full flex-1 overflow-x-hidden overflow-y-scroll p-xs-s pl-[calc(80px+var(--size-xs-s))] lg:p-xs-s">
          {children}
        </div>
      </div>
    </div>
  );
};
