import { educationProps, educations } from "../data/dataUsed";
import styles from "../styles";

export const Education = () => {
  return (
    <>
      <div id="education">
        <h4
          className={`${styles.heading2} font-poppins font-semibold xs:text-[40px] text-[30px] text-center text-gradient pb-10`}
        >
          Education
        </h4>
        <section className={`flex md:flex-row flex-col gap-2 mb-10`}>
          {educations.map((education: educationProps) => (
            <div className={`flex-1 flex justify-center flex-col items-center`}>
              <EducationCard key={education.id} {...education} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

const EducationCard = (education: educationProps) => {
  return (
    <>
      <div className="flex justify-between flex-col px-10 py-10 rounded-[20px] max-w[440px] md:mr-10 sm:mr-5 mr-0 education-block relative border-[1px] border-[#3F3E45]">
        <div className="absolute z-[0] w-[45%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[50%] h-[50%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-[0] w-[60%] h-[60%] right-20 bottom-40 blue__gradient" />
        <h2
          className={`${styles.heading3} text-white text-center flex-center z-[5]`}
        >
          {education.institution}
        </h2>
        <p className="font-poppins font-normal text-[30px] leading-[50px] text-white my-5 z-[5]">
          {education.degree} <br />
          From {education.startTime} to {education.endTime} <br />
          {education.cgpa && <p>CGPA : {education.cgpa}</p>}
          {education.percentage && <p>Percentage : {education.percentage}</p>}
        </p>
      </div>
    </>
  );
};
