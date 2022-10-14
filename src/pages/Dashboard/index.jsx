import Api, { id } from "../../services/Api";
import { useContext, useEffect, useState } from "react";
import { DashBoardNavBar } from "../../components/DashboardNavBar";
import { InDevelopment } from "../../components/InDevelopment";
import { Loader } from "../../components/Loader";
import { WellcomeMessage } from "../../components/WellcomeMessage";
import { DashWrapper, LoaderWrapper } from "./styles";
import { toast } from "react-toastify";
import { LoadingContext } from "../../providers/LoadingContext";
import { UserContext } from "../../providers/UserContext";

export const DashBoard = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);
  const { getUserData, userData } = useContext(UserContext);
  useEffect(() => {
    getUserData();
    setIsLoaded(true)
  }, []);

  return (
    <DashWrapper>
      {isLoaded && userData.length !== 0 ? (
        <>
          <DashBoardNavBar />
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
