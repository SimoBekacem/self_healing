import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://d004b10283e817e29f600bbebc6f30af@o4509316252303360.ingest.de.sentry.io/4509354515497040",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
