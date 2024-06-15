/* Core */
import { createLogger } from "redux-logger";
import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware = [
  createLogger({
    duration: true,
    timestamp: false,
    collapsed: true,
    colors: {
      title: () => "#139BFE",
      prevState: () => "#1C5FAF",
      action: () => "#149945",
      nextState: () => "#A47104",
      error: () => "#ff0005",
    },
    predicate: () => typeof window !== "undefined",
  }),
];

export const rtkQueryErrorLogger: Middleware =
  () => (next) => (action: unknown) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (
      isRejectedWithValue(action) &&
      ((action?.payload as { status: number }).status === 401 ||
        (action?.payload as { responseStatus: number }).responseStatus === 401)
    ) {
      window.location.href = "/login";
    }

    return next(action);
  };
