import './lnkdprjct.css'
import './commoncss.css'

export default function Lnkdprjct() {
    
    return (
        <div className="bigboss">
            <div className="cards">

                <div className="card" href="darula.vercel.app"> <p className="appname">Darula</p>
                    <a href="http://darufront.vercel.app/placeorders">
                        <img className="logo" src='./DarulaLogo.jpeg'></img>
                    </a>
                    <div className="content">
                        Darula is an platform where customer can signup as an user
                        or a earner.
                        A user has option to buy any alcohol listed in the product
                        categories and an earner has options to earn the money by
                        fulfulling ordrs of the users
                    </div>
                </div>

                <div className="card"> <p className="appname">Alpaviraam</p>
                    <a href="http://alpaviraam.vercel.app/home">
                        <img className="logo" src='./alpaviraamBlack.png'></img>
                    </a>
                    <div className="content">
                        Mental health is an essential component of overall well-being
                        and plays a crucial role in our ability to lead a fulfilling
                        life.
                        Alpaviraam is our attempt to make our society more aware about
                        of the mental issues which pertains our modern society and to
                        enhance overall well being of the society.
                    </div>
                </div>

                <div className="card"> <p className="appname">Instana</p>
                    <a href="http://instana.herokuapp.com">
                        <img className="logo" src='./InstanaLogo.jpeg'></img>
                    </a>
                    <div className="content" >
                        Instana is an online social media platform where users can
                        anonymously join in using their organisations email id and
                        then comment and discuss about their organizations
                    </div>
                </div>
            </div>

            <div className="textinabox">
                <h1> Resume </h1>
            </div>

            <div className="bbchild">
                <embed className="resume"  src="SachinSinghCV.pdf" type="application/pdf" />
            </div>  
        </div>

    )
}