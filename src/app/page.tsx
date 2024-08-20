"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '@/styles/globals.css';

const Home = () =>{
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/correct', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'text': inputText})
      });
      const data= await response.json();
      console.log(data);
      setOutputText(data.corrected_text);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };

  return (
    <div className="min-w-[1100px] overflow-y-scroll bg-white py-4">
      <header className="flex justify-between items-center mb-2 px-8">
        <div className="flex items-center justify-between">
          <Image src="/qfm.svg" alt="Logo" width={120} height={100} className="m-0 p-0"/>
          <span className="text-base text-black font-bold">우리말 바른말</span>
        </div>
        <Link href="https://google.com" className="self-center">
          <button className="bg-[#334EAD] text-white px-6 py-2 rounded-full text-sm">
            설치하기
          </button>
        </Link>
      </header>

      <main className="w-full">
        <div className="bg-[url('/background.svg')] bg-cover p-6 px-16 mb-8">
          <h1 className="text-4xl font-bold my-14 text-center">
            <span className="text-[#081F5C]">더 이상 </span>
            <span className="text-[#EF8F00]">맞춤법</span>
            <span className="text-[#081F5C]">으로 스트레스받지 마세요</span>
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-sm m-4">
            <div className="flex justify-center space-x-4 flex-row w-full mb-4">
                <textarea
                  placeholder="교정을 원하는 문장이나 문단을 입력해 주세요"
                  className="min-w-[480px] h-64 p-4 rounded-md resize-none focus:outline-none text-blue-950 shadow-box"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                />
                <div className={`min-w-[480px] h-64 p-4 bg-white rounded-md shadow-box overflow-y-auto ${outputText ? 'text-blue-950' : 'text-gray-400'}`}>
                  {outputText ? outputText:"이곳에 결과가 표시됩니다"}
                </div>
            </div>
            <button
              type="submit"
              className="self-center bg-[#334EAD] text-white px-6 py-2 rounded-full text-sm"
            >
              문장 수정하기 →
            </button>
          </form>
        </div>
å
        <section className="flex flex-col">
          <div className="self-center flex flex-col py-4">
            <p className="text-4xl font-extrabold mb-3 self-center text-blue-950">우리말 바른말</p>
            <p className="text-sm font-normal mb-8 self-center text-blue-950">어디서나 사용해보세요</p>
            <div className="flex flex-row justify-center space-x-4 px-16 max-w-[1000px]">
              <div className="h-full flex justify-end">
                <div className="bg-[#334EAD] w-40 font-semibold text-sm p-4 flex rounded-lg h-40">
                  <div className="flex flex-col justify-end">
                    <p>맜춤뻡</p> 
                    <p>툴리면 부끄럽짠아?</p>
                  </div>
                </div>
              </div>
              {[
                { icon: "/icon1.svg", title: "<span class='text-[#EF8F00]'>무료</span>로", description: "합리적인 비용으로 고품질 맞춤법 교정 제공, 소외 계층, 유학생, 한국어를 공부하는 외국인 등"},
                { icon: "/icon2.svg", title: "<span class='text-[#EF8F00]'>가장 편한</span> 형태로", description: "웹사이트와 크롬 익스텐션으로 이용 가능 실시간 맞춤법 체크 지원 사용자 피드백을 반영하여 서비스 개선"},
                { icon: "/icon3.svg", title: "<span class='text-[#EF8F00]'>정확한</span> 문장 교정", description: "한국어 맞춤법 규정 반영 최신 자연어 처리 기술 (llama-3-70b) 적용 문맥을 고려한 지능형 교정 지속적 업데이트" },
              ].map((item, index) => (
                <div key={index} className="bg-[#EEF0F6] p-6 w-7/12 h-72 rounded-lg shadow">
                  <Image src={item.icon} alt="icon1" width={40} height={40} className="mb-4"/>
                  <h3 className="font-semibold mb-12 text-blue-950" dangerouslySetInnerHTML={{ __html: item.title}}></h3>
                  <p className="text-sm font-[325] text-[#160647]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="my-12 flex flex-col justify-center pb-14">
        <Link href="https://google.com" className="self-center">
          <button className="bg-[#334EAD] text-white px-6 py-2 rounded-full text-sm">
            설치하기
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;