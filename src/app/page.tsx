"use client";
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOutputText(`수정된 텍스트: ${inputText}`);
  };
//bg-gradient-to-br from-cyan-100 to-teal-100
//bg-cover bg-center bg-no-repeat bg-blend-overlay
  return (
    <div className="min-h-screen bg-white py-4 px-16">
      <header className="flex justify-between items-center mb-2">
        <div className="flex items-center justify-between space-x-2">
          <Image src="/qfm.svg" alt="Logo" width={150} height={100} />
          <span className="text-lg text-black font-semibold">우리말 바른말</span>
        </div>
        <button className="bg-teal-500 hover:cursor-pointer text-white px-4 py-2 rounded-full text-sm">
          어디서나 사용해보세요 - 설치하기
        </button>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="bg-[url('/background.png')] bg-cover rounded-xl shadow-lg pt-16 p-6 px-16 mb-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-black">더이상 </span>
            <span className="text-red-400">맞춤법</span>
            <span className="text-black">으로 스트레스 받지 마세요</span>
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-sm">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <textarea
                  placeholder="교정을 원하는 문장이나 문단을 입력해주세요"
                  className="w-full h-64 p-2 border-teal-500 border-2 rounded-md resize-none focus:outline-none text-blue-950"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>
              <div>
                <div className={`w-full h-64 p-2 bg-white border-teal-500 border-2 rounded-md text-gray-400 ${outputText ? 'text-blue-950' : 'text-gray-400'}`}>
                  {outputText ? outputText:"이곳에 결과가 표시됩니다"}
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="self-center bg-teal-500 text-white px-4 py-2 rounded-full text-sm"
            >
              문장 수정하기 →
            </button>
          </form>
        </div>
å
        <section className="flex flex-col">
          <div className="self-center w-11/12 bg-gradient-to-b from-cyan-50 to-white rounded-xl flex flex-col py-4">
            <h2 className="text-2xl font-extrabold py-8 mb-4 self-center text-blue-950">우리말 바른말</h2>
            <div className="grid md:grid-cols-3 gap-6 px-6">
              {[
                { icon: "/icon1.svg", title: "무료로", description: "합리적인 비용으로 고품질 맞춤법 교정 제공, 소외 계층, 유학생, 한국어를 공부하는 외국인 등"},
                { icon: "/icon2.svg", title: "가장 편한 형태로", description: "웹사이트와 크롬 익스텐션으로 이용 가능 실시간 맞춤법 체크 지원 사용자 피드백을 반영하여 서비스 개선"},
                { icon: "/icon3.svg", title: "정확한 문장 교정", description: "한국어 맞춤법 규정 반영 최신 자연어 처리 기술 (llama-3-70b) 적용 문맥을 고려한 지능형 교정 지속적 업데이트" },
              ].map((item, index) => (
                <div key={index} className="border border-emerald-100 border-opacity-75 bg-teal-50 bg-opacity-30 p-6 rounded-lg shadow">
                  <Image src={item.icon} alt="icon1" width={40} height={40} className="mb-4"/>
                  <h3 className="font-semibold mb-2 text-blue-950">{item.title}</h3>
                  <p className="text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="my-12 flex flex-col justify-center pb-14">
        <Image src="/qfm.svg" alt="Logo" width={200} height={100} className="self-center mb-4"/>
        <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm  self-center">
          어디서나 사용해보세요 - 설치하기
        </button>
      </footer>
    </div>
  );
}