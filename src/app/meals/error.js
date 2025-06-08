"use client";
export default function ErrorPage({error}) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>We could not load the meals at this time. Please try again later.</p>
    </main>
  );
}