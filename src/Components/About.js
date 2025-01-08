import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h1>A PROPOS</h1>
        <img src="./pp.png" alt="profile_picture" />
        <p> Baptiste Grimaud est élève-avocat, actuellement en formation au sein du Cabinet TEBOUL - Avocats à la Cour à Paris pour l’année 2024, dans le cadre de la promotion Dominique Simonnot de l’École de Formation du Barreau (EFB).</p>
        <p> Diplômé de l’Université de Limoges, il est titulaire d’un Master 2 en Droit privé général et européen, obtenu en 2020, après un Master 1 dans la même spécialité et une Licence en droit. Il a également réussi l’examen d’accès au CRFPA en 2022.</p>
        <p> Rigoureux et polyvalent, Baptiste Grimaud mobilise ses compétences pour accompagner efficacement ses interlocuteurs dans leurs problématiques juridiques et contentieuses.</p>
    </section>
  );
};

export default About;
