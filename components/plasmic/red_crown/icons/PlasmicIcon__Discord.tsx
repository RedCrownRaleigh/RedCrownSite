/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DiscordIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DiscordIcon(props: DiscordIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M49.132 3.769A47.159 47.159 0 0037.166 0a35.217 35.217 0 00-1.533 3.19 43.837 43.837 0 00-13.262 0A34.14 34.14 0 0020.822 0 47.005 47.005 0 008.844 3.778C1.273 15.248-.78 26.432.246 37.458c5.023 3.76 9.89 6.043 14.676 7.537a36.6 36.6 0 003.143-5.188 30.895 30.895 0 01-4.95-2.414c.415-.309.822-.63 1.214-.962 9.543 4.474 19.913 4.474 29.342 0 .397.331.803.653 1.213.962a30.853 30.853 0 01-4.958 2.419A36.427 36.427 0 0043.069 45c4.79-1.494 9.662-3.778 14.684-7.542 1.205-12.782-2.057-23.864-8.621-33.69zM19.365 30.677c-2.865 0-5.214-2.68-5.214-5.945 0-3.264 2.3-5.95 5.214-5.95 2.915 0 5.265 2.681 5.214 5.95.005 3.265-2.299 5.945-5.214 5.945zm19.27 0c-2.865 0-5.215-2.68-5.215-5.945 0-3.264 2.3-5.95 5.215-5.95s5.264 2.681 5.214 5.95c0 3.265-2.3 5.945-5.214 5.945z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DiscordIcon;
/* prettier-ignore-end */
