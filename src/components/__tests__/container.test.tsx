import { render, screen } from "@testing-library/react";
import DataContainer from "../Container";

test("Check what renders with default props.", () => {
  render(
    <DataContainer
      epochLoader={false}
      epochtime={false}
      metricsLoader={false}
      metrics={false}
      metricsError={false}
      epochError={false}
    />
  );

  expect(screen.getByText(/time:/i)).toBeInTheDocument();
  expect(screen.getByText(/metrics:/i)).toBeInTheDocument();
});

test("Check if error alerts are rendered for Metrics section.", () => {
  render(
    <DataContainer
      epochLoader={false}
      epochtime={false}
      metricsLoader={false}
      metrics={false}
      metricsError={true}
      epochError={false}
    />
  );

  expect(screen.getByTestId("error-2")).toBeInTheDocument();
});

test("Check if error alerts are rendered for Epoch section.", () => {
  render(
    <DataContainer
      epochLoader={false}
      epochtime={false}
      metricsLoader={false}
      metrics={false}
      metricsError={false}
      epochError={true}
    />
  );

  expect(screen.getByTestId("error-1")).toBeInTheDocument();
});
