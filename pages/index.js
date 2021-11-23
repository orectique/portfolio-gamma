import SeoTags from "../components/SeoTags";
import PageTemplate from "../templates/page.template";
import { motion } from "framer-motion";
import { container, text_reveal, text_reveal_fade } from "../utils/Animation";
import { Frame } from "../components";

const About = () => {
  const texts = [{ content: "['hip', 'hip']" }];

  const textList = texts.map((text, index) => (
    <div className="overflow-hidden" key={index}>
      <motion.div
        className="font-cairo text-7xl mb-8 font-semibold gradient-text"
        variants={text_reveal}
      >
        {text.content}
      </motion.div>
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
        <motion.div variants={container} className="md:w-1/2 lg:pl-36">
          {textList}
          <motion.p variants={text_reveal_fade}>
            I am an undergrad student of Data Science with an interest in the application of Natural
            Language Processing in business analytics. I have a passion for problem solving - well, somebody must hunt down that
            pesky veriable, shouldn't they? I'm proficient in{" "}
            <a className="text-gray-500">Data Analytics using Python and R</a>,{" "}
            <a className="text-gray-500">Tensorflow and associated functions</a>,{" "}
            <a className="text-gray-500">Algorithms and data structure</a>,{" "}
            <a className="text-gray-500">Basic Web Dev - ReactJS/CSS/HTML/JS</a>,{" "}
            <a className="text-gray-500">MATLAB</a>,{" "}
            <a className="text-gray-500">C++</a>,{" "}
            <a className="text-gray-500">Dapp development on Ethereum and Solana</a>,{" "}
            <a className="text-gray-500">Cloud - IBM/AWS</a>. My life revolves around my quests for solutions.
          </motion.p>
        </motion.div>
        <div className="md:static fixed md:block w-1/2">
          <Frame radius="rounded-md" />
        </div>
      </motion.div>
    </>
  );
};

export default About;

About.Template = PageTemplate;
