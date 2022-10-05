const customStyle = {
  control: (base) => ({
    ...base,
    fontFamilly: "sans-serif",
    width: "100%",
    height: "2.375rem",
    backgroundColor: " #343B41",
    fontSize: "0.813rem",
    color: "#868E96",
    boxShadow: "none",
    border: "none",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#868E96",
    "&:hover": {
      color: "#868E96",
    },
  }),
  option: (base) => ({
    ...base,
    width: "100%",
    height: "2.375rem",
    backgroundColor: "transparent",
    backgroundColor: " #343B41",
    fontSize: "0.813rem",
    color: "#868E96",
    borderBottom: "1px solid ##868E96",
    trasition: "0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#868e963b",
    },
  }),
  menu: (base) => ({
    ...base,
    width: "100%",
    backgroundColor: " #343B41",
    boxShadow: "none",
    border: "none",
  }),
  menuList: (base) => ({
    ...base,
    borderRadius: "4px",
  }),
  singleValue: (base) => ({
    ...base,
    fontSize: "0.813rem",
    color: "#FFFFFF",
  }),
};

export default customStyle;
