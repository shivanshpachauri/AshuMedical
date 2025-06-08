import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <p className="text-center">
        © {new Date().getFullYear()} Ashu medical, Inc
      </p>
    </footer>
  );
}
