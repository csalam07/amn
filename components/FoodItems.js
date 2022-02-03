import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Tilt from "react-tilt";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";
import { addToBasket } from "../slices/basketSlice";

function FoodItems({ image, title, description, price, id }) {
  const darkTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const addDishTOShoppingList = () => {
    const dish = {
      id,
      title,
      price,
      description,
      image,
      quantity: 1,
    };
    dispatch(addToBasket(dish));
  };

  return (
    <Card className="shadow-2xl max-w-md">
      <Tilt>
        <CardImage
          src={image}
          alt="Card Image"
          className={`${
            darkTheme
              ? "invert transition duration-1000 ease-in"
              : "invert-0 transition duration-1000 ease-in-out"
          }`}
        />
      </Tilt>

      <CardBody>
        <H6 color="gray">{title}</H6>
        <Paragraph color="gray">{description}</Paragraph>
      </CardBody>

      <CardFooter className="flex items-center justify-between">
        <Button
          buttonType="link"
          rounded={true}
          color="deepOrange"
          size="lg"
          ripple="light"
        >
          $ {price}
        </Button>
        <Button
          color="deepOrange"
          buttonType="filled"
          rounded={true}
          size="lg"
          ripple="light"
          onClick={addDishTOShoppingList}
        >
          Order
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FoodItems;
