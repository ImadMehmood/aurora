import React from "react";

const NewUser: React.FC = () => {
  return (
    <div className="max-w-[250px] w-full bg-white newuser p-5">
      <h2 className="text-xl pb-7">New User</h2>
      <div className="flex justify-between items-center ">
        <h2 className="text-3xl">520</h2>
        <h2 className="text-lg font-light">Past 30 days</h2>
      </div>
    </div>
  );
};

export default NewUser;
