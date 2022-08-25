export default function Header() {
    return (
        <header className="header--comp">
            <nav className="header--nav">
                <div className="brand">
                    <img src="./src/assets/images/logo.jpg" className="logo"/>
                    <h1>MemeGenerator</h1>
                </div>
                <p className="nav--title">React Project </p>
            </nav>
        </header>
    );
}