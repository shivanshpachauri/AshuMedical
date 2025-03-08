import "./footer.css";
export default function Footer() {
  return (
    <div id="footerid">
      <div className="container">
        <footer className="py-3 my-4">
          <p className="text-center text-body-secondary">
            © {new Date().getFullYear()} Ashu medical, Inc
          </p>
        </footer>
      </div>
    </div>
  );
}
