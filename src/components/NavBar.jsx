
const NavBar = () => {
  return (
    <div className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div className="container">
    <a href="/" className="navbar-brand">Oura Movies</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" href="/">Home
                <span className="visually-hidden">(current)</span>
            </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="themes">Themes</a>
          <div className="dropdown-menu" aria-labelledby="themes">
            <a className="dropdown-item" href="../default/">Default</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="../cerulean/">Cerulean</a>
            <a className="dropdown-item" href="../cosmo/">Cosmo</a>
            <a className="dropdown-item" href="../cyborg/">Cyborg</a>
            <a className="dropdown-item" href="../darkly/">Darkly</a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="../help/">Help</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://blog.bootswatch.com/">Blog</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" id="download">Journal</a>
          <div className="dropdown-menu" aria-labelledby="download">
            <a className="dropdown-item" rel="noopener" href="#">Open in JSFiddle</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="../5/journal/bootstrap.min.css" download>bootstrap.min.css</a>
            <a className="dropdown-item" href="../5/journal/bootstrap.css" download>bootstrap.css</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="../5/journal/_variables.scss" download>_variables.scss</a>
            <a className="dropdown-item" href="../5/journal/_bootswatch.scss" download>_bootswatch.scss</a>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ms-md-auto">
        <li className="nav-item">
          <a target="_blank" rel="noopener" className="nav-link" href="#"><i className="bi bi-github" /> GitHub</a>
        </li>
        <li className="nav-item">
          <a target="_blank" rel="noopener" className="nav-link" href="#"><i className="bi bi-twitter" /> Twitter</a>
        </li>
      </ul>
    </div>
  </div>
</div>



  )
}

export default NavBar