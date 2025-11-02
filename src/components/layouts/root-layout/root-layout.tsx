'use strict';
import React from "react";
import { MaiLink, MaiUIProvider } from "@shiraya-ma/mai-ui";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <MaiUIProvider>
      <div className="flex flex-col grow items-center">
        <Navbar
          shouldHideOnScroll
          isBordered
          classNames={{
            base: 'bg-transparent backdrop-saturate-100'
          }}
        >
          <NavbarContent className="w-full max-w-[80ch] mx-auto justify-items-center">
            <NavbarItem>
              <NavbarBrand>
                <h1 id="top">
                  <MaiLink href="/#top">
                    MaiDocuments
                  </MaiLink>
                </h1>
              </NavbarBrand>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        {children}
      </div>

      <footer>
        <div className="text-center">
          <small>©2024 @shiraya-ma All lights reserved.</small>
        </div>
      </footer>
    </MaiUIProvider>
  );
};
RootLayout.displayName = "RootLayout";
