const HomeIcon = () => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7639 7.2647C16.0444 7.50516 16.0806 7.92736 15.8417 8.20976C15.6028 8.49216 15.1833 8.52851 14.9028 8.28805L14.2222 7.70647V12.9211C14.2222 14.157 13.2278 15.158 12 15.158H4C2.77278 15.158 1.77778 14.157 1.77778 12.9211V7.70647L1.09805 8.28805C0.817221 8.52851 0.396665 8.49216 0.158332 8.20976C-0.0798623 7.92736 -0.0453901 7.50516 0.23536 7.2647L7.56944 1.00154C7.81667 0.789038 8.18333 0.789038 8.43055 1.00154L15.7639 7.2647ZM4 13.8158H5.33333V9.56585C5.33333 8.94792 5.83055 8.44743 6.44444 8.44743H9.55555C10.1694 8.44743 10.6667 8.94792 10.6667 9.56585V13.8158H12C12.4917 13.8158 12.8889 13.416 12.8889 12.9211V6.56848L8 2.39313L3.11111 6.56848V12.9211C3.11111 13.416 3.50833 13.8158 4 13.8158ZM6.66667 13.8158H9.33333V9.78953H6.66667V13.8158Z"
        fill="#0081F1"
      />
    </svg>
  );
};

const Chevron = () => {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.79289 3.29289C6.18342 2.90237 6.81658 2.90237 7.20711 3.29289L11.2071 7.29289C11.5976 7.68342 11.5976 8.31658 11.2071 8.70711L7.20711 12.7071C6.81658 13.0976 6.18342 13.0976 5.79289 12.7071C5.40237 12.3166 5.40237 11.6834 5.79289 11.2929L9.08579 8L5.79289 4.70711C5.40237 4.31658 5.40237 3.68342 5.79289 3.29289Z"
        fill="#5EB0EF"
      />
    </svg>
  );
};

export const Breadcrumb = (props: any) => {
  const { navData } = props;
  return (
    <div className="flex items-center gap-1">
      <div className="w-4">
        <HomeIcon />
      </div>
      {navData.map((nav: any, i: any) => {
        return (
          <div className="flex flex-shrink-0 items-center gap-1">
            <div className="w-4">
              <Chevron />
            </div>
            <div
              key={i}
              className="flex-shrink-0 font-semibold leading-tight text-indigo-12"
            >
              {nav.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Breadcrumb.defaultProps = {
  navData: [
    {
      label: "Nav item 1",
    },
    {
      label: "Nav item 2",
    },
  ],
};
