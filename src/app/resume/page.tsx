import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Resume() {
  const getTitle = (title: string) => {
    return (
      <h3 className="relative w-fit text-2xl font-extrabold mb-9">
        <p className="relative pl-3 z-10">{title}</p>
        <span className="inline-block w-[calc(100%+10px)] h-[calc(100%+10px)] bg-green-600/20 absolute top-[-5px] left-[-5px]"></span>
      </h3>
    );
  };

  const getCodeArray = (codeArr: string[]) => {
    return (
      <div className="mb-3">
        {codeArr.map((code) => (
          <span
            key={code}
            className="inline-block px-2.5 py-1 mr-1.5 mb-1.5 text-sm font-medium font-monoCustom rounded bg-gray-100 text-gray-600 border border-gray-200"
          >
            {code}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="w-full">
      <div className="mb-2 mt-20">
        <h1 className="text-4xl font-extrabold mb-6">
          Hello, <br />
          I'm frontend engineer, green.
        </h1>
        <ul className="mb-8">
          <li className="mb-1">📧 devgrxxn@gmail.com</li>
          <li className="mb-1">📞 +82-10-8965-3007</li>
          <li className="flex items-center gap-2">
            <a href="https://github.com/grxxn" target="_blank">
              <FaGithubSquare size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/%EC%98%81%EC%A3%BC-%EC%A0%84-136b662b4/"
              target="_blank"
            >
              <FaLinkedin size={32} />
            </a>
          </li>
        </ul>
        <p className="font-light">
          Frontend Engineer with 3 years of experience building responsive,
          user-friendly web applications using React, TypeScript, and modern
          JavaScript frameworks. Skilled in collaborating with cross-functional
          teams, improving application performance, and delivering high-quality
          UI/UX experiences. Currently preparing to relocate to the UK on a
          Working Holiday visa, seeking opportunities to contribute to
          innovative projects.
          {/* React, Typescript 기반의 3년차 프론트엔드 개발자입니다. <br />
          ~~~을 해왔습니다.
          <br />
          ~~~를 하기 위해 노력하고 있습니다. */}
        </p>
      </div>

      <div className="line border my-16"></div>

      <div>
        {getTitle("💼 Work experience.")}
        <ul className="flex flex-col gap-9">
          <li className="grid grid-cols-[200px_auto] gap-3 mb-2">
            <div>
              <h6 className="text-xl font-bold">XT</h6>
              <p className="text-xs font-normal text-gray-600">
                <span className="block">2024.11 ~ 2026.05</span>
                <span>프론트엔드실 대리</span>
              </p>
            </div>
            <dl>
              <dt className="font-semibold text-base text-gray-800 mb-2">
                <span className="font-mono font-semibold text-sm text-gray-800 mr-2">
                  01.
                </span>
                한화 푸드테크 더플라자다이닝 사용자/관리자 구축
              </dt>
              <dd className="mb-6">
                {getCodeArray([
                  "React",
                  "TypeScript",
                  "Zustand",
                  "react-hook-form",
                  "yup",
                  "tailwindcss",
                  "shadcn",
                  "gsap",
                  "i18next",
                ])}
                <ul className="list-disc pl-4">
                  <li>호텔 다이닝 브랜드의 홈페이지/관리자 구축</li>
                  <li>
                    사용자 인터랙션 페이지 구현을 위한 스크롤 애니메이션 시스템
                    구축
                    <br />
                    GSAP + Lenis를 통합하는 LenisContext를 설계하고, 재사용
                    가능한 커스텀 훅 시리즈로 추상화
                  </li>
                  <li>
                    Clean Architecture 레이어 패턴을 적용해 관심사 분리 <br />
                    datasource/repository/usecase/mapper/model/dto/di/presentation
                  </li>
                  <li>관리자 1,2단계 인증(2FA) 로그인 플로우 구현</li>
                </ul>
              </dd>
              <dt className="font-semibold text-base text-gray-800 border-t border-gray-200 pt-4 mt-2 mb-2">
                <span className="font-mono font-semibold text-sm text-gray-800 mr-2">
                  02.
                </span>
                배스킨라빈스 관리자 페이지 구축 및 운영
              </dt>
              <dd className="mb-6">
                {getCodeArray([
                  "React",
                  "TypeScript",
                  "React-Query",
                  "Zustand",
                  "react-hook-form",
                  "yup",
                  "MUI",
                ])}
                <ul className="list-disc pl-4">
                  <li>
                    배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자
                    페이지 개설
                  </li>
                </ul>
              </dd>
              <dt className="font-semibold text-base text-gray-800 border-t border-gray-200 pt-4 mt-2 mb-2">
                <span className="font-mono font-semibold text-sm text-gray-800 mr-2">
                  03.
                </span>
                HY 한국 야쿠르트 홈페이지 개발
              </dt>
              <dd className="mb-6">
                {getCodeArray(["Vue", "Vuetify", "Zustand", "yup"])}
                <ul className="list-disc pl-4">
                  <li>
                    배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자
                    페이지 개설
                  </li>
                </ul>
              </dd>
              <dt className="font-semibold text-base text-gray-800 border-t border-gray-200 pt-4 mt-2 mb-2">
                <span className="font-mono font-semibold text-sm text-gray-800 mr-2">
                  04.
                </span>
                SK SIGNET 고도화
              </dt>
              <dd className="mb-6">
                {getCodeArray([
                  "Next.js",
                  "TypeScript",
                  "React-Query",
                  "Zustand",
                  "react-hook-form",
                  "yup",
                ])}
                <ul className="list-disc pl-4">
                  <li>
                    배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자
                    페이지 개설
                  </li>
                </ul>
              </dd>
            </dl>
          </li>
          <li className="grid grid-cols-[200px_auto] gap-3 mb-2">
            <div>
              <h6 className="text-xl font-bold">직스 테크놀로지</h6>
              <p className="text-xs font-normal text-gray-600">
                <span className="block">2022.08 ~ 2024.07</span>
                <span>기업부설 연구소 프론트엔드 엔지니어</span>
              </p>
            </div>
            <dl>
              <dt className="font-semibold text-base text-gray-800 mb-2">
                <span className="font-mono font-semibold text-sm text-gray-800 mr-2">
                  01.
                </span>
                소프트웨어 판매 페이지 개발
              </dt>
              <dd className="mb-6">
                {getCodeArray([
                  "React",
                  "TypeScript",
                  "React-Query",
                  "Zustand",
                  "react-hook-form",
                  "yup",
                ])}
                <ul className="list-disc pl-4">
                  <li>
                    배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자
                    페이지 개설
                  </li>
                </ul>
              </dd>
              <dt className="font-semibold text-base text-gray-800 border-t border-gray-200 pt-4 mt-2 mb-2">
                <span className="font-mono font-semibold text-sm text-gray-800 mr-2">
                  02.
                </span>
                AI ・ 건축 융합 솔루션 개발
              </dt>
              <dd className="mb-6">
                {getCodeArray([
                  "React",
                  "TypeScript",
                  "React-Query",
                  "Zustand",
                  "react-hook-form",
                  "yup",
                ])}
                <ul className="list-disc pl-4">
                  <li>
                    배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자
                    페이지 개설
                  </li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <div className="line border my-16"></div>

      <div>
        {getTitle("🔩 Technical Skills.")}
        <ul className="flex flex-col gap-3">
          <li className="flex items-start gap-3">
            <span className="font-monoCustom font-semibold w-48 shrink-0 text-sm text-gray-800 pt-1">
              Languages
            </span>
            {getCodeArray(["TypeScript", "React.js", "Next.js"])}
          </li>
          <li className="flex items-start gap-3">
            <span className="font-monoCustom font-semibold w-48 shrink-0 text-sm text-gray-800 pt-1">
              Frameworks & Libraries
            </span>
            {getCodeArray(["TailwindCSS", "shadcn"])}
          </li>
          <li className="flex items-start gap-3">
            <span className="font-monoCustom font-semibold w-48 shrink-0 text-sm text-gray-800 pt-1">
              Tools & Platforms
            </span>
            {getCodeArray(["Git", "Jira", "Figma"])}
          </li>
          <li className="flex items-start gap-3">
            <span className="font-monoCustom font-semibold w-48 shrink-0 text-sm text-gray-800 pt-1">
              Testing
            </span>
            {getCodeArray(["Jest", "React Testing Library", "Playwright"])}
          </li>
        </ul>
      </div>

      <div className="line border my-16"></div>

      <div>
        {getTitle("🧑‍🏫 Education & Certifications.")}
        <ul>
          <li className="mb-4">
            <p className="font-semibold">고려사이버대학교</p>
            <span className="block text-sm">소프트웨어공학과</span>
            <span className="block text-sm">2020.03 - 2022.02</span>
          </li>
          <li>
            <p className="font-semibold">정보처리기사</p>
            <span className="text-sm">2023</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
