import "./App.css";
import TopNav from "./components/TopNav";
import Card from "./components/Card";
import DashBoard from "./components/DashBoard";
import { useState, useEffect } from "react";
import { Circles } from "react-loader-spinner";

function App() {
  const [group, setGroup] = useState("status");
  const [order, setOrder] = useState("priority");

  const [apiData, setApiData] = useState({});
  const [finalData, setFinalData] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment/"
      );
      const data = await res.json();
      setApiData(data);
    }
    fetchData();
  }, []);

  let user = false;
  let mySet = new Set();
  let arr = [],
    selectedData = [];

  useEffect(() => {
    function finalFetching() {
      // Intialization of groups and order

      let allTickets = apiData?.tickets;
      let allUser = apiData?.users;
     
      //  console.log(allTickets);

      if (group === "status") {
        allTickets?.forEach((elem) => {
          mySet.add(elem.status);
        });

        arr = [...mySet];

        arr.forEach((elem, index) => {
          let arr = allTickets.filter((fElem) => {
            return elem === fElem.status;
          });

          selectedData.push({
            title: elem,
            value: arr,
          });
        });
      } else if (group === "user") {
        user = true;
        allUser?.forEach((elem, index) => {
          arr = allTickets?.filter((Felem) => {
            return elem.id === Felem.userId;
          });

          selectedData.push({
            title: elem.name,
            value: arr,
          });
        });
      } else {
        let prior_list = ["No priority", "Low", "Medium", "High", "Urgent"];

        prior_list.forEach((elem, index) => {
          arr = allTickets?.filter((fElem) => {
            return index === fElem.priority;
          });

          selectedData.push({
            title: elem,
            value: arr,
          });
        });
      }

      if (order === "title") {
        selectedData.forEach((elem, index) => {
          console.log('before',elem);
          elem?.value?.sort((a, b) => a.title.localeCompare(b.title));
          console.log('after', elem);
        });
      }

      if (order === "priority") {
        selectedData.forEach((elem, index) => {
          elem?.value?.sort((a, b) => b.priority - a.priority);
        });
      }
    }
    finalFetching();
    setFinalData(selectedData);
    
  }, [apiData,group, order]);

  return (
    <>
      {finalData && finalData.length != 0 ? (
        <>
          <TopNav setGroup={setGroup} setOrder={setOrder} />
          <DashBoard finalData={finalData} />
        </>
      ) : (
        <div style={{display:"flex",justifyContent:'center',alignItems:'center',height:'100vh'}}>
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      )}
    </>
  );
}

export default App;
