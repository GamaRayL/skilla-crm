import React, { FC, ReactNode, useMemo } from "react";
import classNames from "classNames";
import "./styles.scss";
import SvgIcon from "@/shared/ui/SvgIcon";

interface IButton {
  className?: string;
  children?: ReactNode;
  icon?: string;
  iconPosition?: "before" | "after";
}

const Button: FC<IButton> = (props) => {
  const { className, children, icon, iconPosition = "after" } = props;

  console.log(icon);


  const iconMarkup = useMemo(() => {
    if (!icon) return null;
    return <SvgIcon className="button__icon" name={icon} />;
  }, [icon]);

  const bodyMarkup = useMemo(() => {
    return (
      <span className="button__body">
        {(icon && iconPosition === "before") && iconMarkup}
        {children && <span className="button__label">{children}</span>}
        {(icon && iconPosition === "after") && iconMarkup}
      </span>
    );
  }, [iconMarkup, iconPosition, children]);

  const args = {
    className: classNames(className, "button", {

    })
  };

  return (
    <button {...args}>{bodyMarkup}</button>
  );
};

export default Button;