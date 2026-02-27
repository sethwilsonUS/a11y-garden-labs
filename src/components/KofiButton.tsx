"use client";

import { KofiFloatingButton } from "kofi-react-widget";

export function KofiButton() {
  const username = process.env.NEXT_PUBLIC_KOFI_USERNAME;
  if (!username) return null;

  return (
    <KofiFloatingButton
      username={username}
      background="#059669"
      textColor="#FFFFFF"
      text="Support Us"
    />
  );
}
