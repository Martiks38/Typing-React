import { NextApiRequest, NextApiResponse } from 'next'

const texts = {
  es: [
    '¡Y qué! Las consecuencias son terribles; ya el universo no tiene comienzo en el tiempo ni límite en el espacio; todo está sometido al encadenamiento de causas y efectos; ya no hay causa primera; la idea de causa primera, como ha dicho Schopenhauer, es la idea de un trozo de madera hecho de hierro',
    'Denis cometió un error al invitar a Solita a que disparase contra él. Claro, que estaba seguro de que no se atrevería a apretar el gatillo, pero ella se atrevió. Y Denis murió, aunque murió demasiado tarde. -Eso dijo mi padre mientras pensaba que la soledad también tardaba demasiado en disparar contra él',
    'Que vengan a azotar nuestra palidez, revigorizar nuestras sombras, que nos traigan la savia que nos ha abandonado. Marchitos, exangües, no podemos reaccionar contra la fatalidad: los agonizantes no se agremian ni se amotinan',
    'Un desorden de fin del mundo. ¿Cómo, en un espacio tan reducido pueden coexistir tantos hombres sin destruirse, sin odiarse mortalmente? A decir verdad se odian, pero no están a la altura de su odio',
    'Me proporcionó la enseñanza de las primeras letras, la gramática latina, filosofía y algo de teología en el mismo Buenos Aires. Sucesivamente me mandó a España a seguir la carrera de las leyes, y allí estudié en Salamanca; me gradué en Valladolid, continué en Madrid y me recibí de abogado en la cancillería de Valladolid',
    'El sentido del futuro está profundamente arraigado en los seres humanos. En cada momento pensamos, casi sin darnos cuenta, sobre lo que vamos a hacer más tarde, mañana, la próxima semana, el mes que viene o dentro de dos años',
    'Ahorramos durante meses o años o nos adeudamos a largo plazo para obtener lo que deseamos. Y muchos hombres y mujeres, relativamente jóvenes y en excelente estado de salud, que están a años luz del final, hacen testamento o declaran su última voluntad sobre cómo disponer de sus bienes o asuntos después de la muerte',
    'El aspecto de la isla cuando a la mañana siguiente subí a cubierta había cambiado totalmente. Aunque había cesado por completo la brisa, habíamos avanzado mucho durante la noche y estábamos al pairo a eso de media milla al sudeste de la parte inferior de la costa oriental',
    '...habían vivido juntos lo bastante para darse cuenta de que el amor era el amor en cualquier tiempo y en cualquier parte, pero tanto más denso cuanto más cerca de la muerte',
    'Nunca seré viejo -le dije entonces-. Ella lo interpretó como un propósito heroico de luchar sin cuartel contra los estragos del tiempo, pero él fue más explícito: tenía la determinación irrevocable de quitarse la vida a los sesenta años',
    'Era bella, elástica, con una piel tierna del color del pan y los ojos de almendras verdes, y tenía el cabello liso y negro y largo hasta la espalda y un aura de antigüedad que lo mismo podía ser de Indonesia que de los Andes',
    'El coronel destapó el tarro del café y comprobó que no había más que una cucharadita. Retiró la olla del fogón, vertió la mitad del agua en el piso de tierra, y con un cuchillo raspó el interior del tarro sobre la olla hasta que se desprendieron las últimas raspaduras de polvo de café revueltas con óxido de lata',
    'El capitán miró a Fermina Daza y vio en sus pestañas los primeros destellos de una escarcha invernal. Luego miró a Florentino Ariza, su dominio invencible, su amor impávido, y lo asustó la sospecha tardía de que es la vida, más que la muerte, la que no tiene límites',
    'Los rostros se suavizaron en el resplandor vacilante que el globo de luz difundía por el recinto, a través de escasas partículas limpias de vidrio: el peligro había desaparecido para todos, salvo para Porfirio Cava. Los dados estaban quietos, marcaban tres y uno, su blancura contrastaba con el suelo sucio',
    'Los sitios web son archivos que los usuarios descargan con sus navegadores desde ordenadores remotos. Cuando un usuario decide acceder a un sitio web, le comunica al navegador la dirección del sitio y el programa descarga los archivos, procesa su contenido y lo muestra en pantalla',
    '<a> -Este elemento crea un enlace. El texto o la imagen que representa el enlace se incluye entre las etiquetas de apertura y cierre. El elemento incluye el atributo href para especificar la URL del enlace',
    'Las personas grandes, sin duda, no os creerán. Se imaginan que ocupan mucho lugar. Se sienten importantes, como los baobabs. Les aconsejaréis, pues, que hagan el cálculo. Les agradará porque adornan las cifras. Pero no perdáis el tiempo en esta penitencia. Es inútil. Tened confianza en mí.',
    '¡Oh no! Nada de eso. El hecho, el asunto, es muy sencillo en realidad, y no dudo que podríamos arreglárnoslas bastante bien nosotros solos; pero luego he pensado que a Dupin le agradecería oír  los detalles de esto, porque es sumamente "extraño"',
    'Moraleja: Si no somos capaces de lograr algo, no debemos despreciar las cosas ni culpar a otras personas o a las circunstancias a modo de consuelo.',
  ],
  en: [
    'And! The consequences are terrible; the universe no longer has a beginning in time or a limit in space; everything is subject to the chain of causes and effects; there is no longer a first cause; the idea of first cause, as Schopenhauer has said, is the idea of a piece of wood made of iron ',
    "Denis made a mistake by inviting Solita to shoot him. Sure, she was sure he wouldn't dare pull the trigger, but she did. And Denis died, although he died too late. -That's what my father said while thinking that loneliness also took too long to shoot at him ",
    'Let them come to whip our pallor, reinvigorate our shadows, bring us the sap that has abandoned us. Withered, bloodless, we cannot react against fatality: the dying do not join forces or riot',
    "An end of the world mess. How, in such a small space, can so many men coexist without destroying each other, without mortally hating each other? To tell the truth they hate each other, but they don't live up to their hate",
    'It provided me with the teaching of the first letters, Latin grammar, philosophy and some theology in Buenos Aires itself. He successively sent me to Spain to pursue a career in law, and there I studied in Salamanca; I graduated in Valladolid, continued in Madrid and became a lawyer at the Valladolid Foreign Ministry',
    'The sense of the future is deeply ingrained in human beings. At every moment we think, almost without realizing it, about what we are going to do later, tomorrow, next week, next month or two years from now',
    'We save for months or years or go into long-term debt to get what we want. And many men and women, relatively young and in excellent health, who are light years from the end, make wills or make last wishes about how to dispose of their property or affairs after death',
    'The aspect of the island when I went up on deck the next morning had totally changed. Although the breeze had completely died down, we had made good progress during the night and were hovering about half a mile southeast of the lower part of the eastern shore',
    '...they had lived together long enough to realize that love was love at any time and in any place, but all the more dense the closer to death',
    'I will never be old, I told him then. She interpreted it as a heroic purpose to fight without quarter against the ravages of time, but he was more explicit: he had the irrevocable determination to take his own life at the age of sixty.',
    'She was beautiful, elastic, with a tender skin the color of bread and green almond eyes, and she had straight black hair long down to her back and an aura of antiquity that could be from Indonesia as well as from the Andes.',
    'The colonel uncovered the coffee pot and found that there was only a teaspoon. He removed the pot from the stove, poured half the water on the dirt floor, and with a knife scraped the inside of the jar over the pot until the last scrapes of coffee powder mixed with tin rust came off.',
    'The captain looked at Fermina Daza and saw the first glimpses of winter frost on her eyelashes. Then he looked at Florentino Ariza, his invincible domination, his impassive love, and he was frightened by the belated suspicion that it is life, more than death, that has no limits.',
    'The faces softened in the flickering glow that the globe of light diffused through the room, through the few clean particles of glass: the danger had disappeared for everyone, except for Porfirio Cava. The dice were still, they marked three and one, their whiteness contrasted with the dirty floor',
    'Websites are files that users download with their browsers from remote computers. When a user decides to access a website, he tells the browser the address of the site and the program downloads the files, processes their content and displays it on the screen',
    '<a> -This element creates a link. The text or image that represents the link is included between the opening and closing tags. The element includes the href attribute to specify the URL of the link',
    "The big people, no doubt, will not believe you. They imagine that they take up a lot of space. They feel important, like the baobabs. You will therefore advise them to do the calculation. They will like it because they adorn the figures. But do not waste time in this penance. It's useless. Trust me.",
    'Oh no! Nothing of that. The fact, the matter, is very simple indeed, and I have no doubt that we could manage quite well by ourselves; but then I thought that Dupin would be grateful to hear the details of this, because it is extremely "strange"',
    'Moral: If we are not able to achieve something, we should not put things down or blame other people or circumstances for consolation.',
  ],
  it: [
    "E! Le conseguenze sono terribili; l'universo non ha più un inizio nel tempo né un limite nello spazio; tutto è soggetto alla catena di cause ed effetti; non c'è più una causa prima; l'idea della prima causa, come ha detto Schopenhauer, è l'idea di un pezzo di legno fatto di ferro",
    'Denis ha commesso un errore invitando Solita a sparargli. Certo, era sicuro che non avrebbe osato premere il grilletto, ma lo fece. E Denis è morto, anche se è morto troppo tardi. -Così disse mio padre pensando che anche la solitudine impiegava troppo tempo a sparargli',
    'Che vengano a frustare il nostro pallore, rinvigorire le nostre ombre, portarci la linfa che ci ha abbandonato. Appassiti, incruenti, non possiamo reagire alla fatalità: i moribondi non uniscono le forze né si ribellano',
    "Un pasticcio da fine mondo. Come possono, in uno spazio così piccolo, coesistere tanti uomini senza distruggersi a vicenda, senza odiarsi mortalmente? A dire il vero si odiano, ma non sono all'altezza del loro odio",
    "Mi ha fornito l'insegnamento delle prime lettere, della grammatica latina, della filosofia e di un po' di teologia nella stessa Buenos Aires. Successivamente mi mandò in Spagna per intraprendere la carriera di avvocato, e lì studiai a Salamanca; Mi sono laureato a Valladolid, ho proseguito a Madrid e sono diventato avvocato presso il Ministero degli Esteri di Valladolid",
    'Il senso del futuro è profondamente radicato negli esseri umani. In ogni momento pensiamo, quasi senza rendercene conto, a cosa faremo dopo, domani, la prossima settimana, il prossimo mese o tra due anni',
    'Risparmiamo per mesi o anni o ci indebitiamo a lungo termine per ottenere ciò che vogliamo. E molti uomini e donne, relativamente giovani e in ottima salute, che sono anni luce dalla fine, fanno testamento o esprimono desideri su come disporre dei loro beni o cose dopo la morte',
    "L'aspetto dell'isola quando salii sul ponte la mattina dopo era completamente cambiato. Sebbene la brezza si fosse completamente calmata, avevamo fatto buoni progressi durante la notte e ci trovavamo a circa mezzo miglio a sud-est della parte inferiore della sponda orientale",
    "...avevano vissuto insieme abbastanza a lungo da rendersi conto che l'amore era amore in qualsiasi momento e in qualsiasi luogo, ma tanto più denso quanto più vicini alla morte",
    "Non sarò mai vecchio, gli dissi allora. Lei lo interpretava come uno scopo eroico combattere senza sosta contro le ingiurie del tempo, ma lui era più esplicito: aveva la determinazione irrevocabile di togliersi la vita all'età di sessant'anni.",
    "Era bella, elastica, con una pelle tenera color pane e occhi verdi a mandorla, e aveva i capelli neri e lisci lunghi fino alla schiena e un'aura di antichità che poteva provenire dall'Indonesia così come dalle Ande.",
    "Il colonnello scoprì la caffettiera e scoprì che c'era solo un cucchiaino. Tolse la pentola dal fuoco, versò metà dell'acqua sul pavimento di terra battuta e con un coltello raschiò l'interno del barattolo sopra la pentola fino a quando non si staccarono gli ultimi graffi di polvere di caffè mescolati con ruggine di stagno.",
    'Il capitano guardò Fermina Daza e vide le prime brinate invernali sulle sue ciglia. Poi guardò Florentino Ariza, il suo dominio invincibile, il suo amore impassibile, e si spaventò per il tardivo sospetto che fosse la vita, più della morte, a non avere limiti.',
    'I volti si addolcirono nel bagliore tremolante che il globo di luce diffondeva nella stanza, attraverso le poche particelle pulite di vetro: il pericolo era scomparso per tutti, tranne Porfirio Cava. I dadi erano fermi, segnavano tre più uno, il loro candore contrastava con il terreno sporco',
    "I siti Web sono file che gli utenti scaricano con i loro browser da computer remoti. Quando un utente decide di accedere a un sito web, comunica al browser l'indirizzo del sito e il programma scarica i file, ne elabora il contenuto e lo visualizza sullo schermo",
    "<a> -Questo elemento crea un collegamento. Il testo o l'immagine che rappresenta il collegamento è incluso tra i tag di apertura e chiusura. L'elemento include l'attributo href per specificare l'URL del collegamento",
    'I grandi, senza dubbio, non ti crederanno. Immaginano di occupare molto spazio. Si sentono importanti, come i baobab. Consiglierete quindi loro di fare il calcolo. A loro piacerà perché adornano le figure. Ma non perdete tempo in questa penitenza. È inutile. Fidati di me.',
    'Oh no! Niente di tutto questo. Il fatto, la questione, è davvero molto semplice, e non dubito che potremmo cavarcela abbastanza bene da soli; ma poi ho pensato che Dupin sarebbe stato grato di ascoltare i dettagli di questo, perché è estremamente "strano"',
    'Morale: se non siamo in grado di ottenere qualcosa, non dovremmo mettere giù le cose o incolpare altre persone o circostanze per consolazione.',
  ],
}

const request = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(texts))
}

export default request
