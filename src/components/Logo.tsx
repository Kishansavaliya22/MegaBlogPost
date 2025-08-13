interface ILogo {
  className?: string;
}

const Logo = ({ className = "w-15" }: ILogo) => {
  return (
    <div>
      <img
        src="src\assets\logo\logo.png"
        alt="Blogpost App"
        className={`${className}`}
      />
    </div>
  );
};

export default Logo;
