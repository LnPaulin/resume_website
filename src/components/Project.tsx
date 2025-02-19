import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";

interface ProjectProps {
  projectSrc: string;
  projectName: string;
  projectLink: string;
  githubLink: string;
  tools: string[];
  projectShortDesc: string;
  projectFullDesc: string;
}

export function Project({ projectSrc, projectName, projectLink, githubLink, tools, projectShortDesc, projectFullDesc }: ProjectProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="h-96 flex flex-col">
        <div
          className="rounded-lg flex justify-center grow group relative overflow-hidden p-10 bg-darkgray cursor-pointer"
          onClick={() => setIsOpen(true)}>
          <img
            className="rounded-lg w-5/6 absolute top-14 group-hover:rotate-2 group-hover:scale-105 duration-300"
            alt={`${projectName}`}
            src={projectSrc}
          />
        </div>
        <div className="min-h-10 flex mt-4">
          <p className="max-w-40 md:max-w-48 2xl:max-w-60 text-xl md:text-2xl text-offwhite font-bold font-poppins">
            {projectName}
          </p>
          <div className="h-[2px] grow bg-white/20 self-end mb-2 mx-3"></div>
          <div className="flex items-center">
            <a href={githubLink} target="_blank" className="w-7 h-7 mx-2">
              <svg
                className="w-full h-full stroke-white opacity-70 hover:opacity-100 duration-300 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href={projectLink} target="_blank" className="w-7 h-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.0}
                stroke="currentColor"
                className="w-full h-full stroke-white opacity-70 hover:opacity-100 duration-300 cursor-pointer"
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
        <div className="flex font-medium text-cerulean mt-1 text-base">{tools.reduce((acc, curr) => (acc + " - " + curr))}</div>
        <div>
          <p className="text-offwhite text-xl tracking-wide font-extralight">{projectShortDesc}
            <span onClick={() => setIsOpen(true)} className="text-base font-medium hover:underline text-cerulean cursor-pointer">{" "}Learn more {">"}</span>
          </p>
        </div>
      </div>
      <ProjectDetails isOpen={isOpen} setIsOpen={setIsOpen} description={projectFullDesc}> {/* Pass description */}
        <div className="h-full w-full flex flex-col items-center justify-center">
          <svg className="fill-offwhite w-36 h-36" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 256 241" enableBackground="new 0 0 256 241" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M254,188V2H2v186h111v29H75v22h106v-22h-38v-29H254z M19,19h217v151H19L19,19z M169.385,132.8 c0.131,1.179,0,2.575-0.306,3.885l-11.131-10.258l-10.04,10.957l11.262,10.214c-1.31,0.437-2.575,0.742-3.885,0.742 c-3.885,0.131-7.203-1.048-10.04-3.623c-2.837-2.706-4.365-5.849-4.496-9.734c0-1.353,0.131-2.881,0.437-4.191l-2.706-2.575 l-16.195-14.798l-27.413,30.207c-1.659,2.226-4.234,3.754-7.203,3.754c-4.802,0-8.687-3.885-8.687-8.687 c0-2.575,1.004-4.933,2.968-6.591l28.461-29.509L93.213,86.835c-1.353,0.611-2.881,0.917-4.191,0.917 c-3.885,0.131-7.203-1.048-10.04-3.623s-4.365-5.718-4.496-9.603c-0.131-1.179,0-2.575,0.306-3.885l11.262,10.214l9.953-10.913 L84.745,59.728c1.179-0.437,2.575-0.742,3.885-0.742c3.885-0.131,7.203,1.048,10.04,3.623c2.837,2.532,4.365,5.849,4.496,9.734 c0.131,1.31,0,2.575-0.306,3.885l17.723,16.238l12.965-14.012l-19.381-17.068l17.592-20.036l49.807,43.826l-17.592,20.036 l-19.905-17.548l-12.528,14.798l19.469,17.81c1.31-0.437,2.575-0.742,3.885-0.742c3.885-0.131,7.203,1.048,10.04,3.623 C167.77,125.685,169.298,128.828,169.385,132.8z"></path> </g></svg>
          <p className="mt-8 text-xl text-center">This page is currently under construction</p>
        </div>
      </ProjectDetails >

    </div >
  );

}

interface ProjectDetailsProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  description?: string;
}

const ProjectDetails = ({ isOpen, setIsOpen, children, description }: ProjectDetailsProps) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-neutral-900"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-neutral-900 p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full p-4 pt-12 md:px-16 lg:px-32"> {/* Add responsive padding */}
              {description ? (
                <p className="text-offwhite text-xl">{description}</p>
              ) : (
                children
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};