export default function Resume() {
  return (
    <section className="w-ful ">
      <div className="mb-2">
        <h1 className="text-3xl font-extrabold mb-4">
          안녕하세요, <br />
          프론트엔드 개발자 전영주입니다.
        </h1>
        <p className="font-light">
          React, Typescript 기반의 3년차 프론트엔드 개발자입니다. <br />
          ~~~을 해왔습니다.
          <br />
          ~~~를 하기 위해 노력하고 있습니다.
        </p>
      </div>
      <div className="">
        <h3 className="text-2xl font-extrabold">Careers.</h3>
        <ul>
          <li className="grid grid-cols-2 gap-3 mb-2">
            <div>
              <h6 className="text-xl font-bold">XT</h6>
              <p className="text-xs font-medium">
                <span className="block">2024.11 ~ 2025.11</span>
                <span>프론트엔드실 대리</span>
              </p>
            </div>
            <ul>
              <li>배스킨라빈스 관리자페이지 개발</li>
              <li>HY 한국 야쿠르트 홈페이지 개발</li>
              <li>SK SIGNET 고도화</li>
            </ul>
          </li>
          <li>
            <div>
              <h6>직스 테크놀로지</h6>
              <p>
                <span>2022.08 ~ 2024.07</span>
                <span>기업부설 연구소 프론트엔드 엔지니어</span>
              </p>
            </div>
            <ul>
              <li>소프트웨어 판매 페이지 개발</li>
              <li>AI ・ 건축 융합 솔루션 개발</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Skills</h3>
      </div>
      <div>
        <h3>Education.</h3>
      </div>
    </section>
  );
}
