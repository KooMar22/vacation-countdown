function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p><a href="https://github.com/KooMar22?tab=repositories" target="_blank" rel="noopener noreferrer">MarkoDreams</a> ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
