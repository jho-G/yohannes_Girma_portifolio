"use client";

import { useEffect, useState } from "react";

const TYPE_SPEED = 70;
const ERASE_SPEED = 40;
const PAUSE_AFTER_TYPE = 1500;
const PAUSE_AFTER_ERASE = 500;

export function useTypewriter(roles: string[]) {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length];

    if (!isErasing && text === currentRole) {
      const timeout = setTimeout(() => setIsErasing(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }

    if (isErasing && text === "") {
      const timeout = setTimeout(() => {
        setIsErasing(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }, PAUSE_AFTER_ERASE);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setText((current) =>
          isErasing
            ? currentRole.slice(0, current.length - 1)
            : currentRole.slice(0, current.length + 1),
        );
      },
      isErasing ? ERASE_SPEED : TYPE_SPEED,
    );

    return () => clearTimeout(timeout);
  }, [text, isErasing, roleIndex, roles]);

  return text;
}
