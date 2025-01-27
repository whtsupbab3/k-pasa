import React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#e1dfe8] text-[#17364c]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start lg:px-40x px-30 md:px-10  py-0">
        <img src="/logo.png" alt="Logo" className="h-36" />
        <p>
          ¿Luchando con las abreviaturas en español? ¡No te preocupes, te
          tenemos cubierto!
        </p>
        <p>
          ¡Echa un vistazo a nuestra guía rápida para aprender lo básico en poco
          tiempo, o salta directamente a practicar con nuestro agente de IA!
          ¡Hagamos que dominar las abreviaturas en español sea fácil y
          divertido!
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#ebc3bc] dark:hover:bg-[#ccc] text-[#17364c] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lee nuestra guía rápida
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-[#a3dbdb] text-[#17364c] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/chat"
            target="_blank"
            rel="noopener noreferrer"
          >
            Practica con el agente de IA
          </a>
        </div>
      </main>
    </div>
  );
}
