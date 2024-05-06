import { Injectable } from '@angular/core';
import { ImageWithDescription, ProjectModel, UrlWithLabel } from './model/project-model';
import { forEach } from '@angular/router/src/utils/collection';
import { WorkExperienceModel, WorkItemModel } from './model/work-experience-model';
import { ScoolExperienceModel } from './model/scool-experience-model';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private projects:ProjectModel[];
  private workExperiences:WorkExperienceModel[];
  private scoolExperiences:ScoolExperienceModel[];

  constructor() {
    this.projects = [
      new ProjectModel("BillAR","Le projet billA.R, est un système d'assistance pour le célèbre jeu du billard. Il permet la détection des billes et"+
        " des queues, afin de créer et d'afficher la trajectoire pour aider le joueur à réaliser son coup.",
         "assets/project/BillAR/logo.png",
         [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/sae_billard"),
          new UrlWithLabel("Téléchargement","https://github.com/MAXCOEUR/sae_billard/releases/latest"),
        ],
        [
          new ImageWithDescription("assets/project/BillAR/1.png", "Salut à tous ! 👋 Excitant de partager un aperçu de notre projet en cours à l'école : Bill.A.R 🎱. Imaginez un billard capturé par une webcam 📷, suivi d'un modèle IA entraîné pour détecter chaque mouvement de boule et de queue ! 🚀"),
          new ImageWithDescription("assets/project/BillAR/2.png", "Aujourd'hui, nous plongeons dans l'entraînement du modèle, affinant ses capacités à repérer la boule et la queue avec précision. 🤯 Le mariage de la technologie, du billard et de l'IA ouvre des portes infinies pour des expériences de jeu immersives."),
          new ImageWithDescription("assets/project/BillAR/3.png", "Challenges passionnants, apprentissages constants - c'est le cœur de notre aventure Bill.A.R. 🌟 Hâte de vous tenir informés de nos progrès et de partager bientôt des séquences du Bill.A.R en action ! 🎬"),
          new ImageWithDescription("assets/project/BillAR/4.jpeg", "Rejoignez-nous Nikola CHEVALLIOT Hugo Millot et Maël Chalon dans cette aventure de fusion entre le réel et le virtuel ! 🌐"),
          new ImageWithDescription("assets/project/BillAR/5.jpeg", "Ce projet a été réalisé dans le cadre de l'IUT avec comme tuteur Monsieur Telez. Les technologies utilisées sont Python, YOLO et OpenCV."),
        ]),
      new ProjectModel("Pouic","Pouic est une application de type réseau social qui permet aux utilisateurs d'échanger des messages privés, de publier "+
        "des posts similaires à ceux de Twitter et de partager des images quotidiennes, à l'instar de BeReal.",
         "assets/project/Pouic/logo.png",
         [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/pouic_app"),
          new UrlWithLabel("Téléchargement","https://pouic-web-regles-confidentialit.vercel.app/"),
          new UrlWithLabel("regles de confidentialité","https://pouic-web-regles-confidentialit.vercel.app/"),
        ],
        [
          new ImageWithDescription("assets/project/Pouic/1.jpeg", "Qu’est-ce que Pouic ? Pouic est un doux mélange entre Twitter et Bereal, avec une touche unique. Voici ce que vous pouvez attendre de cette application innovante :"),
          new ImageWithDescription("assets/project/Pouic/2.jpeg", "📝 Des Posts et des Messages Privés : Comme sur Twitter, vous pouvez partager vos pensées, vos découvertes et vos moments de vie avec vos amis et vos abonnés. Mais ce n’est pas tout ! Vous pouvez également échanger des messages privés avec vos proches, pour des conversations plus intimes."),
          new ImageWithDescription("assets/project/Pouic/3.jpeg", "📸 Double Photo par Jour : Inspiré par Bereal, Pouic vous encourage à capturer deux moments chaque jour. Que ce soit un coucher de soleil, un sourire complice ou une tasse de café fumante, partagez ces instants précieux avec la communauté Pouic !"),
          new ImageWithDescription("assets/project/Pouic/5.jpeg", "👥 Liste d’Amis : Créez votre cercle d’amis et suivez leurs aventures. Vous pouvez aimer, commenter et partager leurs posts, renforçant ainsi les liens qui vous unissent."),
          new ImageWithDescription("assets/project/Pouic/6.jpeg", "Auto-Hébergement dans un Serveur Docker Pouic est auto-hébergé sur mon propre serveur à la maison, déployé via Docker. Si vous rencontrez des coupures, c’est peut-être dû à des problèmes matériels ou réseaux chez moi, comme un disque défaillant, et je n’ai malheureusement pas de backup ne mettez pas des information trop importante. De plus, les réseaux Wi-Fi publics peuvent parfois bloquer certaines interactions. Mais c’est aussi ce qui rend Pouic unique et authentique ! 🛠️"),
          new ImageWithDescription("assets/project/Pouic/4.jpeg", "Où Trouver Pouic ? Vous pouvez télécharger Pouic sur Android dès maintenant avec le bouton dessus 'Téléchargement'. 📲"),
          new ImageWithDescription("assets/project/Pouic/7.jpeg", "Pouic est un projet personnel réalisé en Flutter et Node.js pour l'API/serveur de sockets."),

        ]),
      new ProjectModel("City Card","CityCards est une application qui permet aux passionnés de voyages et aux collectionneurs de découvrir de nouvelles"+
        " villes de France. Les utilisateurs peuvent collectionner des cartes virtuelles de villes, chacune accompagnée de statistiques sur la ville.",
        "assets/project/City Card/logo.png",
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/citycards"),
          new UrlWithLabel("Téléchargement","https://github.com/MAXCOEUR/citycards/releases/latest")
        ],
        [
          new ImageWithDescription("assets/project/City Card/1.jpg", "Introduction : CityCards est une application mobile développée en Kotlin qui permet aux utilisateurs de collectionner des cartes virtuelles représentant différentes villes de France. Dans ce document, nous allons vous guider à travers les aspects essentiels de notre projet."),
          new ImageWithDescription("assets/project/City Card/2.jpg", "Description : CityCards est une application qui permet aux passionnés de voyages et aux collectionneurs de découvrir de nouvelles villes de France. Les utilisateurs peuvent collectionner des cartes virtuelles de villes, chacune accompagnée de statistiques sur la ville. Les cartes sont classées par régions, et les utilisateurs peuvent suivre leur progression en collectant des cartes de villes."),
          new ImageWithDescription("assets/project/City Card/3.jpg", "Fonctionnalités : Tirez des cartes aléatoires pour les ajouter à votre collection. \nCollectionnez des cartes virtuelles de villes de France.\nDécouvrez des informations détaillées sur chaque ville.\nClassez vos cartes par régions pour mieux organiser votre collection.\nSuivez votre progression en collectionnant des cartes de villes.\nPersonnalisez votre profil.\nRecherchez des villes spécifiques pour accéder aux détails.\nMettez en favori vos villes préférées"),
          new ImageWithDescription("assets/project/City Card/4.jpg", "Ce projet a été réalisé à l'IUT durant le premier semestre de la troisième année. C'était un projet de groupe avec Mohamed Laidaoui et Antoine Guillot."),
        ]),
      new ProjectModel("Dj Application","Création d’une application de mixage pour D.J. avec Youtube Music + Interaction avec une table de mixage réel",
        "assets/project/Dj Application/logo.png",
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/DjApplication3"),
          new UrlWithLabel("Téléchargement","https://github.com/MAXCOEUR/DjApplication3/releases/latest")
        ],
        [
          new ImageWithDescription("assets/project/Dj Application/2.jpeg","🚀 Excité de partager mon projet personnel avec vous : DjApplication! 🎶 Développé entièrement en solo en dehors des cours, cette application novatrice utilise le contrôleur Hercules DJ Instinct pour offrir une expérience unique dans la diffusion de musique."),
          new ImageWithDescription("assets/project/Dj Application/3.png","Contrôlez plusieurs pistes entre 2 et 4, préécoutez-les dans votre casque, et profitez d'une fonction exclusive permettant de brancher deux cartes son distinctes. Une pour la sortie haut-parleur, l'autre pour la pré-écoute dans le casque. 🎧✨"),
          new ImageWithDescription("assets/project/Dj Application/1.jpeg","J'ai également intégré la fonction de calcul des BPM pour faciliter la gestion de votre playlist. Mais la meilleure fonctionnalité à mes yeux? L'application peut lire les fichiers MP3, mais elle va encore plus loin! Elle vous permet de rechercher et télécharger de la musique directement depuis YouTube. De plus, si vous possédez un compte YouTube Music premium, vous pouvez naviguer dans vos playlists YouTube Music et les lire également. Une façon inédite de personnaliser votre expérience musicale!"),
          new ImageWithDescription("assets/project/Dj Application/4.png","C'est une aventure personnelle qui a pris forme, et je suis ravi de la partager avec vous tous. Téléchargez DjApplication dès maintenant pour redéfinir votre expérience musicale! 🎵📲"),
          new ImageWithDescription("assets/project/Dj Application/5.png","Ce projet a été réalisé par moi seul pour des besoins personnels. Il a été réalisé en C# avec WPS."),
        ]),
      new ProjectModel("Suivi D’Apprentissage et d’Évaluation","Application Android et site web avec une base de données et une API. Avec la gestion des"+
        " notations des compétences pour les intervenants en IME (Institut Médicoéducatif).",
        "assets/project/Suivi apprentissage et evaluation/logo.png",
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/SAE")
        ],
        [
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/1.png", "Fonctionnalités de SAE : SAE se compose d'une application Android utilisée par les éducateurs pour attribuer des notes et d'un site web offrant des fonctionnalités similaires mais plus complètes. Nous nous concentrerons principalement sur le site web dans ce résumé, bien que l'application offre les mêmes possibilités. Sur le site, les éducateurs peuvent se connecter et créer des sessions de jeux en choisissant une activité associée à des compétences, ainsi que les élèves participant."),
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/2.png", "Système d'historique : SAE inclut un système d'historique permettant de rejouer une session précédente avec les mêmes paramètres, y compris les élèves et l'activité. Toutes ces données sont modifiables dans l'interface."),
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/3.png", "Gestion des compétences : Les compétences sont associées aux activités dans SAE. Lorsqu'une activité est sélectionnée, les éducateurs doivent noter les compétences liées à cette activité. Ces compétences peuvent être liées à plusieurs activités simultanément."),
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/4.png", "Page de notation : La page de jeux permet de sélectionner un élève et une compétence, puis de leur attribuer une note de 0 à 100, ou de ne pas les noter du tout."),
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/5.png", "Mode élève et agenda : Les élèves disposent d'un agenda montrant où ils ont été notés, ce qui les dirige vers une page récapitulative des notes et des graphiques."),
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/6.png", "Visualisation des données : SAE génère des graphiques basés sur les notes des élèves, fournissant une analyse visuelle des performances individuelles dans les sessions de jeux."),
          new ImageWithDescription("assets/project/Suivi apprentissage et evaluation/7.png", "Ce projet a été réalisé pendant toute la deuxième année de BUT informatique en groupe avec Mael CHALON, Hugo MILLOT et Mathis GERBOUD. Tout a été développé en utilisant PHP brut pour l'API et le site web, tandis que l'application côté utilisateur a été créée en Java."),
        ]),
      new ProjectModel("Patrick le Jeux","Le jeu 'Patrick le Stégosaure' vous permet de revivre les trois premiers épisodes de la série, mais cette fois-ci"+
        " en incarnant Patrick lors de combats gigantesques et inoubliables.",
        "assets/project/Patrick le Jeux/logo.png",
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/Patrick_Le_Jeux"),
          new UrlWithLabel("itch io","https://max-coeur.itch.io/patrick-le-stegosaure/"),
          new UrlWithLabel("site web Patrick","https://patrick-le-stegosaure.vercel.app/")
        ],
        [
          new ImageWithDescription("assets/project/Patrick le Jeux/1.png", "Dans ce jeu, il y a un système d'objets à collectionner qui est lié à l'univers de Patrick le Stégosaure."),
          new ImageWithDescription("assets/project/Patrick le Jeux/2.png", "Chaque map contient trois de ces objets, dont l'un est obtenu comme trophée une fois que l'on a vaincu le boss."),
          new ImageWithDescription("assets/project/Patrick le Jeux/3.png", "Le jeu 'Patrick le Stégosaure le Jeu' est un classique jeu de plateforme où vous pouvez collecter des objets bonus et éliminer des ennemis."),
          new ImageWithDescription("assets/project/Patrick le Jeux/4.png", "Grâce à l'agilité de Patrick, vous serez en mesure de progresser rapidement et de remporter la victoire."),
          new ImageWithDescription("assets/project/Patrick le Jeux/5.png", "Allez-y et amusez-vous bien ! Vous pouvez trouver le lien sur le bouton 'Itch.io' en haut de la page."),
          new ImageWithDescription("assets/project/Patrick le Jeux/6.png", "La saga de Patrick le stégosaure possède un site web disponible sur le bouton 'Site web' en haut de la page."),
          new ImageWithDescription("assets/project/Patrick le Jeux/7.jpg", "Ce projet est une réalisation en solo utilisant le moteur Godot et le langage C#."),
        ]),
    ];



    this.workExperiences = [
      new WorkExperienceModel(
        "assets/experience/work/declic.png",
        "DECLIC Solution informatique",
        "depuis avril 2023",
        "Charnay-lès-Mâcon, Bourgogne-Franche-Comté, France",
        [
          new WorkItemModel(
            "Développeur logiciel",
            "Contrat en Alternance",
            "septembre 2023 - aujourdhui",
            "Je suis actuellement en alternance chez Déclic pour l'année scolaire 2023/2024, dans le cadre de la troisième année du BUT informatique. Mes missions comprennent : la réalisation de rapports sur Power BI pour les clients, mon intégration dans l'équipe de développement Windows, l'intégration de Power BI à la solution LogVin ERP ainsi que la réalisation de tâches sur la solution LogVin ERP. "
          ),
          new WorkItemModel(
            "Développeur logiciel",
            "CDD",
            "juillet 2023 - août 2023",
            "Le CDD est arrivé après le stage pour continuer le travail entamé pendant le stage. Durant ce CDD, j'ai découvert Angular."
          ),
          new WorkItemModel(
            "Développeur logiciel",
            "Stage",
            "avril 2023 - juin 2023",
            "Je suis arrivé chez Déclic dans le cadre du stage de deuxième année du BUT informatique. Mes missions comprenaient : Réaliser une application transférant des vues As400 en table SQL. Me former à Power BI. Créer des rapports Power BI."
          ),
        ]
      ),
      new WorkExperienceModel(
        "assets/experience/work/monterrat.jpg",
        "Maison Monterrat",
        "2021 - 2022",
        "Feillent, Rhône-Alpes Auvergne, France",
        [
          new WorkItemModel(
            "Préparateur de commande",
            "Intérimaire",
            "juillet 2022 - juillet 2022",
            "J'ai travaillé chez Maison Monterrat pour l'été en intérim, cette fois-ci en tant que préparateur de commandes. C'était beaucoup moins répétitif, et j'ai eu beaucoup plus d'interactions avec mes collègues. Une très bonne expérience."
          ),
          new WorkItemModel(
            "Ouvrier agroalimentaire",
            "Intérimaire",
            "juillet 2021 - juillet 2021",
            "J'ai travaillé en tant qu'intérimaire pendant 1 mois. C'était un travail dur mais enrichissant, très répétitif avec très peu d'interaction durant la journée de travail."
          ),
        ]
      ),
      new WorkExperienceModel(
        "assets/experience/work/xefi.png",
        "XEFI",
        "2018",
        "Charnay-lès-Mâcon, Bourgogne-Franche-Comté, France",
        [
          new WorkItemModel(
            "Technicien réparation informatique",
            "Stage",
            "janvier 2018 - janvier 2018",
            "J'ai effectué ce stage dans le cadre du stage de 3ème. Ce stage m'a plu et m'a conforté dans l'idée que je voulais continuer mes études dans l'informatique."
          ),
        ]
      ),
    ];
    this.scoolExperiences =[
      new ScoolExperienceModel(
        "assets/experience/scool/ynov.png",
        "Ynov",
        "2024 - 2026",
        "Lyon",
        "Mastère Expert en développement Logiciel, Mobile & IOT",
        ""
      ),
      new ScoolExperienceModel(
        "assets/experience/scool/lyon1.png",
        "Universite Claude Bernard Lyon 1",
        "2021 - 2024",
        "IUT Bourg en Bresse",
        "BUT informatique",
        ""
      ),
      new ScoolExperienceModel(
        "assets/experience/scool/lycee.png",
        "Lycee René Cassin",
        "2018 - 2021",
        "Mâcon",
        "BAC Général spécialité Mathématique et numérique",
        "mention : bien"
      ),
      new ScoolExperienceModel(
        "assets/experience/scool/college.jpg",
        "College Roger Poulnard",
        "2014 - 2018",
        "Bagé-Dommartin, Bagé-la-ville",
        "",
        "mention : bien"
      ),
    ];
  }

  getProjects():ProjectModel[]{
    return this.projects;
  }
  getProject(id:number):ProjectModel{
    for(var project of this.projects){
      if(project.id==id){
        return project;
      }
    }
    return null;
  }

  getWorkExperience():WorkExperienceModel[]{
    return this.workExperiences;
  }
  getScoolExperience():ScoolExperienceModel[]{
    return this.scoolExperiences;
  }
}
