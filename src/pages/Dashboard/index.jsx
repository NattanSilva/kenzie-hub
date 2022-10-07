import { useEffect } from "react";
import { DashBoardNavBar } from "../../components/DashboardNavBar";
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
        </>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </DashWrapper>
  );
};
