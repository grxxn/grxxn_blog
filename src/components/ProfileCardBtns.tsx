"use client";
import Link from "next/link";
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
      <button
        type="button"
        onClick={handleCopyEmail}
        className="flex gap-1 rounded-md p-2 bg-green-700"
      >
        <CiMail color="white" />
        <span className="text-white text-xs">Mail</span>
      </button>
      <Link
        href="https://github.com/grxxn"
        target="_blank"
        className="flex gap-1 rounded-md p-2 bg-green-700"
      >
        <FaGithub color="white" />
        <span className="text-white text-xs">Github</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/%EC%98%81%EC%A3%BC-%EC%A0%84-136b662b4/"
        target="_blank"
        className="flex gap-1 rounded-md p-2 bg-green-700"
      >
        <FaLinkedin color="white" />
        <span className="text-white text-xs">LinkedIn</span>
      </Link>
    </div>
  )
}

export default ProfileCardBtns