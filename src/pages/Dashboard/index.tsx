import { useContext, useEffect } from "react";
import { CreateModal } from "../../components/CreateModal";
import { DashBoardNavBar } from "../../components/DashboardNavBar";
import { EditModal } from "../../components/EditModal";
import { Loader } from "../../components/Loader";
import { Technologies } from "../../components/Technologies";
import { WellcomeMessage } from "../../components/WellcomeMessage";
import { LoadingContext } from "../../providers/LoadingContext";
import { TechsContext } from "../../providers/TechsContext";
import { UserContext } from "../../providers/UserContext";
import { DashWrapper, LoaderWrapper } from "./styles";

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
      {isLoaded && userData ? (
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
