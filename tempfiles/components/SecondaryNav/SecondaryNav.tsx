import { clsx } from "clsx";
import { useState } from "react";

const BurgerMenu = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
    </svg>
  );
};

const NavItem = (props: any) => {
  const { active, breakP } = props;
  return (
    <div
      className={clsx(
        [
          "relative flex h-14 w-fit items-center px-4 font-display text-xl font-bold leading-tight",
        ],
        [active ? "text-primary-brand" : "cursor-pointer text-slate-10"]
      )}
    >
      Nav Item
      <div
        className={clsx(
          ["absolute bottom-0 left-0 right-0 h-[2px] bg-primary-brand"],
          [active ? "opacity-100" : "opacity-0"],
          [
            breakP == "sm"
              ? "max-sm:hidden"
              : breakP == "md"
              ? "max-md:hidden"
              : "max-lg:hidden",
          ]
        )}
      />
    </div>
  );
};

export const SecondaryNav = ({ children, breakP }: any) => {
  const [navOpen, toggleNavOpen] = useState(false);
  return (
    <div className={clsx(["relative border-b border-slate-8"])}>
      <div
        className={clsx(
          ["w-10 p-2"],
          [
            breakP == "sm"
              ? "sm:hidden"
              : breakP == "md"
              ? "md:hidden"
              : "lg:hidden",
          ]
        )}
        onClick={() => toggleNavOpen(!navOpen)}
      >
        <BurgerMenu />
      </div>
      <div
        className={clsx(
          ["absolute left-0 right-0 flex-wrap"],
          [
            breakP == "md"
              ? "md:static md:flex max-md:bg-white max-md:[&>*]:w-full"
              : breakP == "sm"
              ? "sm:static sm:flex max-sm:bg-white max-sm:[&>*]:w-full"
              : "lg:static lg:flex max-lg:bg-white max-lg:[&>*]:w-full",
          ],
          [!navOpen && "hidden"]
        )}
      >
        <NavItem breakP={breakP} active />
        <NavItem breakP={breakP} />
        <NavItem breakP={breakP} />
        <NavItem breakP={breakP} />
        <NavItem breakP={breakP} />
      </div>
    </div>
  );
};
