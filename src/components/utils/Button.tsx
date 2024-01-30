type ButtonProp = {
  styles: string;
  name: string;
  link: string;
};

export const Button = ({ styles, name, link }: ButtonProp) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      <a href={link} target="_blank">
        {name}
      </a>
    </button>
  );
};
