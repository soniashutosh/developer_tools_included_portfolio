import { useState } from "react";
import styles, { layout } from "../styles";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export const Contact = () => {
  // currently variable name is not being used as we are using 3rd party which is direclty sending data to mentioned email.
  const [firstName, setFirstName] = useState<string | null>();
  const [lastName, setLastName] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [comments, setComments] = useState<string | null>();

  return (
    <section id="contact" className="relative">
      <h4
        className={`${styles.heading2} font-poppins font-semibold xs:text-[40px] text-[30px] text-center text-gradient pb-4`}
      >
        Contact Me
      </h4>
      <div className="absolute z-[0] w-[15%] h-[25%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[20%] h-[20%] bottom-40 rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-40 blue__gradient" />
      <div className={layout.section}>
        <div className={layout.sectionInfo}>
          <p className={`${styles.paragraph} text-white pr-5 sm:pb-10 pb-3`}>
            Thank you for taking the time to explore my portfolio! I'm
            incredibly passionate about leveraging my skills in computer science
            to contribute to innovative projects and collaborations. I'm excited
            about the prospect of working together on meaningful projects. I
            believe that collaboration is key to driving impactful solutions.
            I'm committed to bringing my best to the table and contributing to
            projects that make a difference.
            <br /> <br />
            Feel free to reach out to me via email, LinkedIn, GitHub, or phone –
            whichever method works best for you. I'm looking forward to the
            possibility of collaborating with you and making a meaningful impact
            through our work together.
          </p>
          <div className="flex flex-row text-white">
            <a
              className="text-white object-contain mb-4 z-[5] m-5"
              href=""
              target="_blank"
            >
              <FaInstagram className="w-[42px] h-[42px] object-contain" />
            </a>
            <a
              className="text-white object-contain mb-4 z-[5] m-5"
              href="https://github.com/Sahilsinggh"
              target="_blank"
            >
              <FaGithub className="w-[42px] h-[42px] object-contain" />
            </a>
            <a
              className="text-white object-contain mb-4 z-[5] m-5"
              href="https://www.linkedin.com/in/sahil-singh-b50493180/"
              target="_blank"
            >
              <FaLinkedinIn className="w-[42px] h-[42px]" />
            </a>
          </div>
        </div>
        <div className={`${layout.sectionInfo} p-6`}>
          <div className="absolute z-[1] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient sm:m-0 m-11" />
          <form
            className="p-6 w-full border-[1px] border-[#3F3E45] rounded-[20px] z-[5]"
            action="https://formspree.io/f/meqyebqd"
            method="POST"
          >
            <FormData
              setFirstName={setFirstName}
              setLastName={setLastName}
              setEmail={setEmail}
              setComments={setComments}
            />
            <button
              type="submit"
              className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] ml-6`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

type FormDataProps = {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setEmail: (value: string) => void;
  setComments: (value: string) => void;
};

const FormData = ({
  setFirstName,
  setLastName,
  setEmail,
  setComments,
}: FormDataProps) => {
  return (
    <>
      <div className="w-full p-3 m-1 font-poppins flex flex-col">
        <div className="mb-5">
          <label className="block mb-2 text-[25px] font-medium text-white">
            First Name
          </label>
          <input
            name="firstName"
            autoFocus
            type="text"
            id="email"
            className="text-sm rounded-lg block w-full p-2.5"
            placeholder=""
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[25px] font-medium text-white">
            Last Name
          </label>
          <input
            name="lastName"
            type="text"
            id="email"
            className="text-sm rounded-lg block w-full p-2.5"
            placeholder=""
            onChange={(event) => setLastName(event.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[25px] font-medium text-white">
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="text-sm rounded-lg block w-full p-2.5"
            placeholder="name@flowbite.com"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-[25px] font-medium text-white">
            Comments
          </label>
          <textarea
            name="comments"
            id="email"
            className="text-sm rounded-lg block w-full p-2.5"
            placeholder="Put your comments here"
            rows={5}
            cols={40}
            onChange={(event) => setComments(event.target.value)}
            required
          />
        </div>
      </div>
    </>
  );
};
