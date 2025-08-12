export default function Resume() {
  const getTitle = (title: string) => {
    return (
      <h3 className="relative w-fit text-2xl font-extrabold mb-6">
        <p className="relative pl-3 z-10">{title}</p>
        <span className="inline-block w-[calc(100%+10px)] h-[calc(100%+10px)] bg-green-600/20 absolute top-[-5px] left-[-5px]"></span>
      </h3>
    )
  }

  const getCodeArray = (codeArr: string[]) => {
    const res = <div></div>
    return res;
  }

  return (
    <section className="w-full">
      <div className="mb-2 mt-20">
        <h1 className="text-4xl font-extrabold mb-6">
          Hello, <br />
          I'm frontend engineer, green.
        </h1>
        <ul className="mb-8">
          <li className="mb-1">📍 Seoul, South Korea</li>
          <li className="mb-1">📧 devgrxxn@gmail.com</li>
          <li>📞 +82-10-8965-3007</li>
        </ul>
        <p className="font-light">
          Frontend Engineer with 3 years of experience building responsive, user-friendly web applications using React, TypeScript, and modern JavaScript frameworks.
          Skilled in collaborating with cross-functional teams, improving application performance, and delivering high-quality UI/UX experiences.
          Currently preparing to relocate to the UK on a Working Holiday visa, seeking opportunities to contribute to innovative projects.
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
                <span className="block">2024.11 ~ 2025.11</span>
                <span>프론트엔드실 대리</span>
              </p>
            </div>
            <dl>
              <dt className="font-semibold mb-1">
                [ 배스킨라빈스 관리자페이지 개발 ]
              </dt>
              <dd className="mb-6">
                <ul className="list-disc pl-4">
                  <li>배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자 페이지 개설</li>
                  <li>{getCodeArray(["React", "TypeScript", "React-Query", "Zustand", "react-hook-form", "yup"])}</li>
                </ul>
              </dd>
              <dt className="font-semibold mb-1">
                [ HY 한국 야쿠르트 홈페이지 개발 ]
              </dt>
              <dd className="mb-6">
                <ul className="list-disc pl-4">
                  <li>배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자 페이지 개설</li>
                  <li>Vue, Vuetify, Zustand, yup</li>
                </ul>
              </dd>
              <dt className="font-semibold mb-1">
                [ SK SIGNET 고도화 ]
              </dt>
              <dd className="mb-6">
                <ul className="list-disc pl-4">
                  <li>배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자 페이지 개설</li>
                  <li>Next.js, TypeScript, React-Query, Zustand, react-hook-form, yup</li>
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
              <dt className="font-semibold mb-1">
                [ 소프트웨어 판매 페이지 개발 ]
              </dt>
              <dd className="mb-6">
                <ul className="list-disc pl-4">
                  <li>배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자 페이지 개설</li>
                  <li>React, TypeScript, React-Query, Zustand, react-hook-form, yup</li>
                </ul>
              </dd>
              <dt className="font-semibold mb-1">
                [ AI ・ 건축 융합 솔루션 개발 ]
              </dt>
              <dd className="mb-6">
                <ul className="list-disc pl-4">
                  <li>배스킨라빈스 브랜드앱 출시와 맞춰 앱관리를 위한 관리자 페이지 개설</li>
                  <li>Vue, Vuetify, Zustand, yup</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <div className="line border my-16"></div>

      <div>
        {getTitle("🔩 Technical Skills.")}
        <ul>
          <li>Languages: JavaScript (ES6+), TypeScript, HTML5, CSS</li>
          <li>Frameworks & Libraries: React, Next.js, Redux, TailwindCSS</li>
          <li>Tools & Platforms: Git, Github, Jira, Figma, Webpack</li>
          <li>Testing: Jest, React Testing Library</li>
        </ul>
      </div>

      <div className="line border my-16"></div>

      <div>
        {getTitle("🧑‍🏫 Education & Certifications.")}
        <ul>
          <li className="mb-4">
            <p className="font-semibold">Korea Cyber University</p>
            <span className="block text-sm">Department of Software Engineering</span>
            <span className="block text-sm">2020.03 - 2022.02</span>
          </li>
          <li>
            <p className="font-semibold">Engineer Information Processing (National Technical Qualification)</p>
            <span className="text-sm">Human Resources Development Service of Korea (2023)</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
