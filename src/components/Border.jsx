import clsx from "clsx";

const Border = ({
  className,
  position = "top",
  invert = false,
  as: Component = "div",
  ...props
}) => {
  return (
    <Component
      className={clsx(
        className,
        "relative before:absolute after:absolute",
        invert
          ? "before:bg-white after:bg-white/10"
          : "before:bg-[#283F2B] after:bg-[#283F2B]/10",
        position === "top" &&
          "before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px",
        position === "left" &&
          "before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px"
      )}
      {...props}
    />
  );
};

export default Border;
