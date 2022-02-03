import FoodItems from "./FoodItems";
import Button from "@material-tailwind/react/Button";
import Delete from "./Delete";
import Slide from "react-reveal/Slide";
import config from "react-reveal/globals";
import { useState } from "react";

config({ ssrFadeout: true });

function MenuSection() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="flex flex-col" id="menu">
      <div className="mb-16 flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
        <h3 className="text-foodie-first text-md md:text-lg font-serif capitalize">
          Menu
        </h3>
        <h2 className="text-3xl md:text-6xl font-black font-serif capitalize">
          PopularDishes
        </h2>
        <p className="text-center text-xs md:text-sm font-sans">
          Sed tincidunt sapien in augue aliquet ultricies. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Quisque blandit tortor nunc, in
          consectetur justo pharetra vel.
        </p>
      </div>
      <div className="grid space-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] self-center mx-4 gap-6 mb-10">
        <FoodItems
          id="1"
          image="/images/pizza.png"
          title="pizza"
          description="A classic pizza with our custom sauce. 
           we also server with extra cheese"
          price="10.22"
        />
        <FoodItems
          id="2"
          image="/images/burger.png"
          title="Burger"
          price="9.99"
          description="A classic burger with our custom sauce."
        />
        <FoodItems
          id="3"
          image="/images/salad.png"
          title="Salad"
          price="10.22"
          description="A classic burger with our custom sauce."
        />
      </div>

      <Slide top bottom when={showMore}>
        <div
          className={` ${
            showMore
              ? "grid space-y-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] self-center mx-4 gap-6 mt-16"
              : "hidden"
          }`}
        >
          <FoodItems
            id="1"
            image="/images/pizza.png"
            title="pizza"
            description="A classic pizza with our custom sauce. 
           we also server with extra cheese"
            price="10.22"
          />
          <FoodItems
            id="2"
            image="/images/burger.png"
            title="Burger"
            price="9.99"
            description="A classic burger with our custom sauce."
          />
          <FoodItems
            id="3"
            image="/images/salad.png"
            title="Salad"
            price="10.22"
            description="A classic burger with our custom sauce."
          />
        </div>
      </Slide>
      <div className={`mx-auto ${showMore && "hidden"}`}>
        <Button
          className=""
          color="deepOrange"
          buttonType="filled"
          rounded={true}
          size="lg"
          ripple="light"
          onClick={() => setShowMore(!showMore)}
        >
          View More
        </Button>
      </div>
    </section>
  );
}

export default MenuSection;
