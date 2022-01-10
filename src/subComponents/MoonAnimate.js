import Rive, { Layout, Fit, Alignment } from "rive-react";
import Moon from "../assets/animations/moon-animation.riv";

export const MoonAnimate = () => (
  <Rive src={Moon} layout={new Layout({ fit: Fit.FitWidth })} />
);
