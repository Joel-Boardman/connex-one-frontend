import React from "react";

// styles
import { Container } from "./styles";
import { Spinner } from "../Loader/styles";

interface Props {
  epochLoader: boolean | null;
  epochtime: number | false;
  metricsLoader: boolean | null;
  metrics: string | false;
  metricsError: boolean;
  epochError: boolean;
}
const DataContainer: React.FC<Props> = (props) => {
  let {
    epochLoader,
    epochtime,
    metricsLoader,
    metrics,
    metricsError,
    epochError,
  } = props;

  return (
    <Container>
      <div className="container__left">
        {epochError ? (
          <p data-testid="error-1">An error has occurred, please try again.</p>
        ) : epochLoader ? (
          <Spinner />
        ) : (
          <div>
            <p>Time:</p>
            <p>{epochtime}</p>
          </div>
        )}
      </div>
      <div className="container__right">
        {metricsError ? (
          <p data-testid="error-2">An error has occurred, please try again.</p>
        ) : metricsLoader ? (
          <Spinner />
        ) : (
          <div>
            <p>Metrics:</p>
            <p>{metrics}</p>
          </div>
        )}
      </div>
    </Container>
  );
};

export default DataContainer;
