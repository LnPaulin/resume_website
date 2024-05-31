function Certificate({
  certSrc,
  certName,
  certLink,
}: {
  certSrc: string;
  certName: string;
  certLink: string;
}) {
  return (
    <div className="h-80 flex flex-col">
      <div className="rounded-lg flex justify-center grow relative overflow-hidden p-10 bg-darkgray">
        <img
          className="rounded-lg w-5/6 absolute top-14"
          alt={`${certName} certificate`}
          src={certSrc}
        />
      </div>
      <div className="min-h-10 flex flex-wrap mt-4">
        <p className="max-w-40 md:max-w-48 2xl:max-w-60 text-xl md:text-2xl text-offwhite font-bold font-poppins">
          {certName}
        </p>
        <div className="h-[2px] grow bg-white/20 self-end mb-2 mx-3"></div>
        <a href={certLink} target="_blank" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.0}
            stroke="currentColor"
            className="w-7 h-7 stroke-white opacity-70 hover:opacity-100 duration-300 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Certificate;
