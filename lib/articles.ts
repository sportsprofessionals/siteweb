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
    author: "Larry Kenney, Jack H. Wilmore y David L. Costill",
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
    author: "Larry Kenney, Jack H. Wilmore y David L. Costill",
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
  {
    id: "estilo-vida-salud",
    title:
      "Estilo de Vida, Salud y Calidad de Vida: El Impacto de la Actividad Física en la Sociedad Contemporánea",
    summary:
      "Explora cómo la actividad física puede contrarrestar los efectos negativos del sedentarismo en la sociedad moderna, destacando estrategias y beneficios clave.",
    author:
      "Hoeger, W. K., & Hoeger, S. A. (2005). Ejercicio y salud. Thomson.",
    imageUrl: "/actividad-fisica-sociedad.jpg",
    sport: "Salud y Estilo de Vida",
    content: `Los profesionales de las ciencias médicas han concluido que la inactividad física y los hábitos de vida nocivos representan factores de riesgo críticos para la salud global. En un contexto donde el avance tecnológico ha minimizado la necesidad de movimiento en las actividades cotidianas, la actividad física se ha convertido en un elemento indispensable para contrarrestar lo que expertos como Werner (2005) denominan el "síndrome de muerte por sedentarismo" (SMS). Según este autor, este fenómeno constituye la segunda mayor amenaza para la salud pública en Estados Unidos, destacando su impacto epidemiológico.

La paradoja del progreso: tecnología vs. movimiento humano
Los avances tecnológicos, si bien han optimizado procesos cotidianos, han generado un efecto colateral alarmante: la reducción sistemática de la actividad física espontánea. Esta transformación ha propiciado el incremento de enfermedades crónicas asociadas al sedentarismo, entre las que destacan:

- Hipertensión arterial
- Cardiopatías
- Obesidad
- Lumbalgias crónicas

Estos padecimientos, clasificados como enfermedades hipocinéticas (del griego hipo = bajo, kinético = movimiento), se caracterizan por desarrollarse progresivamente y mantenerse durante años, siendo responsables del 71% de las muertes globales según la OMS (2015).

Actividad física vs. ejercicio: precisiones conceptuales
Es crucial diferenciar dos términos frecuentemente confundidos:

- Actividad física: Movimiento corporal producido por la musculatura esquelética que demanda gasto energético y genera beneficios sistémicos para la salud.
- Ejercicio: Variante estructurada de actividad física, caracterizada por su planificación, repetición y objetivo específico de mejorar componentes de la condición física (resistencia, fuerza, flexibilidad).

Mientras la primera incluye acciones cotidianas como caminar o subir escaleras, el ejercicio requiere intencionalidad terapéutica o deportiva.

Estrategias para un nuevo paradigma de salud
Frente a este escenario, se propone:

1. **Programas de intervención multinivel**: Diseñados por profesionales de educación física, entrenadores y gestores deportivos para adaptarse a necesidades individuales y grupales.
2. **Sinergia con políticas públicas**: Integración de planos de movilidad urbana, espacios deportivos accesibles y educación nutricional.
3. **Combate a los "triples demonios" modernos**:
   - Nutrición desequilibrada: Consumo excesivo de grasas trans, azúcares simples y alcohol.
   - Estrés crónico: Asociado a patologías inmunológicas y metabólicas.
   - Degradación ambiental: Contaminación atmosférica, acústica y residuos tóxicos.

Hacia una rehumanización del movimiento.
Instituciones como el ACSM (Colegio Americano de Medicina Deportiva) recomiendan un mínimo de 150 minutos semanales de actividad aeróbica moderada. Sin embargo, más allá de cifras, se requiere un cambio cultural que revalorice el movimiento como pilar de la existencia humana, equilibrando las comodidades tecnológicas con la preservación de nuestra biología evolutiva.

**GLOSARIO DE TÉRMINOS CLAVE**
- **Síndrome de Muerte por Sedentarismo (SMS)**: Término epidemiológico para muertes atribuibles a inactividad física.
- **Enfermedades Hipocinéticas**: Patologías vinculadas a déficit de movimiento (diabetes tipo 2, osteoporosis).
- **Ejercicio Terapéutico**: Prescripción médica de actividad estructurada para manejo de enfermedades.

`,
  },
  {
    id: "recreacion-deporte-recreativo",
    title: "Recreación y Deporte Recreativo: Una Mirada desde el Tiempo Libre",
    summary:
      "Explora cómo la recreación y el deporte recreativo promueven el bienestar, la inclusión y el disfrute personal en el tiempo libre.",
    author:
      "Castellanos H, Eulogio, Turismo y recreación bases teóricas, conceptuales y operativas. Edit, Trillas, 2018.",
    imageUrl: "/recreacion-deporte.jpg",
    sport: "Recreación y Deporte",
    content: `Según Castellano (2018), citando a Harry Overstreet (en Pérez y cols.), la recreación se concibe como el desenvolvimiento placentero y espontáneo del ser humano durante su tiempo libre. Esta actividad busca satisfacer necesidades psicoespirituales tales como el descanso, el entretenimiento, la expresión personal, la aventura y la socialización. En esta definición se destaca la importancia de la libertad de elección y del goce subjetivo como elementos centrales de la experiencia recreativa.

Por su parte, Pérez y cols. (1997) amplían el concepto al definir la recreación como el conjunto de fenómenos y relaciones que emergen del aprovechamiento del tiempo libre a través de actividades con propósitos terapéuticos, preventivos, cognitivos, deportivos o artístico-culturales. Lo fundamental en esta perspectiva es la ausencia de compulsión externa, lo que permite a las personas involucrarse de forma voluntaria y con sentido de disfrute.

Desde estas aproximaciones puede inferirse que las actividades recreativas comprenden una amplia gama de posibilidades, entre las cuales se destaca el deporte recreativo, en tanto promueve la participación lúdica y placentera en actividades físicas y deportivas. Su propósito fundamental es el goce y la satisfacción personal, alejándose de los fines estrictamente competitivos o de rendimiento profesional.

Es importante hacer una distinción entre deporte recreativo y deporte profesional. Aunque ambos comparten elementos físicos y estructurales, difieren en sus objetivos y contextos. No sería adecuado considerar como actividad de ocio el entrenamiento de un futbolista profesional antes de un campeonato o la práctica obligada de un integrante del equipo nacional de tenis que se prepara para una competencia internacional. En estos casos, la participación está mediada por una exigencia externa, planificación estructurada y resultados esperados, lo cual desvirtúa el carácter voluntario y placentero propio de la recreación.

En cambio, el deporte recreativo combina características del deporte y del ocio: implica la participación activa y física, pero en un marco de elección libre, sin presiones externas ni metas de alto rendimiento. Aquí, los individuos deciden voluntariamente jugar un partido, correr una carrera o participar en una competencia local, priorizando la experiencia personal sobre la victoria o la competencia.

Los profesionales del área de la recreación deportiva tienen un papel fundamental en la promoción de programas accesibles y atractivos para diversos públicos: pueden desarrollar propuestas para clubes juveniles, diseñar actividades inclusivas para adultos mayores, organizar campeonatos locales, festivales deportivos o eventos comunitarios.

No obstante, el enfoque filosófico del deporte recreativo prioriza la inclusión, el bienestar y la participación sobre la competencia, promoviendo un estilo de vida activo y saludable para la mayor cantidad de personas posible.

`,
  },
];
