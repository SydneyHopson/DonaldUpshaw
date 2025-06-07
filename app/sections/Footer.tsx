export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-lime-600 text-white text-center text-sm py-6 mt-20">
      © {new Date().getFullYear()} Donald Upshaw • All rights reserved.
    </footer>
  );
}
