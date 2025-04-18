/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jFJFziXZKhcspnrEU1bpXe
// Component: JKBfSHkRyq6wpK

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: vE0DoM1TU6rn9z/component

import { useScreenVariants as useScreenVariantsyX0GVx02K4UjjJ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: yX0gVX02K4ujjJ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jFJFziXZKhcspnrEU1bpXe/projectcss
import sty from "./PlasmicPriceCard.module.css"; // plasmic-import: JKBfSHkRyq6wpK/css

createPlasmicElementProxy;

export type PlasmicPriceCard__VariantMembers = {
  primary: "primary";
  borders: "flatLeft" | "flatRight" | "flatCenter";
};
export type PlasmicPriceCard__VariantsArgs = {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
};
type VariantPropType = keyof PlasmicPriceCard__VariantsArgs;
export const PlasmicPriceCard__VariantProps = new Array<VariantPropType>(
  "primary",
  "borders"
);

export type PlasmicPriceCard__ArgsType = {};
type ArgPropType = keyof PlasmicPriceCard__ArgsType;
export const PlasmicPriceCard__ArgProps = new Array<ArgPropType>();

export type PlasmicPriceCard__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  h4?: Flex__<"h4">;
  button?: Flex__<typeof Button>;
};

export interface DefaultPriceCardProps {
  primary?: SingleBooleanChoiceArg<"primary">;
  borders?: MultiChoiceArg<"flatLeft" | "flatRight" | "flatCenter">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPriceCard__RenderFunc(props: {
  variants: PlasmicPriceCard__VariantsArgs;
  args: PlasmicPriceCard__ArgsType;
  overrides: PlasmicPriceCard__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "primary",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.primary
      },
      {
        path: "borders",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.borders
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsyX0GVx02K4UjjJ()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.rootborders_flatLeft]: hasVariant($state, "borders", "flatLeft"),
          [sty.rootborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.rootprimary]: hasVariant($state, "primary", "primary")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxborders_flatCenter]: hasVariant(
            $state,
            "borders",
            "flatCenter"
          ),
          [sty.freeBoxborders_flatLeft]: hasVariant(
            $state,
            "borders",
            "flatLeft"
          ),
          [sty.freeBoxborders_flatRight]: hasVariant(
            $state,
            "borders",
            "flatRight"
          ),
          [sty.freeBoxprimary]: hasVariant($state, "primary", "primary")
        })}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4,
            {
              [sty.h4borders_flatCenter]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.h4borders_flatLeft]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.h4borders_flatRight]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Enterprise"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free"
            : "Pro"}
        </h4>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__dDykZ,
            {
              [sty.textborders_flatCenter__dDykZhVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__dDykZuIvDb]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__dDykZsffNq]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.textprimary__dDykZMxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Flexible power and security"
            : hasVariant($state, "borders", "flatLeft")
            ? "A complete analytics platform."
            : "A complete analytics platform."}
        </div>
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___8N3Os)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/red_crown/images/linePricingPng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        <div
          className={classNames(projectcss.all, sty.columns__bUunr, {
            [sty.columnsprimary__bUunrMxhtC]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__vnIup)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__sGPY, {
                [sty.imgborders_flatLeft__sGPYuIvDb]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/red_crown/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/red_crown/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column___8TjMe, {
              [sty.columnborders_flatRight___8TjMesffNq]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ffMoN,
                {
                  [sty.textborders_flatLeft__ffMoNuIvDb]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__ffMoNsffNq]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__ffMoNMxhtC]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Everything in pro"
                : hasVariant($state, "borders", "flatLeft")
                ? "1 Product"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__tI6Ay, {
            [sty.columnsborders_flatCenter__tI6AYhVg5]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__tI6AyuIvDb]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsborders_flatRight__tI6AYsffNq]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.columnsprimary__tI6AyMxhtC]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__lGy86)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__jF5YA, {
                [sty.imgborders_flatLeft__jF5YAuIvDb]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/red_crown/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/red_crown/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div className={classNames(projectcss.all, sty.column__iBsJ)}>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ly2SN,
                {
                  [sty.textborders_flatCenter__ly2SNhVg5]: hasVariant(
                    $state,
                    "borders",
                    "flatCenter"
                  ),
                  [sty.textborders_flatLeft__ly2SNuIvDb]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textborders_flatRight__ly2SNsffNq]: hasVariant(
                    $state,
                    "borders",
                    "flatRight"
                  ),
                  [sty.textprimary__ly2SNMxhtC]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatRight")
                ? "Volume discount"
                : hasVariant($state, "borders", "flatLeft")
                ? "Analytics board"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
        </div>
        <div
          className={classNames(projectcss.all, sty.columns__gqyoW, {
            [sty.columnsborders_flatCenter__gqyoWhVg5]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.columnsborders_flatLeft__gqyoWuIvDb]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.columnsprimary__gqyoWMxhtC]: hasVariant(
              $state,
              "primary",
              "primary"
            )
          })}
        >
          <div className={classNames(projectcss.all, sty.column__cW9Kw)}>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__ue77A, {
                [sty.imgborders_flatLeft__ue77AUIvDb]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                )
              })}
              displayHeight={"24px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"24px"}
              loading={"lazy"}
              src={
                hasVariant($state, "borders", "flatLeft")
                  ? {
                      src: "/plasmic/red_crown/images/checklistPricingWhitePng.png",
                      fullWidth: 38,
                      fullHeight: 39,
                      aspectRatio: undefined
                    }
                  : {
                      src: "/plasmic/red_crown/images/checklistPng.png",
                      fullWidth: 48,
                      fullHeight: 48,
                      aspectRatio: undefined
                    }
              }
            />
          </div>
          <div
            className={classNames(projectcss.all, sty.column__f13Bt, {
              [sty.columnborders_flatLeft__f13BtuIvDb]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__f13BTsffNq]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__f13BtMxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___07N8C,
                {
                  [sty.textborders_flatLeft___07N8CUIvDb]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  ),
                  [sty.textprimary___07N8CMxhtC]: hasVariant(
                    $state,
                    "primary",
                    "primary"
                  )
                }
              )}
            >
              {hasVariant($state, "borders", "flatLeft")
                ? "Insights panel"
                : hasVariant($state, "primary", "primary")
                ? "Analytics board"
                : "Up to 10 projects"}
            </div>
          </div>
          <div
            className={classNames(projectcss.all, sty.column__dJzoP, {
              [sty.columnborders_flatLeft__dJzoPuIvDb]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnborders_flatRight__dJzoPsffNq]: hasVariant(
                $state,
                "borders",
                "flatRight"
              ),
              [sty.columnprimary__dJzoPMxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          />
        </div>
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__gMwMk, {
              [sty.columnsborders_flatCenter__gMwMkhVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsborders_flatLeft__gMwMkUIvDb]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.columnsprimary__gMwMkMxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__qTucR)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__w2LRx, {
                  [sty.imgborders_flatLeft__w2LRxUIvDb]: hasVariant(
                    $state,
                    "borders",
                    "flatLeft"
                  )
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant($state, "borders", "flatLeft")
                    ? {
                        src: "/plasmic/red_crown/images/checklistPricingWhitePng.png",
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined
                      }
                    : {
                        src: "/plasmic/red_crown/images/checklistPng.png",
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined
                      }
                }
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__cAwEa)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hlWu,
                  {
                    [sty.textborders_flatLeft__hlWuUIvDb]: hasVariant(
                      $state,
                      "borders",
                      "flatLeft"
                    ),
                    [sty.textprimary__hlWuMxhtC]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {hasVariant($state, "borders", "flatLeft")
                  ? "CLI access"
                  : hasVariant($state, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__gKxs7, {
              [sty.columnsborders_flatCenter__gKxs7HVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__gKxs7MxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__ykRvU)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__bwKv3)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/red_crown/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column__lw1RR)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ydluQ,
                  {
                    [sty.textborders_flatCenter__ydluQhVg5]: hasVariant(
                      $state,
                      "borders",
                      "flatCenter"
                    ),
                    [sty.textprimary__ydluQMxhtC]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Insights panel"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__h3D, {
              [sty.columnsborders_flatCenter__h3DHVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__h3DMxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column___6Koi9)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__gkKu4)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "16px"
                    : "24px"
                }
                loading={"lazy"}
                src={{
                  src: "/plasmic/red_crown/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column___1PpuH)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dgg6L,
                  {
                    [sty.textprimary__dgg6LMxhtC]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"CLI access"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__vF8Hh, {
              [sty.columnsborders_flatCenter__vF8HHhVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__vF8HhMxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__kFrIp)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__deGtz)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/red_crown/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column___3WoaI)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ivUal,
                  {
                    [sty.textprimary__ivUalMxhtC]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Automation features"}
              </div>
            </div>
          </div>
        ) : null}
        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__lBW5, {
              [sty.columnsborders_flatCenter__lBW5HVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.columnsprimary__lBW5MxhtC]: hasVariant(
                $state,
                "primary",
                "primary"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.column__o0Zc5)}>
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__jRpdQ)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/red_crown/images/checklistPng.png",
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined
                }}
              />
            </div>
            <div className={classNames(projectcss.all, sty.column___4WK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mhzA,
                  {
                    [sty.textprimary__mhzAMxhtC]: hasVariant(
                      $state,
                      "primary",
                      "primary"
                    )
                  }
                )}
              >
                {"Team features"}
              </div>
            </div>
          </div>
        ) : null}
        <PlasmicImg__
          alt={""}
          className={classNames(sty.img___5VZco)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: "/plasmic/red_crown/images/linePricingPng.png",
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined
          }}
        />

        {(
          hasVariant($state, "borders", "flatCenter")
            ? true
            : hasVariant($state, "borders", "flatRight")
            ? true
            : hasVariant($state, "borders", "flatLeft")
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__lBlo7,
              {
                [sty.textborders_flatCenter__lBlo7HVg5]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__lBlo7UIvDb]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__lBlo7SffNq]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "$ 50"
              : hasVariant($state, "borders", "flatRight")
              ? "$ 800"
              : "$ 0"}
          </div>
        ) : null}
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__m9Eo,
            {
              [sty.textborders_flatCenter__m9EohVg5]: hasVariant(
                $state,
                "borders",
                "flatCenter"
              ),
              [sty.textborders_flatLeft__m9EoUIvDb]: hasVariant(
                $state,
                "borders",
                "flatLeft"
              ),
              [sty.textborders_flatRight__m9EosffNq]: hasVariant(
                $state,
                "borders",
                "flatRight"
              )
            }
          )}
        >
          {hasVariant($state, "borders", "flatRight")
            ? "Starting price, customizable"
            : hasVariant($state, "borders", "flatLeft")
            ? "Free Forever"
            : "per project/month"}
        </div>
        <Button
          data-plasmic-name={"button"}
          data-plasmic-override={overrides.button}
          className={classNames("__wab_instance", sty.button, {
            [sty.buttonborders_flatCenter]: hasVariant(
              $state,
              "borders",
              "flatCenter"
            ),
            [sty.buttonborders_flatLeft]: hasVariant(
              $state,
              "borders",
              "flatLeft"
            ),
            [sty.buttonborders_flatRight]: hasVariant(
              $state,
              "borders",
              "flatRight"
            ),
            [sty.buttonprimary]: hasVariant($state, "primary", "primary")
          })}
          color={hasVariant($state, "borders", "flatLeft") ? "white" : "blue"}
          endIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__wqag0)}
              role={"img"}
            />
          }
          link={"#"}
          startIcon={
            <svg
              className={classNames(projectcss.all, sty.svg__aaRSm)}
              role={"img"}
            />
          }
          submitsForm={true}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dwUeA,
              {
                [sty.textborders_flatCenter__dwUeAhVg5]: hasVariant(
                  $state,
                  "borders",
                  "flatCenter"
                ),
                [sty.textborders_flatLeft__dwUeAuIvDb]: hasVariant(
                  $state,
                  "borders",
                  "flatLeft"
                ),
                [sty.textborders_flatRight__dwUeAsffNq]: hasVariant(
                  $state,
                  "borders",
                  "flatRight"
                )
              }
            )}
          >
            {hasVariant($state, "borders", "flatCenter")
              ? "Go Become pro"
              : hasVariant($state, "borders", "flatRight")
              ? "Everything is yours"
              : hasVariant($state, "borders", "flatLeft")
              ? "Claim Free"
              : "Go Become pro"}
          </div>
        </Button>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4", "button"],
  freeBox: ["freeBox", "h4", "button"],
  h4: ["h4"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  h4: "h4";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPriceCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPriceCard__VariantsArgs;
    args?: PlasmicPriceCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPriceCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPriceCard__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard";
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`;
  }
  return func;
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps
  }
);

export default PlasmicPriceCard;
/* prettier-ignore-end */
