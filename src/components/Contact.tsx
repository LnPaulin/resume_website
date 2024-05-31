export default function Contact() {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-back py-36 md:py-48 px-8 lg:px-72"
    >
      <div className="relative flex justify-end items-center">
        <h2 className="font-poppins font-extrabold text-4xl md:text-7xl text-cerulean">
          Contact.
        </h2>
        <div className="h-1 grow bg-white/20 self-end ml-4 mb-4"></div>
      </div>
      <div className="w-full flex flex-col items-center md:px-10">
        <h2 className="mt-8 md:mt-24 font-extrabold tracking-wide text-center text-4xl md:text-7xl text-offwhite">Reach out to me</h2>
        <p className="pt-8 w-4/5 opacity-70 text-lg md:text-xl text-center">
          Send me an email! You can also find me on{" "}
          <a href="https://www.linkedin.com/in/tchio-fonkwa-paulin" target="_blank" className="text-cerulean font-medium hover:underline">Linkedin</a>
          {" "}
        </p>
      </div>
      <a href="mailto:piyushsingh16@outlook.in" className="w-fit group flex items-center justify-center gap-2 mx-auto mt-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 group-hover:stroke-cerulean duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <p className="text-xl font-medium group-hover:text-cerulean duration-300 mb-[5px]">fonkwapualin@gmail.com</p>
      </a>
    </div>
  )
}
