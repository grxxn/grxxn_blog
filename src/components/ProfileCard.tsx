"use client";

import ProfileCardBtns from "./ProfileCardBtns";
import useIsMobile from "@/hooks/useIsMobile";

const ProfileCard = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex items-center">
      {
        !isMobile && (
          <div className="rounded-full bg-green-100 size-[180px] mr-5 flex justify-center items-center">
            PHOTO
          </div>
        )
      }
      <div>
        <h2 className="font-black text-3xl">GRXXN</h2>
        <span className="text-gray-500 text-xs">@dev_grxxn</span>
        <p className="text-sm">
          Front Engineer
          {isMobile ? <br /> : " | "}
          Specializing in React & TypeScript
        </p>
        <ProfileCardBtns />
      </div>
    </div>
  );
};

export default ProfileCard;
