import { skillProps, skills } from "../data/dataUsed";
import styles from "../styles";

export const Skills = () => {
  return (
    <section id="skills" className="sm:mt-20 mt-5 pb-5">
      <h4
        className={`${styles.heading2} font-poppins font-semibold xs:text-[40px] text-[30px] text-center text-gradient pb-4`}
      >
        Skills
      </h4>
      <div className="flex flex-row flex-wrap">
        {skills.map((skill: skillProps) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </section>
  );
};

const SkillCard = (skill: skillProps) => {
  return (
    <div className="text-white justify-center rounded-[20px] p-6 border-[1px] border-[#3F3E45] sm:m-4 m-2 bg-black">
      <h4 className={styles.heading4}>{skill.name}</h4>
    </div>
  );
};
