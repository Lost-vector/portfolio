import "./footer.css"

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{`© ${year} Franck Alonso. Built with React.`}</p>
    </footer>
  )
}

export default Footer