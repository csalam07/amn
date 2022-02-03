import React, { useState } from "react";
import Tab from "@material-tailwind/react/Tab";
import TabList from "@material-tailwind/react/TabList";
import TabItem from "@material-tailwind/react/TabItem";
import TabContent from "@material-tailwind/react/TabContent";
import TabPane from "@material-tailwind/react/TabPane";
import FoodItems from "./FoodItems";

export default function Delete() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <Tab className="max-w-sm mx-auto">
      <TabList className="bg-foodie-first">
        <TabItem
          className={`${openTab === 1 ? "animate-pulse" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          ripple="light"
          href="tabItem"
        >
          Discover
        </TabItem>
        <TabItem
          className={`${openTab === 1 ? "animate-pulse" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          ripple="light"
          href="tabItem"
        >
          Profile
        </TabItem>
        <TabItem
          className={`${openTab === 1 ? "animate-pulse" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          ripple="light"
          href="tabItem"
        >
          Settings
        </TabItem>
      </TabList>

      <TabContent>
        <TabPane active={openTab === 1 ? true : false}>
          <FoodItems
            id="1"
            image="/images/pizza.png"
            title="pizza"
            description="A classic pizza with our custom sauce. 
                we also server with extra cheese"
            price="10.22"
          />
        </TabPane>
        <TabPane active={openTab === 2 ? true : false}>
          <FoodItems
            id="2"
            image="/images/burger.png"
            title="Burger"
            price="9.99"
            description="A classic burger with our custom sauce."
          />
        </TabPane>
        <TabPane active={openTab === 3 ? true : false}>
          <FoodItems
            id="3"
            image="/images/salad.png"
            title="Salad"
            price="10.22"
            description="A classic burger with our custom sauce."
          />
        </TabPane>
      </TabContent>
    </Tab>
  );
}
