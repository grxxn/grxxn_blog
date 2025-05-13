import React from "react";

const ProfileCard = () => {
  return (
    <div className="border rounded-xl w-56 px-3 pt-4 pb-7 h-auto">
      <div className="bg-green-50 rounded-xl text-green-600 h-52 flex justify-center items-center mb-3 border border-green-600">
        PHOTO
      </div>
      <div className="text-center text-sm">
        <p className="font-bold">Jeon Young Joo</p>
        <p className="mb-2">(Grxxn)</p>
        <p className="text-xs">
          Junior Frontend Developer, <br />
          React, Next.js, TypeScript
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
