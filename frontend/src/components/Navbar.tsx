import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-end gap-x-4">
      <Link
        className="bg-gray-300 rounded-lg p-2 hover:bg-gray-400 hover:scale-105 transition-transform duration-200"
        href="/"
      >
        Home
      </Link>
      <Link
        className="bg-gray-300 rounded-lg p-2 hover:bg-gray-400 hover:scale-105 transition-transform duration-200"
        href="/myprofile"
      >
        My Profile
      </Link>
      <Link
        className="bg-gray-300 rounded-lg p-2 hover:bg-gray-400 hover:scale-105 transition-transform duration-200"
        href="/sellticket"
      >
        Sell Ticket
      </Link>
      <Link
        className="bg-gray-300 rounded-lg p-2 hover:bg-gray-400 hover:scale-105 transition-transform duration-200"
        href="/mytickets"
      >
        My Tickets
      </Link>
    </div>
  );
}
