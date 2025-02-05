import "./App.css"
import Cards from "./Components/Cards/Cards"
import CardsP from "./Components/CardsP/CardsP"
import Navbar from "./Components/NavBar/NavBar"
import Banner from "./Components/Banner/Banner"
function App() {
  return (
    <>
      <Navbar/>

      <Banner title="Juan Esteban Ramirez Perdomo" 
              description="Soy un diseñador de interacción apasionado por crear experiencias digitales intuitivas y atractivas. Con experiencia en diseño UI/UX, desarrollo frontend y prototipado, mi enfoque se basa en comprender las necesidades del usuario y traducirlas en soluciones funcionales y estéticamente impactantes."  
              buttons="Ver Mas"
              image="/assets/Imagenes/Mia.png"
              />
              
      <h2 className="habilidades-title">Mis Habilidades</h2>
      
      <div className="cards-container-1">
      <Cards title="Lenguajes de Programación & Frameworks" 
             description="Tengo conocimineto de los siguientes lenguajes de programación:Javascript Kotlin,Python,Typescript.Y en Frameworks tengo concocimientos en React,Node.js,Express"/>
      <Cards title="Hablidades Para trabajo Grupal" 
             description="A lo largo de mi experiencia profesional y académica, he desarrollado una serie de habilidades grupales que me permiten colaborar de manera eficiente en equipos multidisciplinarios, logrando resultados exitosos y creando un ambiente de trabajo armonioso." />
      <Cards title="Pensamiento Critico" 
             description="Mi capacidad de pensamiento crítico y estratégico me permite abordar problemas y desafíos de manera reflexiva y analítica. No solo me concentro en encontrar soluciones rápidas, sino que también considero las implicaciones a largo plazo de cada decisión." />
      </div> 
      
      <h2 className="proyectos-title">Mis Proyectos</h2>

      <div className="cards-container-2">
      <CardsP title="Landing Page"  
              description="Este proyecto consiste en una landing page creada como parte de un ejercicio práctico para aprender los fundamentos de React y CSS. La página está diseñada para presentar de manera clara y atractiva la introducción al uso de React, destacando sus características principales y la estructura básica de una aplicación React." 
              link= "https://programacion-web-2024-1.vercel.app"
              buttons="Ver Mas" />

      <CardsP title="API" 
              description="Este proyecto se centra en la integración de una API externa para proporcionar funcionalidades avanzadas y datos dinámicos en una aplicación web. La API permite la obtención de datos en tiempo real, lo que enriquece la experiencia del usuario al mostrar contenido actualizado de manera eficiente." 
              link="https://gift-project-ten.vercel.app/"
              buttons="Ver Mas" />

      <CardsP title="Proyectos Grupales" 
              description="Este proyecto es el resultado de un esfuerzo colaborativo en el que se construyó un portafolio grupal para exhibir las habilidades y trabajos de varios miembros del equipo. El objetivo principal fue crear una plataforma visualmente atractiva y fácil de navegar que resalte las habilidades, logros y proyectos de cada miembro, al mismo tiempo que se presenta de manera coherente y profesional." 
              link="https://dca-perez.firebaseapp.com/" 
              buttons="Ver Mas" />
      </div>
     
    <div className="blurred-background">
    <div className="circle one"></div>
    <div className="circle three"></div>
  </div>
    </>
  )
}

export default App
