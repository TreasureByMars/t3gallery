import Link from "next/link";
import type { styleText } from "util";
import type { length } from "zod/v4";

const mockUrls=["https://iauq6fdic2.ufs.sh/f/6FjQeyfANohveewM7NWPoYWGFRrMmi4hvwTLE5NCktjIHcQA", "https://iauq6fdic2.ufs.sh/f/6FjQeyfANohvlCBAbRHGzB0xuEkJDh174oVqdWmvb2Tg6Pr5", "https://iauq6fdic2.ufs.sh/f/6FjQeyfANohvyHasBy4spyS8TLOzPX0KYD6lnmgkiv7cRBoe"]
const mockImages=mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return(
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#FFFFFF] to-[#EEB8C4] text-white">
      <body>
      <p><br></br></p>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
        <div key={image.id} className="w-48">
          <img
          src={image.url}
          alt="image"/>
        </div>
        ))}
        </div>

        <div>
          <h1 className="text-pink-1000 text-shadow-2xs text-shadow-pink-500"
          style={{fontSize: 50,
          	color: "magenta",
            textAlign: "center",
            textShadow: "0px 2px 0px var(--tw-text-shadow-color)",
            fontFamily: "var(--font-serif);",
            fontWeight: 900,
            textDecoration: "overline underline"
          }}>
            星座になれたら</h1>
            <br></br>
          <p
          style={{
            textAlign: "center",
            fontSize: 25,
            fontFamily: "var(--font-serif);",
            fontWeight: 500,
            color: "black"
          }}>
            もうすぐ時計は6時<br></br>
            もうそこに一番星<br></br>
            影を踏んで　夜に紛れたくなる帰り道<br></br>
            どんなに探してみても<br></br>
            一つしかない星<br></br>
            何億光年　離れたところからあんなに輝く<br></br>
            <br></br>

            いいな　君は　みんなから愛されて<br></br>
            「いいや　僕は　ずっと一人きりさ」<br></br>
            <br></br>

            君と集まって星座になれたら<br></br>
            星降る夜　一瞬の願い事<br></br>
            きらめいて　ゆらめいて　震えてるシグナル<br></br>
            君と集まって星座になれたら<br></br>
            空見上げて　指を差されるような<br></br>
            つないだ線　解かないで<br></br>
            僕がどんなに眩しくても<br></br>
            <br></br>

            もうすぐ時計は8時<br></br>
            夜空に満天の星<br></br>
            何億光年　離れたところにはもうないかもしれない<br></br>
            <br></br>

            月が綺麗で　泣きそうになるのは<br></br>
            いつの日にか　別れが来るから<br></br>
            <br></br>

            君と集まって星座になれたら<br></br>
            彗星みたい　流れるひとりごと<br></br>
            消えていく　残像は　真夜中のプリズム<br></br>
            君と集まって星座になれたら<br></br>
            切なる願い　誰かに届いたら<br></br>
            変われるかな　夜の淵を<br></br>
            なぞるような　こんな僕でも<br></br>
            <br></br>

            遥か彼方　僕らは出会ってしまった<br></br>
            カルマだから　何度も出会ってしまうよ<br></br>
            雲の隙間で<br></br>
            <br></br>

            君と集まって星座になれたら<br></br>
            夜広げて　描こう絵空事<br></br>
            暗闇を　照らすような　満月じゃなくても<br></br>
            だから集まって星座になりたい<br></br>
            色とりどりの光　放つような<br></br>
            つないだ線　解かないよ<br></br>
            君がどんなに眩しくても<br></br>
            <br></br>
          </p>
        </div>

        <div>

          <h2
          className="text-blue-1000 text-shadow-2xs text-shadow-blue-500 justify-center"
          style={{fontSize: 50,
          	color: "red",
            textAlign: "center",
            textShadow: "0px 2px 0px var(--tw-text-shadow-color)",
            fontFamily: "var(--font-serif);",
            fontWeight: 900,
            textDecoration: "overline underline"
          }}>
            The National Anthem of the United States of America
          </h2>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original"} width="300" height="150" style={{display: 'block', margin: '0 auto'}}></img>
          <br></br>
          <audio controls style={{ display: 'block', margin: '0 auto' }}>
            <source src="https://upload.wikimedia.org/wikipedia/commons/6/65/Star_Spangled_Banner_instrumental.ogg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" type="audio/ogg"></source>
          </audio>
        </div>

          <div>
            <br></br>
          </div>

        </body>

    </main>

  );
}
