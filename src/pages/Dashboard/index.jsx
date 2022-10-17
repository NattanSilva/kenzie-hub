import { useContext, useEffect, useState } from "react";
import { DashBoardNavBar } from "../../components/DashboardNavBar";
import { Loader } from "../../components/Loader";
import { WellcomeMessage } from "../../components/WellcomeMessage";
import { DashWrapper, LoaderWrapper } from "./styles";
import { LoadingContext } from "../../providers/LoadingContext";
import { UserContext } from "../../providers/UserContext";
import { Technologies } from "../../components/Technologies";
import { TechsContext } from "../../providers/TechsContext";
import { CreateModal } from "../../components/CreateModal";
import { EditModal } from "../../components/EditModal";

export const DashBoard = () => {
  const { isLoaded, setIsLoaded } = useContext(LoadingContext);
  const { getUserData, userData } = useContext(UserContext);
  const { activeModal, modalType } = useContext(TechsContext);
  useEffect(() => {
    getUserData();
    setIsLoaded(true);
  }, []);

  return (
    <DashWrapper>
      {isLoaded && userData.length !== 0 ? (
        <>
          <DashBoardNavBar />
          <WellcomeMessage />
          <Technologies />
        </>
      ) : (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {activeModal && modalType === "create" && <CreateModal />}
      {activeModal && modalType === "edit" && <EditModal />}
    </DashWrapper>
  );
};
