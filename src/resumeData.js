import picture from './components/image/1.png'
import pictureTwo from './components/image/2.png'
import pictureThree from './components/image/3.png'
import pictureFour from './components/image/5.png'
import Svg from './components/image/Logo_Airbnb.svg'

let resumeData = {
    "navbar":["Français (FR)","EUR €","Devenir hôte","Créer son expérience","Aide","Inscription","Connexion"],
    "explorerCard":[
        {
            "picture":picture,
            "title":"Logements",
        },
        {
            "picture":pictureTwo,
            "title":"Expériences",
        },
        {
            "picture":pictureThree,
            "title":"Aventures",
        },
    ],
    "layover":[
        {
            "title":"Hébergements Airbnb Plus",
            "paragraph":"Une sélection de logements vérifiés selon des critères de qualité et de design",
            "picture":pictureFour,
            "svg":Svg,
            "btnTitle":"Découvrir des logements  >"
        }
    ]
}

export default resumeData;