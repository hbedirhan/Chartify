import { configureStore } from "@reduxjs/toolkit";
import barSlice from "./barSlice";
import lineSlice from "./lineSlice";
import typeSlice from "./typeSlice";
import pieSlice from "./pieSlice";
import polarAreaSlice from "./polarAreaSlice";
import radarSlice from "./radarSlice";
import scatterSlice from "./scatterSlice";

export const store = configureStore({
    reducer : {
        type: typeSlice,
        line: lineSlice,
        bar: barSlice,
        pie: pieSlice,
        polarArea: polarAreaSlice,
        radar: radarSlice,
        scatter: scatterSlice,
    }
});