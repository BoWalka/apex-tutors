import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-bold mb-4">Apex Academy</div>
        <p className="mb-6 opacity-80">Premium Private Tutoring • [City] & Online Worldwide</p>
        <p className="text-sm opacity-60">
          © {new Date().getFullYear()} Apex Academy. All rights reserved. | Limited spots only.
        </p>
      </div>
    </footer>
  );
}