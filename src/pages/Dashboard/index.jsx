import { useEffect } from "react";
import { DashBoardNavBar } from "../../components/DashboardNavBar";
import { InDevelopment } from "../../components/InDevelopment";
import { Loader } from "../../components/Loader";
import { WellcomeMessage } from "../../components/WellcomeMessage";
import { DashWrapper, LoaderWrapper } from "./styles";

export const DashBoard = ({ isLoaded, setIsLoaded }) => {
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <DashWrapper>
      {isLoaded ? (
        <>
          <DashBoardNavBar setIsLoaded={setIsLoaded} />
          <WellcomeMessage />
          <InDevelopment />
        </>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </DashWrapper>
  );
};
