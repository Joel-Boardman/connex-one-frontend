import React, { ChangeEvent, useEffect, useState, useCallback } from "react";
import axios from "axios";

// Styles
import { Section } from "./styles";
import { Button } from "@mui/material";

import DataContainer from "../../components/Container";

const Hero: React.FC = () => {
  const [authToken, setAuthToken] = useState<string>("");

  const [epochtime, setEpochtime] = useState<number | false>(false);
  const [metrics, setMetrics] = useState<string | false>(false);

  const [epochError, setEpochError] = useState<boolean>(false);
  const [metricsError, setMetricsError] = useState<boolean>(false);

  const [epochLoader, setEpochLoader] = useState<boolean>(false);
  const [metricsLoader, setMetricsLoader] = useState<boolean>(false);

  const [resetTimer, setResetTimer] = useState<boolean>(false);

  // Handle all functionality regarding Epoch data, making an API call and handling state hooks.
  const handleEpoch = useCallback(async () => {
    try {
      setEpochLoader(true);
      setEpochError(false);

      let res = await axios({
        method: "GET",
        url: process.env.REACT_APP_ENDPOINT + "time",
        headers: {
          Authorization: authToken,
        },
      });

      setEpochLoader(false);
      setEpochtime(res.data.properties.epoch.description);
    } catch (err) {
      setEpochError(true);
      return err;
    }
  }, [authToken]);

  // Handle all functionality regarding Metrics data, making an API call and handling state hooks.
  const handleMetrics = useCallback(async () => {
    try {
      setMetricsError(false);
      setMetricsLoader(true);
      let res = await axios({
        method: "GET",
        url: process.env.REACT_APP_ENDPOINT + "metrics",
        headers: {
          Authorization: authToken,
        },
      });
      setMetricsLoader(false);
      setMetrics(res.data);
    } catch (err) {
      setMetricsError(true);
      return err;
    }
  }, [authToken]);

  // Begin API call to grab Epoch and Metric data every thirty seconds, listens to change in 'resetTimer' to restart the timer.
  useEffect(() => {
    const interval = setInterval(async () => {
      await handleEpoch();
      await handleMetrics();
    }, 30000);
    return () => clearInterval(interval);
  }, [resetTimer, handleMetrics, handleEpoch]);

  return (
    <Section>
      <div className="border">
        <h1>Connex One Technical Test</h1>
        <DataContainer
          epochLoader={epochLoader}
          epochtime={epochtime}
          metricsLoader={metricsLoader}
          metrics={metrics}
          epochError={epochError}
          metricsError={metricsError}
        />
        <input
          type="text"
          placeholder="API Token Input"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setAuthToken(e.currentTarget.value);
          }}
        />
        <div className="btn-container">
          <Button
            variant="contained"
            onClick={async () => {
              await handleEpoch();
              await handleMetrics();
              setResetTimer(!resetTimer);
            }}
          >
            Call server
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
