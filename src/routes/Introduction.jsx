export default function Introduction() {
  return (
    <>
      <main className="relative w-full h-auto py-10 justify-center bg-[url('./assets/img/Introduction/contents_introduction_bg01.jpg')] bg-center bg-cover">
        <div className="absolute z-0 inset-0 overflow-hidden">
          <img src="./assets\img\Introduction\contents_introduction_bg02.png" alt="bg" className="absolute z-0 object-cover min-h-full" />
          <img src="./assets\img\Introduction\contents_introduction_bg03.png" alt="bg" className="absolute z-10 object-cover min-h-full" />
          <img src="./assets\img\Introduction\contents_introduction_bg04.png" alt="bg" className="absolute z-20 object-cover min-h-full" />
        </div>

        <div className="mt-16 z-40 relative">
          <span>
            <img src="./assets\img\Introduction\contents_header_introduction.png" alt="bg" className="w-[75%] mx-auto md:max-w-96" />
          </span>

          <div className="text-center text-base md:text-lg w-[85%] mt-16 mx-auto md:max-w-[40rem] lg:max-w-[50rem] font-NotoJP tracking-[0.2em]">
            <p>学生同士がランクを決める決闘ゲームを繰り広げる学園島アカデミー。</p>
            <p className="mt-10">
              俺、篠原緋呂斗は国内最難関の学園島編入試験で歴代トップの成績を叩き出し、 昨年度の絶対王者・彩園寺更紗を転校初日で陥落させ、
              学園島史上最速で頂点に君臨する“７ツ星セブンスター”に成り上がった。
            </p>
            <p className="mt-10 font-bold">――ああ、もちろん、そんなのは全部嘘だ。</p>
            <p className="mt-10">大事をやらかした俺が学園島で目的を果たすためには、 嘘でもトップに君臨し続けなきゃいけない。</p>
            <p className="mt-10">そのためならば、俺を主人として補佐する美少女メイド 姫路のイカサマも、 実は偽お嬢様だった彩園寺との共犯関係も何でも使ってやる。</p>
          </div>
          <div className="flex justify-center items-center flex-col my-16 lg:my-20">
            <img src="./assets\img\Introduction\contents_introduction_text2.png" alt="content" className="w-auto h-64 md:h-72 lg:h-96 mx-auto" />
          </div>
        </div>
      </main>
    </>
  );
}
