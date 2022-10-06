const customStyle = {
  control: (base) => ({
    ...base,
    width: "100%",
    height: "2.375rem",
    backgroundColor: " #343B41",
    fontSize: "0.813rem",
    color: "#868E96",
    boxShadow: "none",
    border: "none",
    "@media (min-width: 400px)": {
      fontSize: "1rem",
    },
    "@media (min-width: 760px)": {
      height: "4rem",
      fontSize: "1.3rem",
    },
    "@media (min-width: 1100px)": {
      height: "3rem",
      fontSize: "1rem",
    },
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
    "@media (min-width: 400px)": {
      fontSize: "1rem",
    },
    "@media (min-width: 760px)": {
      height: "4rem",
      fontSize: "1.3rem",
    },
    "@media (min-width: 1100px)": {
      height: "3rem",
      fontSize: "1rem",
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
    "@media (min-width: 400px)": {
      fontSize: "1rem",
    },
    "@media (min-width: 760px)": {
      fontSize: "1.3rem",
    },
    "@media (min-width: 1100px)": {
      fontSize: "1rem",
    },
  }),
};

export default customStyle;
