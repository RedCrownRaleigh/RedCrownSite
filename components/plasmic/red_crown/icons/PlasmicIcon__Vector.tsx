// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VectorIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VectorIcon(props: VectorIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 39 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.483.037C22.933 0 25.365.02 27.796 0c.15 2.869 1.178 5.794 3.273 7.819 2.095 2.08 5.05 3.037 7.931 3.356v7.556c-2.693-.094-5.406-.656-7.856-1.819-1.066-.487-2.057-1.106-3.03-1.743-.018 5.474.019 10.95-.037 16.406-.15 2.625-1.01 5.23-2.525 7.387-2.45 3.6-6.697 5.944-11.054 6.019-2.675.15-5.35-.581-7.632-1.931C3.088 40.818.432 36.73.04 32.343a34.846 34.846 0 01-.02-2.793c.337-3.563 2.095-6.975 4.826-9.3 3.105-2.7 7.444-3.994 11.503-3.225.038 2.775-.075 5.55-.075 8.325-1.851-.6-4.021-.432-5.648.693-1.179.77-2.076 1.95-2.544 3.282-.393.956-.28 2.006-.262 3.018.449 3.075 3.404 5.663 6.546 5.381 2.095-.018 4.097-1.237 5.182-3.018.355-.619.748-1.256.767-1.988.186-3.356.112-6.693.13-10.05.02-7.556-.018-15.093.038-22.63z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VectorIcon;
/* prettier-ignore-end */
