"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContactContextType {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <ContactContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
}
