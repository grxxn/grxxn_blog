"use client";
import { CiMail } from "react-icons/ci"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const ProfileCardBtns = () => {
  const handleCopyEmail = async () => {
    const email = "devgrxxn@gmail.com"

    try {
      await navigator.clipboard.writeText(email);
      alert('📋 이메일이 복사되었어요!')
    } catch (err) {
      console.error("🎯 이메일 복사 실패")
    }
  }

  return (
    <div className="mt-3 flex gap-2">
      <button type="button" onClick={handleCopyEmail} className="flex gap-1 rounded-md p-2 bg-green-700">
        <CiMail color="white" />
        <span className="text-white text-xs">Mail</span>
      </button>
      <button type="button" className="flex gap-1 rounded-md p-2 bg-green-700">
        <FaGithub color="white" />
        <span className="text-white text-xs">Github</span>
      </button>
      <button type="button" className="flex gap-1 rounded-md p-2 bg-green-700">
        <FaLinkedin color="white" />
        <span className="text-white text-xs">LinkedIn</span>
      </button>
    </div>
  )
}

export default ProfileCardBtns