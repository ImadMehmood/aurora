import React from "react";

import { logo, logout, notification, search, setting } from "../assets";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const MainNavbar: React.FC = () => {
  const navigate = useNavigate();

   const hadleLogout = () =>{
          navigate("/")
          toast(
            "You have been logged out",
            {
              duration: 6000,
            }
          );
   }

  return (
    <div className="bg-white w-full h-full flex justify-between items-center py-2 px-12 ">
      <div className="h-full">
        <img src={logo} alt="logo" className=" w-16 object-cover object-center " />
      </div>

      <div className=" mr-[30%] flex justify-center items-center gap-12">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <div className="w-[400px]">
          <Input
            isClearable
            radius="full"
            classNames={{
              input: [
                "bg-transparent",
                "text-black",
                "w-full",
                "py-8",
                "placeholder:text-black",
              ],
            }}
            placeholder="  search"
            fullWidth={true}
            startContent={<img src={search} alt="search" />}
          />
        </div>
      </div>

      <div className=" flex justify-center items-center gap-6 h-full">
        <Badge content="99+" shape="circle" color="danger">
          <Button
            radius="full"
            isIconOnly
            aria-label="more than 99 notifications"
            variant="light"
          >
            <img src={notification} alt="notification" className="w-12" />
          </Button>
        </Badge>
        <Button
          radius="full"
          isIconOnly
          aria-label="more than 99 notifications"
          variant="light"
        >
          <img src={setting} alt="notification" className="w-8" />
        </Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              color="warning"
              as="button"
              className="transition-transform"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <div className="flex gap-4 justify-start items-center">
                <Avatar
                  className="transition-transform"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <div className="flex flex-col justify-start items-start ">
                  <p className="font-semibold">Admin Name</p>
                  <p className="  capitalize cursor-pointer hover:text-purple">view profile</p>
                </div>
              </div>
            </DropdownItem>
            <DropdownItem key="settings" >My Settings</DropdownItem>

            <DropdownItem key="logout" color="danger">
              <div className="flex justify-start items-center gap-2">
                <img src={logout} alt="logout" className="w-5" />

                <div onClick={(e) => {e.stopPropagation(); hadleLogout()}} className=" ">Log Out</div>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>{" "}
      </div>
    </div>
  );
};

export default MainNavbar;
