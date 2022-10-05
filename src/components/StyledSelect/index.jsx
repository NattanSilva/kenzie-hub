import Select from "react-select";
import customStyle from "./styles";

const StyledSelect = () => {
  const options = [
    { label: "Primeiro Módulo", value: "Primeiro Módulo" },
    { label: "Segundo Módulo", value: "Segundo Módulo" },
    { label: "Terceiro Módulo", value: "Terceiro Módulo" },
    { label: "Quarto Módulo", value: "Quarto Módulo" },
    { label: "Quinto Módulo", value: "Quinto Módulo" },
    { label: "Sexto Módulo", value: "Sexto Módulo" },
  ];

  return (
    <Select
      styles={customStyle}
      options={options}
      isSearchable={false}
      closeMenuOnSelect={true}
      placeholder="Primeiro Módulo"
    />
  );
};

export default StyledSelect;
