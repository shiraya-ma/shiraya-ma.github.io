'use strict';
import React from "react";
import { MaiUIProvider } from "@shiraya-ma/mai-ui";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <MaiUIProvider>
      {children}
    </MaiUIProvider>
  );
};
