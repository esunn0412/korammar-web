"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import '@/styles/globals.css';

const Home = () =>{
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
    const formAction = submitter.getAttribute('formAction');
    console.log(formAction);
    const endpoint = formAction === '/correct' ? 'api/correct' : 'api/edit';
    console.log(endpoint);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({'text': inputText})
      });
      const data= await response.json();
      console.log(data);
      setOutputText(data.corrected_text || data.edited_text);
    } catch (error) {
      console.error('Error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-w-[1100px] overflow-y-scroll bg-white py-4">
      <header className="flex justify-between items-center mb-2 px-12">
        <div className="flex items-center justify-between">
          <Image src="/logo.png" alt="Logo" width={100} height={100} className="m-0 p-0"/>
          <span className="text-base text-black font-bold">Good Hangul</span>
        </div>
        <Link href="https://google.com" className="self-center">
          <button className="bg-[#334EAD] text-white px-6 py-2 rounded-sm text-sm">
            설치하기
          </button>
        </Link>
      </header>

      <main className="w-full">
        <div className="bg-[url('/background1.svg')] bg-cover p-6 px-16 mb-8 pb-2">
          <h1 className="text-4xl font-bold mt-8 mb-4 text-center">
            <span className="text-[#081F5C]">더 이상 </span>
            <span className="text-[#EF8F00]">맞춤법</span>
            <span className="text-[#081F5C]">으로</span>
          </h1>
          <h1 className="text-4xl font-bold mb-8 text-center">
            <span className="text-[#081F5C]">스트레스 받지 마세요</span>
          </h1>
          <form onSubmit={handleSubmit} className="relative flex flex-col space-y-4 text-sm m-4">
            <div className="flex justify-center space-x-4 flex-row w-full mb-4">
                <textarea
                  placeholder="교정을 원하는 문장이나 문단을 입력해 주세요"
                  className="min-w-[480px] h-64 p-4 rounded-md resize-none focus:outline-none bg-white text-blue-950 shadow-box"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
                <div className="relative w-[480px] h-64 shadow-box resize-none rounded-md overflow-y-auto">
                  <div className={`w-full h-full p-4 overflow-y-auto rounded-md ${isLoading ? 'blur-[2px]' : 'bg-white'} ${outputText ? 'text-blue-950' : 'text-gray-400'}`}>
                    {outputText ? outputText:"이곳에 결과가 표시됩니다"}
                  </div>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-[#334EAD] loading loading-dots loading-lg"></span>
                    </div>
                  )}
                </div>
            </div>
            <div className="mr-[220px] absolute bottom-[-5px] translate-y-full self-center">
              <button
                type="submit"
                formAction="/correct"
                className="text-[#334EAD] bg-white border-[#334EAD] border px-5 py-2 rounded-sm text-sm mr-2"
              >
                맞춤법 수정
              </button>
              <button
                type="submit"
                formAction="/edit"
                className="bg-[#334EAD] text-white px-5 py-2 rounded-sm text-sm"
              >
                문장 수정
              </button>
            </div>
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
                  <div className="flex flex-col justify-end text-white">
                    <p>맛춤뻡</p> 
                    <p>툴리면 부끄럽짠아?</p>
                  </div>
                </div>
              </div>
              {[
                { icon: "/icon1.svg", title: "<span class='text-[#EF8F00]'>무료</span>로", description: "무료로 고품질 맞춤법 교정 제공, 소외 계층, 유학생, 한국어를 공부하는 외국인 등"},
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
          <button className="bg-[#334EAD] text-white px-6 py-2 rounded-sm text-sm">
            설치하기
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
