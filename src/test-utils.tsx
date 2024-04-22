import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./app/store";

const ALL_PROVIDER = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const CUSTOMR_RENDER = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrappers'>,
) => render(ui, {wrapper: ALL_PROVIDER, ...options});

export * from '@testing-library/react';
export { CUSTOMR_RENDER as render};