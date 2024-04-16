import { Injectable } from '@angular/core';
import { ImageWithDescription, ProjectModel, UrlWithLabel } from './model/project-model';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  private projects:ProjectModel[];

  constructor() {
    this.projects = [
      new ProjectModel("BillAR","Le projet billA.R, est un système d'assistance pour le célèbre jeu du billard. Il permet la détection des billes et"+ 
        "des queues, afin de créer et d'afficher la trajectoire pour aider le joueur à réaliser son coup.",
         "assets/project/BillAR/logo.png",
         [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/sae_billard")
        ],  
        [
          
        ]),
      new ProjectModel("Pouic","Pouic est une application de type réseau social qui permet aux utilisateurs d'échanger des messages privés, de publier "+
        "des posts similaires à ceux de Twitter et de partager des images quotidiennes, à l'instar de BeReal.",
         "assets/project/Pouic/logo.png",
         [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/pouic_app")
        ],  
        [
          new ImageWithDescription("image11", "des11"), 
          new ImageWithDescription("image12", "des12")
        ]),
      new ProjectModel("City Card","CityCards est une application qui permet aux passionnés de voyages et aux collectionneurs de découvrir de nouvelles"+
        " villes de France. Les utilisateurs peuvent collectionner des cartes virtuelles de villes, chacune accompagnée de statistiques sur la ville.",
        "assets/project/City Card/logo.png",
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/citycards")
        ],  
        [
          new ImageWithDescription("image11", "des11"),
          new ImageWithDescription("image12", "des12")
        ]),
      new ProjectModel("Dj Application","Création d’une application de mixage pour D.J. avec Youtube Music + Interaction avec une table de mixage réel",
        "assets/project/Dj Application/logo.png",
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/DjApplication3")
        ],   
        [
          new ImageWithDescription("image11", "des11"), 
          new ImageWithDescription("image12", "des12")
        ]),
      new ProjectModel("Suivi D’Apprentissage et d’Évaluation","Application Android et site web avec une base de données et une API. Avec la gestion des"+
        " notations des compétences pour les intervenants en IME (Institut Médicoéducatif).",
        "assets/project/Suivi apprentissage et evaluation/logo.png", 
        [
          new UrlWithLabel("github","https://github.com/MAXCOEUR/SAE")
        ], 
        [
          new ImageWithDescription("image11", "des11"),
          new ImageWithDescription("image12", "des12")
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
          new ImageWithDescription("assets/project/Patrick le Jeux/5.png", "Allez-y et amusez-vous bien ! : https://max-coeur.itch.io/patrick-le-stegosaure/"),
          new ImageWithDescription("assets/project/Patrick le Jeux/6.png", "ici vous pouvez voir le site de Patrick le stégosaure : https://patrick-le-stegosaure.vercel.app/"),
        ]),
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
}
