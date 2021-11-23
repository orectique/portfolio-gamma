import Link from "next/link";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal } from "../utils/Animation";
import { Frame } from "../components";
import SeoTags from "../components/SeoTags";

const Overview = () => {
  const overviews = [
    {
      content: {
        title: "Data Science",
        link: "https://amrita.edu/program/integrated-m-sc-physics-coimbatore/",
        status: "ongoing",
        description: "Integrated Masters in Data Science.",
        stacks: ["GPA: 4.35", "2020 - ", "ML/Neural Networks", "Adavanced Mathematics", "NLP", "Ethics"],
      },
    },

    {
      content: {
        title: "Research",
        link: "https://unrest-mapping.herokuapp.com",
        status: "Internship",
        description: "Study of time series data under Dr. Peter J. Kempthorne (MIT)",
        stacks: ["Quantification of Protest"],

      },
    },

    {
      content: {
        title: "",
        link: "https://docs.google.com/document/d/e/2PACX-1vTfX7UVd5syPlPJ2Yd9Yi3aCj6BX6020oVFGq33JzKszgWWwOMjjfvvfm7orPSRFxPI3NeWNvCld4f_/pub",
        status: "",
        description: "Complete CV",
        stacks: [""],
      },
    },

  ];

  const overviewList = overviews.map((project, index) => (
    <div className="overflow-hidden mt-6" key={index}>
      <Link href={project.content.link}>
        <a target="_blank" rel="noreferrer noopener">
          <motion.div
            className="flex flex-col transform duration-700 hover:scale-110 hover:text-third"
            variants={text_reveal}
          >
            <div className="mr-2 flex">
              <h1 className="mr-3">{project.content.title}</h1>
              <div>{project.content.status}</div>
            </div>
            <h3 className="text-xl mb-2">{project.content.description}</h3>
            <div className="flex flex-wrap w-80">
              {project.content.stacks.map((stack, key) => (
                <div
                  key={key}
                  className="mr-1 border border-third bg-transparent px-1 my-1 rounded-md"
                >
                  {stack}
                </div>
              ))}
            </div>
          </motion.div>
        </a>
      </Link>
    </div>
  ));

  return (
    <>
      <SeoTags />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex"
      >
        <motion.div variants={container} className="md:w-1/2 lg:pl-36 z-20">
          {overviewList}
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-full " />
        </div>
      </motion.div>
    </>
  );
};

export default Overview;

Overview.Template = PageTemplate;
