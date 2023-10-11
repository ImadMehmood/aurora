import { Link } from "react-router-dom";
import { menu } from "./sideitems";
import { useState } from "react";

const Menu: React.FC = () => {
  const [showSetting, setShowSetting] = useState<boolean>(false);
  const [id, setID] = useState<number>(0);

  const hanldeOpen = (id: number) => {
    setShowSetting(!showSetting);
    setID(id);
  };
  return (
          <div className=" h-screen">

    <div className="bg-white  h-full pt-4 cursor-pointer text-menue ">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          {item?.listItems?.map((listItem) => (
            <div key={listItem?.id}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  hanldeOpen(listItem?.id);
                }}
                >
                 <div className="flex justify-start w-full bg-white items-center hover:bg-[#1E80B4]/10 gap-4 px-3 hover:text-[#1E80B4] py-4">
                  <img src={listItem?.icon} alt="" />


                  <Link to={listItem?.url} className="">{listItem?.title}</Link>
                  

                   <img
                    src={listItem?.icon1}
                    className={`float-right ml-auto w-6 ${
                      showSetting == true && id == 3
                      ? "rotate-180 transition-all"
                      : ""
                    }`}
                    />
                </div>
              </div>

              {showSetting &&
                id == 3 &&
                listItem?.nestedlist?.map((nestedItem) => (
                  <div
                    className="flex hover:text-[#1E80B4]  bg-white items-center hover:bg-[#1E80B4]/10  gap-4 px-12 py-2 transition-all "
                    key={nestedItem?.id}
                  >
                    <h4 className="font-light">{nestedItem?.title}</h4>
                  </div>
                ))}
            </div>
          ))}
        </div>
      ))}


      <div className="flex my-auto w-full py-4 px-5 font-light justify-start items-start flex-col gap-3">
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        <p>2023 copyright. all rights reserved</p>
         </div>
    </div>
          </div>

  );
};

export default Menu;
