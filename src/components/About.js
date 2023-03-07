import '../styles/About.css'

export default function About(){

    let themeDots = ["light-mode","blue-mode","green-mode","purple-mode"]
    let themeDataMapping = localStorage.getItem('theme');

    if(themeDataMapping){
        document.querySelector("body").setAttribute("data-theme",themeDataMapping)
    }

    const setThemeEventListener =(getThemeAttr) => element =>{
        document.querySelector("body").setAttribute("data-theme",getThemeAttr)
        localStorage.setItem('theme',getThemeAttr);
    }

    return(
        <div className="main" id="home">
            <div className="main__container">
                <div className="main__content">
                    <h1 className="theme-text">WE ARE 弓UPES</h1>
                    <p className="theme-text">The Rising Dawn</p>
                    <div className="theme-options-wrapper">
                        
                        {/* <div data-mode="blue-mode" id="blue-mode" className="theme-dot"></div>
                        <div data-mode="green-mode" id="green-mode" className="theme-dot"></div>
                        <div data-mode="purple-mode" id="purple-mode" className="theme-dot"></div> */}
                        {themeDots.map((themeType,themeIndex)=>{
                            return <div key= {`${themeType}-${themeIndex}`} data-mode= {themeType} id={themeType} className="theme-dot" onClick={setThemeEventListener(themeType)}></div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}