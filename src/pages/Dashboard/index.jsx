import { DashBoardNavBar } from "../../components/DashboardNavBar";
import { WellcomeMessage } from "../../components/WellcomeMessage";
import { DashWrapper } from "./styles";

export const DashBoard = () => {
  return (
    <DashWrapper>
      <DashBoardNavBar />
      <WellcomeMessage />
    </DashWrapper>
  );
};
