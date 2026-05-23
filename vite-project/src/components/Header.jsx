import "./Header.css";

function Header() {

    return (

        <header className="header">
            <h1 className="header_name" onClick={() => nav("home")}>ANDREA ESTRADA</h1>

            <nav className="header_nav">
                {["work", "about", "contact"].map(p => ( /*Arreglo donde muestra las opciones de navegación, el map se usa para recorrerlo*/
                    <span key={p} onClick={() => nav(p)} className={`header_link ${cur === p ? "header_link--active" :""}`}>
                        {p}
                    </span>
                ))} 
            </nav>
        </header>

    );
}