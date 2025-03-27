const Header=(props)=>{
        return(
            <div className={props.bgClass}>
                <div className="text-content">
                    <h1
                       className="header-title">
                         {props.title}
                         {props.children}
                    </h1>
                </div>

            </div>
        )
}
export default Header;