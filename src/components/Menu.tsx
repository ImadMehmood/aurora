import { Link } from "react-router-dom";
import { menu } from "./sideitems";

const Menu : React.FC = () => {
  return (
    <div className=" bg-white h-screen pt-4 text-menue w-full ">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="flex justify-start bg-white items-center gap-4 px-3 py-4" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <h4 className=" font-light">{listItem.title}</h4>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;