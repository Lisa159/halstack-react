import React from "react";
import { DxcTabsForSections } from "@dxc-technology/halstack-react";

import ComponentDoc from "../../common/ComponentDoc";
import DocTitle from "../../../../common/DocTitle";
import Example from "../../common/Example";
import SliderPropsTable from "./api.jsx";
import SliderTokensTable from "./Tokens.jsx";
import Section from "../../common/Section";
import ComponentHeader from "../../common/ComponentHeader";
import controlled from "./examples/controlled";
import uncontrolled from "./examples/uncontrolled";
import discrete from "./examples/discrete";
import continuous from "./examples/continuous";
import withoutLimits from "./examples/without-limits";
import input from "./examples/input";
import disabled from "./examples/disabled";
import sized from "./examples/sized";

function Slider() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Slider" status="ready"></ComponentHeader>
      <DxcTabsForSections
        stickAtPx={64}
        tabsMode="underlined"
        sections={[
          {
            tabLabel: "Props",
            section: () => (
              <Section>
                <DocTitle size={2}>Props</DocTitle>
                <SliderPropsTable />
              </Section>
            ),
          },
          {
            tabLabel: "Theming",
            section: () => (
              <Section>
                <DocTitle size={2}>Theming</DocTitle>
                <SliderTokensTable />
              </Section>
            ),
          },
          {
            tabLabel: "Examples",
            section: () => (
              <Section>
                <DocTitle size={2}>Examples</DocTitle>
                <Example
                  title="Controlled Slider"
                  example={controlled}
                ></Example>
                <Example
                  title="Uncontrolled Slider"
                  example={uncontrolled}
                ></Example>
                <Example title="Discrete Slider" example={discrete}></Example>
                <Example
                  title="Continuous Slider"
                  example={continuous}
                ></Example>
                <Example
                  title="Slider without limit values"
                  example={withoutLimits}
                ></Example>
                <Example title="Slider with input" example={input}></Example>
                <Example title="Sized Slider" example={sized}></Example>
                <Example title="Disabled Slider" example={disabled}></Example>
              </Section>
            ),
          },
        ]}
      ></DxcTabsForSections>
    </ComponentDoc>
  );
}

export default Slider;
