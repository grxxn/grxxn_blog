import ProfileCardBtns from "./ProfileCardBtns";

const ProfileCard = () => {

  return (
    <div className="flex items-center py-3">
      <div className="rounded-full bg-green-100 size-[180px] mr-5 flex justify-center items-center">
        PHOTO
      </div>
      <div>
        <h2 className="font-black text-3xl">GRXXN</h2>
        <span className="text-gray-500 text-xs">@dev_grxxn</span>
        <p className="text-sm">Front Engineer | Specializing in React & TypeScript</p>
        <ProfileCardBtns />
      </div>
    </div>
  );
};

export default ProfileCard;
