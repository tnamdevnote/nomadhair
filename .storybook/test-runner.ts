import { injectAxe, checkA11y, configureAxe } from "axe-playwright";
import { TestRunnerConfig, getStoryContext } from "@storybook/test-runner";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };

const config: TestRunnerConfig = {
  async preVisit(page, story) {
    // Inject Axe utilities in the page before the story renders
    await injectAxe(page);
    const context = await getStoryContext(page, story);
    const viewportName = await context.parameters?.viewport?.defaultViewport;
    const viewportParameter = INITIAL_VIEWPORTS[viewportName]?.styles;

    if (viewportParameter) {
      const viewportSize = Object.entries(viewportParameter).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // make sure your viewport config in Storybook only uses numbers, not percentages
          [screen]: parseInt(size),
        }),
        { width: 0, height: 0 },
      );

      page.setViewportSize(viewportSize);
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
  async postVisit(page, context) {
    // Get entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);

    // Do not test a11y for stories that disable a11y
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }

    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });

    // in Storybook 6.x, the selector is #root
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
      // pass axe options defined in @storybook/addon-a11y
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};

export default config;
