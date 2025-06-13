'use client';

import React from "react";
import { useFormStatus } from "react-dom";

export default function MealFormSubmit() {
  const { pending } = useFormStatus();
  return <button disabled={pending} type="submit">{pending ? "Sharing..." : "Share Meal"}</button>;
}
