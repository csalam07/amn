import Header from "./Header";
import { useSelector } from "react-redux";
import { selectTheme } from "../slices/themeSlice";

function layout({ children }) {
  const darkTheme = useSelector(selectTheme);
  return (
    <div
      className={` bg-white ${
        darkTheme && "invert transition duration-1000 ease-in"
      } transition duration-1000 ease-in`}
    >
      <Header />
      {children}
    </div>
  );
}

export default layout;
