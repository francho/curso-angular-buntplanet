import Rollbar from "rollbar-browser/dist/rollbar.umd.nojson.min";

export default Rollbar.init({
  accessToken: "153cb1d271604acd878f5eebe3d3656f",
  captureUncaught: true,
  payload: {
    environment: "test",
    client: {
      javascript: {
        source_map_enabled: true,
        code_version: __VERSION_TRACKING__,
        guess_uncaught_frames: true
      }
    }
  }
});