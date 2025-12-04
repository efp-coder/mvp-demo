"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BodyText from "@/components/BodyText";

export default function HomeView() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <section className="relative flex flex-col flex-1 ">

      <section className={`
        flex flex-col 
        md:flex-row md:justify-around 
        items-center 
        bg-text-dark
        transition-transform
        transform 
        duration-500 ease-in-out ${show ? "translate-x-0" : "-translate-x-full"}
          `}
      >
        <Image
          src={"logo.svg"}
          alt="Snakey-Code big logo"
          width={400}
          height={400}
          sizes="(max-width: 640px) 50vw, 50vw"
          className="object-cover"
        />
        <h1 className="font-header py-6 text-primary text-balance text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Where your <span className="text-accent">Python</span> journey begins</h1>
      </section>

      <section className="flex flex-col flex-1 items-center justify-center relative p-4 bg-primary-light/60 text-center">
        <BodyText>
          This is paragraph text.<br />
          Vestibulum sit amet lorem neque. Vestibulum non felis lobortis, dapibus nisl in, vehicula ante. Morbi a ligula et tortor sodales sollicitudin vel in justo. Pellentesque id porttitor magna. Sed vulputate nisl non scelerisque pellentesque. Vivamus at est varius, blandit elit ultricies, commodo orci. Praesent facilisis turpis et velit mollis maximus. Duis faucibus arcu massa, et euismod ante tincidunt non. Praesent fermentum enim ut ipsum imperdiet, eu tincidunt risus tempus. Ut purus lacus, cursus non nisi in, porta consectetur tellus. Vestibulum condimentum rhoncus vestibulum. Etiam iaculis ante id massa aliquet mattis. Integer vitae metus varius, tincidunt erat nec, semper libero.

          Etiam posuere bibendum nibh sed pellentesque. Sed imperdiet hendrerit felis a auctor. Nam cursus sem eros, vel tincidunt mauris lacinia eget. Pellentesque fringilla risus sem, nec pretium lorem sollicitudin a. Phasellus iaculis volutpat nunc ut elementum. Duis eget semper ex. Pellentesque nisl magna, consectetur in sem vitae, pulvinar condimentum sapien. Mauris lacinia et velit rhoncus sodales. Proin bibendum, lorem ac pretium semper, lacus felis blandit odio, in viverra eros est quis elit. Maecenas porttitor ex fringilla mattis bibendum. Aliquam porta quis odio in aliquet. Praesent malesuada arcu eget diam placerat porta. Nam et mauris eget mi sollicitudin venenatis in a orci.

        </BodyText>
        <BodyText>
          Other text.<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ligula non ex dignissim, maximus porta libero interdum. Cras elementum, arcu in placerat facilisis, lectus leo eleifend lacus, non pharetra augue nisi quis lectus. Sed vulputate scelerisque felis, vitae viverra nisl tincidunt sed. Mauris mattis fermentum rhoncus. Etiam condimentum a risus nec tincidunt. Vestibulum a eros hendrerit lorem lobortis convallis eget vitae nisl. Cras ullamcorper non elit ac dictum. Morbi dapibus sagittis tortor sed eleifend. Quisque tincidunt tempus dui, vitae finibus purus bibendum et. Morbi rutrum ante ut rutrum posuere. Praesent gravida magna accumsan tempor auctor. Proin malesuada tellus vitae mi sodales feugiat.
          Sed tempus elementum sapien. Duis tristique tincidunt pellentesque. Sed tempor, dolor eget imperdiet feugiat, odio ipsum scelerisque velit, sit amet interdum neque eros vitae eros. Nulla dolor nisi, accumsan in mattis molestie, dapibus nec risus. Sed felis massa, malesuada eu mi in, maximus fringilla nulla. Fusce mattis, leo vitae tincidunt iaculis, nisi nunc posuere ante, vitae rutrum tortor magna et sapien. Nam finibus odio nec ex condimentum bibendum. Maecenas vitae tristique eros, sit amet pellentesque arcu. Duis nibh urna, varius sit amet velit eget, mattis molestie sapien. Sed in ullamcorper nisi. Pellentesque sed metus vel est aliquam convallis. Donec posuere, erat a accumsan lobortis, dui purus tempus purus, lacinia mollis ligula diam quis libero. Donec scelerisque, lectus eu malesuada fringilla, risus sapien tincidunt ligula, sed molestie nisl ex quis ante. Morbi id massa ut erat dapibus gravida. Nunc ornare leo ut condimentum sollicitudin.
        </BodyText>
        <p className="font-code">This is paragraph text.</p>
      </section>
    </section>
  );

}
