export interface Article {
  id: string;
  title: string;
  summary: string;
  author: string;
  imageUrl: string;
  sport: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "principios-entrenamiento",
    title: "Principios Generales del Entrenamiento Deportivo",
    summary:
      "Descubre los principios fundamentales que rigen el entrenamiento deportivo, incluyendo individualidad, especificidad, reversibilidad y sobrecarga progresiva.",
    author:
      "Larry Kenney, Jack H. Wilmore y David L. Costill, Adaptado por Sportsprofessionals",
    imageUrl: "/entrenamiento-deportivo.jpg",
    sport: "Entrenamiento Deportivo",
    content: `Las distintas formas de entrenamiento físico se rigen por una serie de principios generales fundamentados en la fisiología del ejercicio y del deporte. A continuación, presentamos los siguientes:

PRINCIPIO DE LA INDIVIDUALIDAD
No todos los deportistas responden de la misma manera a un estímulo de ejercicio agudo ni muestran la misma capacidad de adaptación a un programa de entrenamiento. La herencia genética juega un papel clave en la forma en que cada organismo reacciona tanto a esfuerzos puntuales como a procesos de entrenamiento prolongados.

Este concepto constituye el principio de la individualidad, ya que —con la excepción de los gemelos idénticos— no existen dos personas con exactamente las mismas características genéticas. Por lo tanto, es poco probable que dos individuos reaccionen de manera idéntica ante un mismo plan de entrenamiento.

Con base en esto, cada persona responde de forma única al esfuerzo físico, y los entrenadores o preparadores deben diseñar programas que consideren estas diferencias individuales, ajustando la carga, la intensidad y el volumen del entrenamiento según las necesidades y capacidades de cada jugador.


⚽ Ejemplo aplicado al fútbol:

En un equipo de fútbol, un preparador físico observa que un jugador joven y con gran resistencia mejora rápidamente su capacidad aeróbica con sesiones de carrera continua. Sin embargo, otro jugador del mismo equipo, con mayor masa muscular y menor eficiencia cardiovascular, muestra una mejora más lenta e incluso signos de fatiga al seguir el mismo plan.

Aplicando el principio de la individualidad, el preparador decide adaptar el entrenamiento: al segundo jugador le programa sesiones más cortas y alternadas con ejercicios de recuperación activa, mientras que al primero le mantiene una carga más elevada. De este modo, ambos futbolistas progresan según su ritmo biológico, maximizando su rendimiento y evitando el sobre entrenamiento.

[IMAGEN: FOTO JUGANDO FUTBOL]

PRINCIPIO DE LA ESPECIFICIDAD
Las adaptaciones al entrenamiento son altamente específicas según el tipo de actividad realizada, así como el volumen e intensidad del ejercicio practicado. Por ejemplo, si se desea mejorar la potencia muscular de un lanzador de bala, el entrenamiento no debe centrarse en carreras de larga distancia ni en ejercicios con sobrecarga de baja intensidad, sino en el desarrollo de fuerza explosiva. De igual manera, un maratonista no se beneficiaría de una rutina basada únicamente en sprints cortos e intensos.

De acuerdo con el principio de especificidad, las mejoras físicas que se obtienen a través del entrenamiento dependen directamente del tipo de estímulo aplicado. Por eso, para maximizar los beneficios del entrenamiento, este debe estar específicamente orientado hacia las demandas físicas y técnicas del deporte que el atleta practica de forma habitual.


🎾 Ejemplo aplicado al tenis de campo:

En el caso de un tenista de campo, el entrenamiento debe enfocarse en mejorar cualidades específicas como la agilidad, la velocidad de reacción, la fuerza explosiva en las piernas y la resistencia intermitente, ya que estos factores son esenciales durante los rápidos intercambios de golpes y los desplazamientos constantes por la cancha.

Aplicando el principio de especificidad, un preparador físico diseña sesiones que incluyen ejercicios de desplazamientos laterales con cambios de dirección, trabajo de reacción con pelota, ejercicios pliométricos para mejorar la potencia en los saltos, y entrenamientos de resistencia fraccionada para simular los esfuerzos intermitentes de un partido real. Estas rutinas son mucho más beneficiosas para un tenista que, por ejemplo, una carrera continua de larga distancia, que no refleja las exigencias específicas de su disciplina.

[IMAGEN: FOTO JUGANDO TENNIS O CLASE DE TENNIS]

PRINCIPIO DE REVERSIBILIDAD
Muchos deportistas coinciden en que el entrenamiento con sobrecarga mejora la fuerza muscular y la resistencia a la fatiga. De igual forma, el trabajo de resistencia incrementa la capacidad para realizar ejercicios a mayor intensidad y durante periodos prolongados.

Sin embargo, si un deportista interrumpe su entrenamiento (desentrenamiento) o reduce drásticamente su nivel de actividad, perderá progresivamente las adaptaciones fisiológicas adquiridas, lo que se traduce en una disminución del rendimiento.

Este fenómeno se conoce como principio de reversibilidad, el cual respalda científicamente el dicho: "lo que no se usa, se pierde". Por ello, para mantener los beneficios obtenidos, es fundamental que todo plan de entrenamiento incluya una fase de mantenimiento, especialmente en periodos de pausa, como fuera de temporada o durante lesiones.


🏐 Ejemplo aplicado al voleibol:

Durante las vacaciones de mitad de temporada, una jugadora de voleibol de alto nivel decide descansar completamente durante tres semanas sin realizar ningún tipo de entrenamiento físico ni técnico. Al regresar, nota que ha perdido fuerza en las piernas, su capacidad de salto ha disminuido y su tiempo de reacción es más lento.

Este caso ejemplifica claramente el principio de reversibilidad: la ausencia de estímulos físicos adecuados durante un tiempo prolongado llevó a una pérdida de las adaptaciones logradas con meses de trabajo. Para evitarlo, el cuerpo técnico podría haber diseñado un plan de mantenimiento con ejercicios de bajo volumen, pero suficiente intensidad para conservar la forma física: trabajo de pliometría ligera, técnica de golpeo, y circuitos de fuerza general.

[IMAGEN: FOTO JUGANDO VOLEIBOL]

PRINCIPIO DE LA SOBRECARGA PROGRESIVA
Dos conceptos fundamentales, sobrecarga y progresión, constituyen la base de cualquier programa de entrenamiento efectivo. El principio de la sobrecarga progresiva establece que, para lograr mejoras continuas en el rendimiento físico, es necesario aumentar gradualmente las demandas impuestas al cuerpo.

Por ejemplo, si se desea mejorar la fuerza muscular a través de un programa de entrenamiento, los músculos deben ser desafiados más allá de las exigencias habituales de la vida diaria. Esto significa que, a medida que el organismo se adapta a una determinada carga o intensidad, debe aplicarse un aumento progresivo del esfuerzo para seguir generando adaptaciones positivas.

En resumen, el entrenamiento con sobrecarga progresiva implica ajustar de manera sistemática variables como el volumen, la intensidad, la duración o la frecuencia del entrenamiento, a medida que el deportista se vuelve más fuerte, resistente o eficiente.


🏊 Ejemplo aplicado a la natación:

Un nadador de nivel intermedio entrena cuatro veces por semana, realizando 2.000 metros por sesión a un ritmo moderado. Tras algunas semanas, su rendimiento se estabiliza y deja de mostrar mejoras significativas.

Aplicando el principio de la sobrecarga progresiva, su entrenador decide aumentar gradualmente la carga de entrenamiento: primero incrementa la distancia total a 2.500 metros, luego añade series de velocidad (sprints) y más adelante introduce ejercicios específicos de técnica con palas o aletas, elevando la resistencia al nadar.

Gracias a estos ajustes progresivos, el nadador obliga a su cuerpo a seguir adaptándose, mejorando su capacidad cardiovascular, su fuerza muscular en el agua y su técnica, lo que se traduce en mejores tiempos y mayor eficiencia en la piscina.

[IMAGEN: FOTO NADADORES EN PISCINA]

Principio de Variación (también conocido como Periodización)
El principio de variación, también denominado principio de periodización hace referencia a la necesidad de modificar sistemáticamente los componentes del entrenamiento a lo largo del tiempo para optimizar el rendimiento y evitar el estancamiento.

Este concepto fue propuesto por primera vez en la década de 1960 y ha ganado gran relevancia en las últimas décadas, especialmente en el ámbito del entrenamiento con sobrecarga. La periodización consiste en planificar, de forma estructurada, cambios progresivos en una o más variables del entrenamiento, como el volumen, la intensidad, la frecuencia o el tipo de ejercicios.

En este sentido, el principio establece que para lograr adaptaciones continuas y sostenidas, es fundamental introducir variaciones programadas en el entrenamiento. Esto permite mantener la motivación del deportista, prevenir lesiones por sobreuso y mejorar el rendimiento a largo plazo.


🏀 Ejemplo aplicado al baloncesto:

Un equipo de baloncesto profesional trabaja durante toda la temporada con una planificación basada en el principio de variación. Durante la pretemporada, el énfasis está en el desarrollo de la resistencia general, la fuerza básica y el trabajo técnico-táctico individual. En la fase competitiva, el entrenamiento se orienta hacia la explosividad, la velocidad de reacción, la toma de decisiones en situaciones de juego real y la estrategia de equipo.

A medida que avanza la temporada, el volumen del entrenamiento disminuye, pero la intensidad aumenta, para mantener la frescura física y mental de los jugadores. Finalmente, en la fase de transición (al término de la competencia), se reduce significativamente la carga, enfocándose en la recuperación, el mantenimiento y la prevención de lesiones.

Gracias a esta planificación escalonada y variada, los jugadores logran un mejor rendimiento en los momentos clave de la temporada, evitando la fatiga crónica y mejorando sus capacidades físicas de forma sostenida.

[IMAGEN: FOTO JUGANDO BALONCESTO]`,
  },
  {
    id: "educacion-fisica-crecimiento",
    title: "Educación Física: Crecimiento, Desarrollo y Maduración",
    summary:
      "Los profesionales de la Educación Física deben comprender cómo los niños y adolescentes reaccionan al ejercicio y a las actividades deportivas en el contexto escolar.",
    author:
      "Larry Kenney, Jack H. Wilmore y David L. Costill, Adaptado por Sportsprofessionals",
    imageUrl: "/educacion-fisica.jpg",
    sport: "Educación Física",
    content: `Los profesionales de la Educación Física en el contexto escolar deben tener una sólida compresión cabal de la forma en que los niños y adolescentes reaccionan al ejercicio y a las actividades deportivas en la clase de educación física, esto reviste especial importancia porque la actividad física en nuestros tiempos es esencial para combatir la obesidad infantil y para que los niños aprendan a desarrollar hábitos saludables para toda su vida.

CRECIMIENTO DESARROLLO Y MADURACION
Crecimiento, desarrollo y maduración son términos que se emplean para describir cambios que se producen en el cuerpo a partir del momento de la concepción y durante toda la edad adulta.

El termino crecimiento designa un aumento del tamaño corporal o de cualquiera de sus partes. El termino desarrollo se refiere a la diferenciación celular para cumplir distintas funciones especializadas (sistemas orgánicos), por lo tanto, refleja los cambios funcionales que acompañan el crecimiento. Por último, se entiende por maduración el proceso mediante el cual el cuerpo adquiere la configuración adulta y deviene completamente funcional. Este termino se define por el sistema funcional que está en consideración.

El estado de madurez de un niño o de un adolescente puede definirse por los siguientes factores:
- Edad cronológica
- Edad ósea
- Estudio de maduración sexual 

Por consiguiente, desde el punto de vista fisiológico, las niñas maduran aproximadamente dos años antes que los niños.

[IMAGEN: FOTO EDUCACION FISICA ESCOLAR]`,
  },
];
