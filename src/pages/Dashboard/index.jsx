import Api, { id } from "../../services/Api";
import { useEffect, useState } from "react";
import { DashBoardNavBar } from "../../components/DashboardNavBar";
import { InDevelopment } from "../../components/InDevelopment";
import { Loader } from "../../components/Loader";
import { WellcomeMessage } from "../../components/WellcomeMessage";
import { DashWrapper, LoaderWrapper } from "./styles";
import { set } from "react-hook-form";
import { toast } from "react-toastify";

export const DashBoard = ({ isLoaded, setIsLoaded }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function getUserData() {
      await Api.get(`/users/${id}`)
        .then((res) => {
          setUserData(res.data);
          setIsLoaded(true);
        })
        .catch((err) => {
          toast.error(`Falha: ${err.message}`);
        });
    }
    getUserData();
  }, []);

  return (
    <DashWrapper>
      {isLoaded && userData.length !== 0 ? (
        <>
          <DashBoardNavBar setIsLoaded={setIsLoaded} />
          <WellcomeMessage userData={userData} />
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
