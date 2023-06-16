import Link from "next/link";

export default function Home() {
  return (
    <main className="p-10">
      <Link
        href="/mockups/supplier-manager"
        className="block w-fit p-4 font-bold text-blue-700 hover:underline"
      >
        Supplier Manager
      </Link>
      <Link
        href="/table-system"
        className="block w-fit p-4 font-bold text-blue-700 hover:underline"
      >
        Table system
      </Link>
    </main>
  );
}
