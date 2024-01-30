import styles from "../styles";

export const Footer = () => {
  return (
    <section className={`${styles.flexCenter}`}>
      <div className="w-full justify-between items-center pt-6 pb-1 bg-black">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2024 @Sahil. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};
