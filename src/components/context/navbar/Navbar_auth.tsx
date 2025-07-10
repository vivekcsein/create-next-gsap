"use client";
import React, { useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/shadcn/dialog";
import { Button } from "@/components/ui/shadcn/button";
import AuthPage from "@/components/layouts/Authpage";
import { SheetTitle } from "@/components/ui/shadcn/sheet";
import { DialogContentUserAuth } from "@/components/ui/custom/dialog";

const Navbar_auth = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogTrigger asChild className="border-none cursor-pointer font">
        <Button
          variant="empty"
          className="textFont text-background dark:text-foreground  bg-destructive hover:bg-primary h-6 border-4 border-red-400 "
        >
          Signin
        </Button>
      </DialogTrigger>
      <DialogContentUserAuth>
        <AuthPage />
      </DialogContentUserAuth>
      <SheetTitle className="hidden"></SheetTitle>
    </Dialog>
  );
};

export default Navbar_auth;
