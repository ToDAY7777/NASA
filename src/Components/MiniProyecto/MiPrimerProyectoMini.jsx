import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import bgImage from "./VI.png";
import { Divider, Button } from '@mui/material';
import { PersonajesList } from './PersonajesList';

/* Función y useState */

export function MiPrimerProyectoMini() {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);

  const textoCorto = "En un mundo dividido por la desigualdad, Piltóver representa la opulencia y el progreso, mientras que Zaun, su contraparte subterránea, es un lugar marginal. En este contexto, Vi y Powder, dos hermanas huérfanas adoptadas por Vander, sobreviven junto a otros chicos robando en Piltóver. Durante un robo, Powder encuentra unos orbes mágicos y, accidentalmente, provoca una explosión que desata una serie de conflictos. Vander es capturado por Silco, un antiguo amigo convertido en enemigo, y en un fallido intento de rescate, Powder causa la muerte de sus amigos, lo que provoca que Vi la abandone. Silco la acoge y ella se convierte en Jinx, una asesina impulsiva. Mientras tanto, Jayce, un inventor de Piltóver, investiga los orbes mágicos y, con la ayuda de Viktor y Mel, desarrolla la tecnología Hextech, revolucionando la ciudad. Años después, Vi, encarcelada, es liberada por Caitlyn, una guardia que investiga los crímenes de Jinx. En medio de enfrentamientos entre Piltóver y Zaun, Jinx roba un núcleo Hex, lo que intensifica el conflicto. Jayce, ahora miembro del Consejo, intenta negociar la independencia de Zaun con Silco, quien se ve obligado a decidir entre su ciudad y Jinx. Al descubrir que Silco planeaba entregarla, Jinx lo mata y dispara una bazuca con el núcleo Hex al Consejo de Piltóver, iniciando la guerra entre ambas ciudades.";
  const textoLargo = `En un mundo ficticio existe una sociedad marcada por la desigualdad, por un lado existe Piltóver, una enorme ciudad llena de rascacielos caracterizada por el progreso y la opulencia, mientras que subterránea a esta ciudad existe Zaun, también conocida como Las Profundidades, es una ciudad donde se vive en condiciones casi inhumanas y marginales.

En medio de esta enorme diferencia de clases conocemos a Vi y Powder, un par de hermanas que fueron adoptadas por Vander luego de la muerte de sus padres, además de estas dos chicas, Vander adoptó a Mylo y Glaggor, un par de chicos de las calles de Zaun, donde los cinco intentan sobrevivir con lo que los chicos roban a grandes millonarios en Piltóver, en medio de uno de estos robos la pequeña Powder encuentra una colección de orbes mágicos con los que accidentalmente destruye la habitación, haciendo que todos los chicos tengan que huir, regresando a Zaun sanos y salvos. Luego de la explosión, las fuerzas armadas de Piltóver son enviadas a Zaun a investigar, siendo considerado el líder de la ciudad, Vander es visitado por Grayson, Sheriff de la ciudad, quien a pesar de tener respeto mutuo lo amenaza con mandar a sus hombres a hostigar a los habitantes si no entrega al culpable, luego de esta amenaza el resto de los habitantes discuten con Vander y cuestionan su posición al negarse a combatir las injusticias de las que son víctimas en Zaun.

La casa que los niños robaron pertenecía a Jayce, un joven estudiante de la Academia de Inventores que experimentaba con los orbes mágicos para controlarlos con tecnología, sin embargo la posesión de artefactos mágicos es ilegal, por lo que es llevado preso hasta que Haimerdinger, director de la academia, lo convence de pedir disculpas en su juicio, lo que lo liberará de todos los cargos. Siguiendo el consejo de su profesor, Jayce se disculpa por usar magia, sin embargo en medio de su disculpa decide revelar su investigación y los avances de ella, atrayendo la atención de Viktor, un joven originario de Zaun que usa un bastón como apoyo para caminar y ayudante del rector en la Academia, y Mel Medarda, una joven chica miembro del consejo, quienes le ayudan a recuperar su experimento luego de que es expulsado de la academia y logran crear la tecnología que Jayce buscaba, a la que bautizan como Hextech, por estar basada en los núcleos Hex, los orbes mágicos que Jayce tenía y que Powder robó.

De regreso en Zaun, Vi intenta entregarse como responsable de la explosión para que los hostigamientos hacia el resto de los habitantes se detengan, pero es detenida por Vander, quien se entrega en su lugar, en medio del arresto aparece una bestia morada creada con ayuda de una droga que llaman el brillo, droga creada por Silco, antiguo amigo de Vander y que ahora busca tener el control sobre toda la ciudad, por lo que lo secuestra para matarlo. En una misión de rescate comandada por Vi, todos los chicos intenta rescatar a su padre, teniendo que enfrentarse a los secuaces de Silco y a la bestia morada, por lo que Powder, quien había sido hecha a un lado por su propia seguridad, creyendo tener control sobre los núcleos que robó crea una bomba con la que intenta neutralizar a la bestia y que sus amigos escapen, pero la bomba es mucho más potente, destruyendo el edificio y matando a Mylo y Glaggor en el proceso, en medio del caos Vander logra salvar a Vi con ayuda del brillo para morir poco después, Powder se revela animosamente como la iniciadora de la explosión, haciendo que Vi explote en ira por la muerte de todos sus seres queridos y abandona a Powder, quien es acogida por Silco como su aprendiz. Años después, Powder se hace llamar Jinx y es considerada hija de Silco, luego de los sucesos de su infancia sufre alucinaciones con su hermana y amigos muertos, ahora es una de las asesinas y secuaces de Silco más letales y eficaces, pero es destructiva e impulsiva. En uno de los embarques de brillo que los hombres de Silco contrabandeaban en los muelles de Piltóver, la nave es emboscada por un grupo de rebeldes con máscaras que intentan destruir la mercancía, pero son detenidos por Jinx, quien al sufrir un ataque por confundir a una de las rebeldes con su hermana destruye toda la mercancía y crea una masacre que llama la atención de los vigilantes, en especial de Caitlyn, una joven guardia que nota los dibujos que Jinx deja en cada escena del crimen, por lo que comienza a investigar, llegando con Vi, quien terminó encerrada luego de que fuese encontrada cerca de la explosión en la que sus amigos murieron, Caitlyn le promete que será liberada si le ayuda con su investigación y ella accede.

Acomplejada por el resultado de la misión, Jinx viaja a Piltóver para robar un núcleo Hex como compensación para Silco por la mercancía que destruyó, en el proceso matando a más de un guardia y destruyendo varios edificios, por lo que la Guardia de Piltóver se pone en marcha para buscar al culpable hasta que Marcus, el nuevo Comandante de la Guardia que trabajaba encubierto para Silco desde hace años recibe la orden de detener las investigaciones, por su parte Jayce se volvió la cabeza y principal representante de Hextech, la cual ha traído grandes progresos y mejoras a Piltóver, sin embargo con el reciente robo decide detener las operaciones de la empresa hasta que se resuelva el caso, a raíz de esta acción se le invita a formar parte del Consejo de la ciudad.

Ya libre, Vi guía a Caitlyn por Las Profundidades, donde el rumor de su regreso se esparce rápidamente, llegando a oídos de Silco, quien amenaza a Marcus con matar a su familia si no mata a Vi como afirmó haberlo hecho hace años, por lo que Marcus logra que Jayce le otorgue el permiso de cerrar todos los puentes entre Piltóver y Zaun, por su parte Jayce y Viktor intentan encontrar una cura para la enfermedad de Viktor, descubriendo que los núcleos Hex reaccionan a la materia orgánica, poco después Jinx se entera de que su hermana sigue viva y enciende una bengala como señal para ella, a la que Vi y Caitlyn acuden, pero pronto son interrumpidas por los rebeldes de máscaras, quienes las vencen, roban el núcleo Hex de Jinx y secuestran a Vi y Caitlyn. En un pequeño pueblo oculto fuera del control de Silco, los rebeldes de máscara ayudan a los más necesitados, siendo liderados por Ekko, un viejo amigo de la infancia de Vi, con ayuda de Caitlyn ella lo convence de devolver el núcleo a Piltóver y evitar una guerra.

Vi, Caitlyn y Ekko intentan cruzar el puente de regreso a Piltóver para devolver el orbe, pero son detenidos por Marcus y sus hombres, quienes están a punto de arrestarlos, hasta que Jinx los neutraliza con luciérnagas explosivas, Jinx intenta recuperar el orbe para dárselo a Silco, pero Vi y Caitlyn logran huir con el orbe gracias a Ekko, quien se enfrenta con Jinx en una de las escenas más icónicas y sorprendentes de toda la serie, con una mezcla de la pelea real con un flashback de los dos niños jugando, al final Ekko está a punto de vencer a Jinx, pero recordando a Powder se detiene, Jinx aprovecha su duda para detonar un explosivo.

Logrando huir de Zaun, Vi y Caitlyn descubren que Jinx logró robarles el orbe, sin embargo piden una audiencia con el Consejo para explicar el plan de Silco de volver a Las Profundidades una ciudad independiente, antes de la audiencia llega Ambessa Medarda, madre de Mel y gobernante de un pueblo guerrero que ofrece sus conocimientos bélicos a Piltóver ante la posibilidad de una guerra, es por ello que decide hablar con Jayce, convenciéndolo de que la diplomacia no salva vidas, luego de la audiencia el Consejo vota por no enfrentarse a Silco, por lo que Jayce y Vi deciden destruir la fábrica principal de brillo en Zaun con equipo Hextech aún sin probar, en esta emboscada a la fábrica salen niños heridos y esto, en adición a la muerte de Viktor luego de experimentar con la tecnología Hex y el brillo, hace que Jayce se arrepienta de su decisión, dejando a Vi sola.

Intentando compensar su error, Jayce invita a Silco a conversar sobre su situación, Silco se presenta e inician las negociaciones de manera extraoficial, Silco solo quiere que Zaun sea una ciudad independiente de Piltóver, Jayce le otorgará la independencia a la ciudad con la condición de que Silco entregue a Jinx, él se niega pero Jayce sabe que el poder de los artefactos Hextech es suficiente para destruir Zaun, exponiendo este punto, deja la decisión en manos de Silco. En Zaun, Jinx fue salvada por una alteración del brillo que le devolvió la vida y se entera de que Silco tiene que entregarla a Piltóver para cumplir su objetivo de tener el control total sobre Zaun, por lo que lo secuestra junto a Vi y Caitlyn y en un macabro juego los hace decidir entre aquello que más quieren o ella, culminando con la muerte de Silco y Jinx mezclando el núcleo Hex con una bazuca que dispara al edificio del consejo en Piltóver, matándolos y dando inicio a la guerra entre Piltóver y Zaun.`; // Continúa el texto

  const cambiarTexto = () => {
    setMostrarTextoCompleto(!mostrarTextoCompleto);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        width: "100%",
        height: "750px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: "60px",
        paddingTop: "20px",
      }}
    >
      
      <Typography fontSize={'24px'} fontFamily={'Cinzel, Serif'} color="White">
        <h1>ARCANE</h1>
      </Typography>
      <Divider style={{ backgroundColor: "white", width: "0%" }} />

      <div
        style={{
          width: "700px",
          height: "450px",
          overflow: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "15px",
          borderRadius: "10px",
          color: "white",
          marginTop: "10px",
        }}
      >
        <Typography variant="body1">
          {mostrarTextoCompleto ? textoLargo : textoCorto}
        </Typography>
      </div>
      
      <Button
        variant="contained"
        color="primary"
        style={{ borderRadius: "10px", marginTop: "10px" }}
        onClick={cambiarTexto}
      >
        {mostrarTextoCompleto ? "Ver menos" : "Ver más"}
      </Button>
      <PersonajesList></PersonajesList>
    </div>
  );
}
