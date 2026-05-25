export const NODO_INIZIALE = 'n001'

export interface Scelta {
  testo_it: string
  testo_en: string
  proseguiA: string
}

export interface Nodo {
  id: string
  testo_it: string
  testo_en: string
  scelte: Scelta[]
}

const nodi: Record<string, Nodo> = {
  n001: {
    id: 'n001',
    testo_it: 'Ti risvegli di scatto nella piazza di Gravenhollow. Una torcia è capovolta e brucia il selciato. Il sindaco giace morto in un lago di pietrificazione viola. Tre persone ti fissano in silenzio: il bettoliere, la strega locale e un bambino che regge una spada troppo grande per lui. Il bambino indica qualcosa dietro di te.',
    testo_en: 'You jolt awake in Gravenhollow square. A torch lies overturned, burning cobblestones. The mayor lies dead in a puddle of violet petrification. Three people stare at you: the innkeeper, the local witch, and a child holding a sword too large for him. The child points at something behind you.',
    scelte: [
      { testo_it: 'Entri nella locanda del Gufo Ubriaco', testo_en: 'Enter the Drunk Owl inn', proseguiA: 'n002' },
      { testo_it: 'Ti avvicini al pozzo che emette luce viola', testo_en: 'Approach the well emitting violet light', proseguiA: 'n003' },
      { testo_it: 'Segui il bambino con la spada', testo_en: 'Follow the child with the sword', proseguiA: 'n004' },
      { testo_it: "Corri verso l'archivio municipale", testo_en: 'Run toward the municipal archive', proseguiA: 'n005' },
    ],
  },
  n002: {
    id: 'n002',
    testo_it: "Il bettoliere — un uomo enorme con sopracciglia a punto interrogativo permanente — ti versa da bere prima che tu possa parlare. «Succede ogni luna piena,» dice. «Il sindaco muore, poi torna, poi muore di nuovo. È in pensione da tre anni ma continua a presentarsi.» Si ferma. «Questa volta però la pietrificazione è nuova.»",
    testo_en: "The innkeeper — a huge man with permanently question-mark eyebrows — pours you a drink before you can speak. 'Happens every full moon,' he says. 'Mayor dies, comes back, dies again. He's been retired three years but keeps showing up.' He pauses. 'The petrification is new, though.'",
    scelte: [
      { testo_it: 'Scendi nella cantina che ti incuriosisce', testo_en: 'Go down to the cellar that intrigues you', proseguiA: 'n006' },
      { testo_it: 'Chiedi del pozzo viola nel villaggio', testo_en: 'Ask about the violet well in the village', proseguiA: 'n007' },
      { testo_it: "Esamini l'oscurità fuori dalla finestra", testo_en: 'Examine the darkness outside the window', proseguiA: 'n008' },
      { testo_it: 'Leggi il registro degli ospiti sul bancone', testo_en: 'Read the guest register on the counter', proseguiA: 'n009' },
    ],
  },
  n003: {
    id: 'n003',
    testo_it: "Il pozzo emana lo stesso bagliore viola del sindaco. Mentre ti avvicini, una voce risale dal fondo: «Ah, finalmente qualcuno con le ginocchia che tengono. Gli altri sono svenuti.» La voce è sorprendentemente professionale. «Mi chiamo Vreth. Sono intrappolato qui da trecentosettantatré anni. Hai una corda?»",
    testo_en: "The well emits the same violet glow as the mayor. As you lean in, a voice rises: 'Finally, someone whose knees hold. The others all fainted.' The voice is surprisingly professional. 'My name is Vreth. I've been trapped here for three hundred and seventy-three years. Do you have a rope?'",
    scelte: [
      { testo_it: 'Offri di tirarlo su con una corda', testo_en: 'Offer to pull him up with a rope', proseguiA: 'n007' },
      { testo_it: 'Chiedi cosa sa della morte del sindaco', testo_en: 'Ask what he knows about the mayor\'s death', proseguiA: 'n009' },
      { testo_it: 'Cerchi qualcosa da usare come corda', testo_en: 'Look for something to use as a rope', proseguiA: 'n010' },
      { testo_it: 'Chiedi a Vreth cosa fare per liberarlo', testo_en: 'Ask Vreth what it takes to free him', proseguiA: 'n011' },
    ],
  },
  n004: {
    id: 'n004',
    testo_it: "Il bambino ti porta alla fucina del fabbro Aldric, che lavora nel buio a occhi chiusi. È sonnambulo. Sul banco pulsa una spada di luce azzurra. Sotto la lama c'è un biglietto: «PER CHI ARRIVA DOPO DI ME. NON È UNA TRAPPOLA. (Quasi.)». Il fabbro mormora nel sonno: «Il Patto di Ferro si è spezzato. Tre notti. Poi tutto brucia.»",
    testo_en: "The child leads you to blacksmith Aldric's forge. He works in darkness, eyes shut — sleepwalking. A sword pulses blue light on the bench. Under it, a note: 'FOR WHOEVER COMES AFTER ME. NOT A TRAP. (Mostly.)'. The smith murmurs in his sleep: 'The Iron Pact is broken. Three nights. Then everything burns.'",
    scelte: [
      { testo_it: 'Prendi la spada azzurra che pulsa', testo_en: 'Take the pulsing blue sword', proseguiA: 'n008' },
      { testo_it: 'Sveglia il fabbro', testo_en: 'Wake the blacksmith', proseguiA: 'n010' },
      { testo_it: 'Leggi il biglietto per intero', testo_en: 'Read the note in full', proseguiA: 'n011' },
      { testo_it: 'Segui le istruzioni verso il luogo del patto', testo_en: 'Follow the directions to the pact location', proseguiA: 'n012' },
    ],
  },
  n005: {
    id: 'n005',
    testo_it: "L'archivio ha una porta segreta dietro la bacheca delle ordinanze non pagate. La strega locale è già lì. Ha l'aria di chi ha vinto ogni discussione nella vita. «La profezia dice che salverai il villaggio o lo distruggerai completamente,» dice senza alzare lo sguardo. «Non specifica quale.» Posa sul tavolo: Il Catalogo dei Patti Rotti.",
    testo_en: "The archive has a secret door behind the unpaid-ordinances board. The local witch is already there — she looks like she's won every argument in her life. 'The prophecy says you'll save the village or destroy it completely,' she says without looking up. 'It doesn't specify which.' She sets down: The Catalog of Broken Pacts.",
    scelte: [
      { testo_it: 'Leggi il Catalogo dei Patti Rotti con lei', testo_en: 'Read the Catalog of Broken Pacts with her', proseguiA: 'n009' },
      { testo_it: 'Chiedi alla strega cosa sa di te', testo_en: 'Ask the witch what she knows about you', proseguiA: 'n011' },
      { testo_it: "Esamini le mappe nell'archivio", testo_en: 'Examine the maps in the archive', proseguiA: 'n012' },
      { testo_it: 'Chiedi della profezia per intero', testo_en: 'Ask for the full prophecy', proseguiA: 'n013' },
    ],
  },
  n006: {
    id: 'n006',
    testo_it: "Nella cantina trovi una riunione segreta. Sette persone che avrebbero voluto non essere viste: il prete, la maestra, il medico, il mugnaio, l'erborista, il guardiano con una chiave che non corrisponde a nessuna serratura del villaggio, e il bambino con la spada — che non dovrebbe essere qui. Ti fissano tutti.",
    testo_en: "In the cellar you find a secret meeting. Seven people who did not want to be seen: the priest, the schoolteacher, the doctor, the miller, the herbalist, the guard with a key matching no village lock, and the child with the sword — who shouldn't be here. They all stare at you.",
    scelte: [
      { testo_it: "Dici «Sono uno di voi. Spiegate tutto.»", testo_en: "Say 'I'm one of you. Explain everything.'", proseguiA: 'n010' },
      { testo_it: 'Chiedi della chiave senza serratura', testo_en: 'Ask about the key with no lock', proseguiA: 'n012' },
      { testo_it: 'Chiedi della mappa del sottosuolo', testo_en: 'Ask about the underground map', proseguiA: 'n013' },
      { testo_it: 'Decidi che non sono alleati e vai via', testo_en: 'Decide they are not allies and leave', proseguiA: 'n014' },
    ],
  },
  n007: {
    id: 'n007',
    testo_it: "Con la corda dell'asino del fabbro tiri su Vreth. È un demone di media taglia con corna calibrate per non fare danno, vestito come un contabile del 1400. «Grazie,» dice scrollandosi la muffa di dosso. «Il mio padrone mi ha intrappolato qui perché ho rifiutato di distruggere il villaggio. Non mi sembrava professionale. Ora vuole distruggerlo lui stesso.»",
    testo_en: "Using the blacksmith's donkey rope, you pull up Vreth. He's a mid-sized demon with safety-calibrated horns, dressed like a 1400s accountant. 'Thank you,' he says, shaking off mold. 'My master trapped me here because I refused to destroy the village. Didn't seem professional. Now he wants to destroy it himself.'",
    scelte: [
      { testo_it: 'Chiedi a Vreth chi è il suo padrone', testo_en: "Ask Vreth who his master is", proseguiA: 'n011' },
      { testo_it: "Chiedi cosa intende per «non sembrava professionale»", testo_en: "Ask what he means by 'didn't seem professional'", proseguiA: 'n013' },
      { testo_it: 'Offri a Vreth di aiutarti', testo_en: 'Offer Vreth a chance to help you', proseguiA: 'n014' },
      { testo_it: 'Chiedi cosa serve per fermare il suo padrone', testo_en: "Ask what it takes to stop his master", proseguiA: 'n015' },
    ],
  },
  n008: {
    id: 'n008',
    testo_it: "Appena tocchi la spada azzurra, una voce nella tua testa dice: «Oh no. Un altro.» La lama pulsa più forte. «Sono maledetta per fare sempre la cosa giusta. Il che significa che potrei rifiutarmi di colpire qualcuno che non lo merita.» Pausa. «Mi chiamo Sincera. Sì. Il fabbro aveva senso dell'umorismo.»",
    testo_en: "The instant you touch the blue sword, a voice in your head says: 'Oh no. Another one.' The blade pulses brighter. 'I'm cursed to always do the right thing. Which means I might refuse to strike someone who doesn't deserve it.' Pause. 'My name is Sincera. Yes. The blacksmith had a sense of humor.'",
    scelte: [
      { testo_it: 'Tieni Sincera e la usi per investigare', testo_en: 'Keep Sincera and use her to investigate', proseguiA: 'n012' },
      { testo_it: 'Chiedi a Sincera dove devi andare', testo_en: 'Ask Sincera where you need to go', proseguiA: 'n014' },
      { testo_it: 'Cerchi di convincerla a rimuovere la maledizione', testo_en: 'Try to talk her into removing the curse', proseguiA: 'n015' },
      { testo_it: 'Accetti la spada e le sue condizioni', testo_en: 'Accept the sword and her conditions', proseguiA: 'n016' },
    ],
  },
  n009: {
    id: 'n009',
    testo_it: "Il registro si apre da solo all'ultima pagina scritta con inchiostro rosso che non è inchiostro. «ATTENZIONE: chi legge accetta le condizioni del Patto di Ferro.» L'ultima clausola, evidenziata: «In caso di rottura del patto, il portatore del Marchio del Sangue deve presentarsi all'Albero delle Radici Nere entro tre giorni o il villaggio viene consumato.» Guardi il tuo polso.",
    testo_en: "The register opens itself to the last page, written in red ink that isn't ink. 'WARNING: the reader accepts the Iron Pact conditions.' The last clause, highlighted: 'In the event of pact breach, the bearer of the Blood Mark must present themselves at the Black Root Tree within three days or the village shall be consumed.' You look at your wrist.",
    scelte: [
      { testo_it: 'Cerchi il Marchio del Sangue sul tuo polso', testo_en: 'Search for the Blood Mark on your wrist', proseguiA: 'n013' },
      { testo_it: 'Chiedi della storia del Patto di Ferro', testo_en: 'Ask about the history of the Iron Pact', proseguiA: 'n015' },
      { testo_it: 'Esci verso la foresta immediatamente', testo_en: 'Head out toward the forest immediately', proseguiA: 'n016' },
      { testo_it: "Cerchi qualcuno che sappia dov'è l'Albero", testo_en: 'Find someone who knows where the Tree is', proseguiA: 'n017' },
    ],
  },
  n010: {
    id: 'n010',
    testo_it: "Aldric si sveglia di soprassalto e quasi ti colpisce con le pinze. Quando capisce che non sei un'ispezione fiscale si calma. «Il Patto di Ferro era un accordo tra il villaggio e Soreth il Consumatore. Vent'anni di pace in cambio dell'anima del sindaco ogni luna piena. Il sindaco accettò pensando di poter morire digitalmente.» Ti fissa. «Non funziona così.»",
    testo_en: "Aldric jolts awake and nearly hits you with the tongs. Realizing you're not a tax audit, he calms. 'The Iron Pact was a deal between the village and Soreth the Devourer. Twenty years of peace in exchange for the mayor's soul every full moon. The mayor agreed thinking he could die digitally.' He stares at you. 'It doesn't work that way.'",
    scelte: [
      { testo_it: 'Chiedi dove trovare Soreth il Consumatore', testo_en: 'Ask where to find Soreth the Devourer', proseguiA: 'n014' },
      { testo_it: 'Chiedi come si rompe il Patto di Ferro', testo_en: 'Ask how to break the Iron Pact', proseguiA: 'n016' },
      { testo_it: 'Chiedi come proteggere il villaggio adesso', testo_en: 'Ask how to protect the village now', proseguiA: 'n017' },
      { testo_it: "Domandi del 'morire digitalmente'", testo_en: "Ask about 'dying digitally'", proseguiA: 'n018' },
    ],
  },
  n011: {
    id: 'n011',
    testo_it: "Il libro si apre con un sospiro. Le pagine scompaiono dopo la lettura. «Salve, candidato. Sei stato selezionato per il programma Salvatore Villaggi in Crisi in quanto porti nel sangue il Marchio degli Antichi Guerrieri del Vespro. Il programma non prevede stipendio, ferie, o uscita anticipata. I candidati precedenti sono nell'appendice B. L'appendice B è vuota.» Firma: Il Destino S.r.l.",
    testo_en: "The book opens with a sigh. Pages vanish after reading. 'Greetings, candidate. You have been selected for the Struggling Village Savior program as your blood carries the Mark of the Ancient Dusk Warriors. The program includes no salary, vacation, or early exit. Previous candidates are in Appendix B. Appendix B is empty.' Signed: Fate Ltd.",
    scelte: [
      { testo_it: "Cerchi l'appendice B — deve esserci qualcosa", testo_en: 'Search Appendix B — something must be there', proseguiA: 'n015' },
      { testo_it: 'Chiedi alla strega del Marchio del Vespro', testo_en: 'Ask the witch about the Dusk Mark', proseguiA: 'n017' },
      { testo_it: 'Accetti il programma senza leggere tutto', testo_en: 'Accept the program without reading everything', proseguiA: 'n018' },
      { testo_it: 'Tenti di restituire il libro', testo_en: 'Try to return the book', proseguiA: 'n019' },
    ],
  },
  n012: {
    id: 'n012',
    testo_it: "La mappa porta a un deposito dove trovi un'armatura con cartellino: «Armatura di Ser Baldano il Prudente. Dotata di: rilevatore di pericoli (allarme 90 dB), sistema di fuga automatica (attivazione se pericolo >30%), scanner nemici, modalità 'nessuno mi ha visto'. Avvertenza: l'armatura potrebbe scappare senza di te.»",
    testo_en: "The map leads to a depot where you find armor with a label: 'Armor of Sir Baldano the Prudent. Features: danger detector (90dB alarm), auto-escape system (activates if danger >30%), enemy scanner, 'nobody saw me' mode. Warning: armor may flee without you.'",
    scelte: [
      { testo_it: "Indossi l'armatura accettando le avvertenze", testo_en: 'Don the armor, accepting the warnings', proseguiA: 'n016' },
      { testo_it: "Lasci l'armatura e cerchi qualcosa di meno giudicante", testo_en: 'Leave the armor, find something less judgmental', proseguiA: 'n018' },
      { testo_it: 'Disattivi la funzione di fuga automatica', testo_en: 'Deactivate the auto-escape function', proseguiA: 'n019' },
      { testo_it: "Prendi solo l'elmo", testo_en: 'Take only the helmet', proseguiA: 'n020' },
    ],
  },
  n013: {
    id: 'n013',
    testo_it: "La profezia è su un papiro di quindici metri. Il testo descrive un eroe di sangue antico che sconfigge l'oscurità eterna. La nota a piè di pagina, in caratteri minuscoli: «Attenzione: questa profezia si applica solo in condizioni meteorologiche stabili. In caso di nebbia, consultare la Profezia Alternativa (Volume 2, disponibile nelle migliori librerie dell'Inferno).» Oggi c'è nebbia.",
    testo_en: "The prophecy runs fifteen meters of papyrus. The main text describes a hero of ancient blood defeating eternal darkness. The footnote, in tiny print: 'Warning: this prophecy applies only under stable weather conditions. In fog, consult the Alternative Prophecy (Volume 2, available at the best bookstores in Hell).' Today there is fog.",
    scelte: [
      { testo_it: 'Cerchi il Volume 2 della Profezia Alternativa', testo_en: 'Search for Volume 2 of the Alternative Prophecy', proseguiA: 'n017' },
      { testo_it: 'Ignori le profezie e vai avanti da solo', testo_en: 'Ignore prophecies and push forward alone', proseguiA: 'n019' },
      { testo_it: 'Chiedi alla strega se conosce già il finale', testo_en: 'Ask the witch if she already knows the ending', proseguiA: 'n020' },
      { testo_it: 'Segui la profezia principale ignorando la nebbia', testo_en: 'Follow the main prophecy, ignore the fog', proseguiA: 'n021' },
    ],
  },
  n014: {
    id: 'n014',
    testo_it: "La grotta delle riunioni è illuminata da candele nere che proiettano ombre nel senso sbagliato. Il tuo arrivo interrompe la discussione. «Bene,» dice qualcuno nell'oscurità. «Il marchio è arrivato da solo. Forse questa volta funziona davvero.» Il bambino emerge portando una torcia. «Ti aspettavo,» dice con voce troppo vecchia per la sua faccia.",
    testo_en: "The meeting cave is lit by black candles casting shadows the wrong way. Your arrival halts discussion. 'Good,' says someone in the dark. 'The mark arrived on its own. Perhaps this time it truly works.' The child emerges with a torch. 'I was waiting for you,' he says with a voice too old for his face.",
    scelte: [
      { testo_it: 'Chiedi al bambino chi è davvero', testo_en: 'Ask the child who he really is', proseguiA: 'n018' },
      { testo_it: 'Accetti la situazione e chiedi cosa fare', testo_en: 'Accept the situation and ask what to do', proseguiA: 'n020' },
      { testo_it: 'Cerchi un uscita alternativa dalla grotta', testo_en: 'Look for an alternate exit from the cave', proseguiA: 'n021' },
      { testo_it: "Chiedi «funziona davvero cosa?»", testo_en: "Ask 'truly works at what?'", proseguiA: 'n022' },
    ],
  },
  n015: {
    id: 'n015',
    testo_it: "La verità: vent'anni fa il sindaco firmò un patto con Soreth. Pace e prosperità in cambio della sua anima ogni luna piena. Pensava di restare in carica per sempre. Non aveva considerato le elezioni. Tre sindaci si sono succeduti. Tutti e tre tornano ogni luna piena perché le loro anime sono ancora in pagamento. Gravenhollow ha tre sindaci fantasma in conflitto permanente.",
    testo_en: "The truth: twenty years ago the mayor signed a pact with Soreth. Peace and prosperity in exchange for his soul every full moon. He thought he'd stay in office forever. He hadn't considered elections. Three mayors followed him. All three return every full moon because their souls are still on payment. Gravenhollow has three ghost mayors in permanent conflict.",
    scelte: [
      { testo_it: 'Cerchi i tre sindaci fantasma per parlare con loro', testo_en: 'Search for the three ghost mayors to speak with them', proseguiA: 'n019' },
      { testo_it: 'Vai dal cancelliere per i documenti del patto originale', testo_en: "Go to the chancellor for the original pact documents", proseguiA: 'n021' },
      { testo_it: 'Decidi di liberare le anime dei sindaci per prima cosa', testo_en: "Decide to free the mayors' souls first", proseguiA: 'n022' },
      { testo_it: 'Esci verso la foresta per trovare Soreth', testo_en: 'Head out to the forest to find Soreth', proseguiA: 'n023' },
    ],
  },
  n016: {
    id: 'n016',
    testo_it: "La Foresta del Lamento deve il nome al fatto che si lamenta, letteralmente. Gli alberi emettono un suono basso e continuo come chi aspetta in fila da troppo tempo. Le foglie cadono verso l'alto. Un cartello recita: «FORESTA DEL LAMENTO — Accesso consentito. Siamo spiacenti per il disagio. Il disagio è permanente.» Un secondo cartello più piccolo: «Benvenuto comunque.»",
    testo_en: "The Forest of Lament earned its name honestly: it literally laments. The trees emit a low continuous sound, like someone who's been queuing too long. Leaves fall upward. A sign reads: 'FOREST OF LAMENT — Entry permitted. We apologize for the inconvenience. The inconvenience is permanent.' A smaller sign beneath: 'Welcome anyway.'",
    scelte: [
      { testo_it: 'Segui il sentiero principale', testo_en: 'Follow the main path', proseguiA: 'n020' },
      { testo_it: 'Eviti il sentiero e ti addentri tra gli alberi', testo_en: 'Avoid the path and push between trees', proseguiA: 'n022' },
      { testo_it: 'Parli con gli alberi lamentosi', testo_en: 'Talk to the lamenting trees', proseguiA: 'n023' },
      { testo_it: 'Cerchi subito il centro della foresta', testo_en: 'Head straight for the forest center', proseguiA: 'n024' },
    ],
  },
  n017: {
    id: 'n017',
    testo_it: "Un albero ti blocca stendendo un ramo. «Fermati. Sono testimone di quattrocento anni di storia. Vuoi saperla?» Percepisci la tua esitazione. «In sintesi: molta sofferenza, qualche commedia, una storia d'amore tragica tra il guardaboschi di trecento anni fa e una naiade, e tu sei il primo umano a non scappare al suono della mia voce. Il che è già notevole.»",
    testo_en: "A tree blocks you with a branch. 'Stop. I am a witness to four hundred years of history. Do you want to know it?' It senses your hesitation. 'In summary: much suffering, some comedy, a tragic love story between the ranger of three hundred years ago and a naiad, and you are the first human not to flee at the sound of my voice. Which is already notable.'",
    scelte: [
      { testo_it: "Ascolti la storia dell'albero per intero", testo_en: "Listen to the tree's full story", proseguiA: 'n021' },
      { testo_it: "Chiedi dell'Albero delle Radici Nere", testo_en: 'Ask about the Black Root Tree', proseguiA: 'n023' },
      { testo_it: 'Chiedi del luogo più pericoloso nella foresta', testo_en: 'Ask about the most dangerous place in the forest', proseguiA: 'n024' },
      { testo_it: "Chiedi come uscire dall'altra parte", testo_en: 'Ask how to exit the other side', proseguiA: 'n025' },
    ],
  },
  n018: {
    id: 'n018',
    testo_it: "Una città fungina emerge dalla nebbia: case-fungo alte un metro e mezzo, strade lastricate di spore compresse. Un fungo con cartella si avvicina: «Benvenuto in Mycetia. Occorre un permesso di transito, un visto di attraversamento e una dichiarazione di intenti non bellici. I tempi di attesa sono di tre settimane.» Ti fissa. «Oppure risponde a una sola domanda: quanto misura il cappello di un fungo di venerdì?»",
    testo_en: "A fungal city emerges from the fog: mushroom-houses one-and-a-half meters tall, streets of compressed spores. A mushroom with a briefcase approaches: 'Welcome to Mycetia. You will need a transit permit, crossing visa, and non-bellicose intent declaration. Processing time: three weeks.' It stares at you. 'Or answer one question: how wide is a mushroom's cap on a Friday?'",
    scelte: [
      { testo_it: 'Rispondi «dipende dal fungo»', testo_en: "Answer 'depends on the mushroom'", proseguiA: 'n022' },
      { testo_it: 'Rispondi filosoficamente', testo_en: 'Answer philosophically', proseguiA: 'n024' },
      { testo_it: 'Chiedi dove richiedere il permesso di transito', testo_en: 'Ask where to request the transit permit', proseguiA: 'n025' },
      { testo_it: "Non hai tre settimane — offri qualcosa in cambio", testo_en: "You don't have three weeks — offer something in trade", proseguiA: 'n026' },
    ],
  },
  n019: {
    id: 'n019',
    testo_it: "Il fiume è argenteo e silenzioso. Specchiandoti nell'acqua vedi non te stesso ma chi saresti potuto essere: un panettiere soddisfatto, un medico di campagna, un menestrello mediocre ma felice. La voce del fiume: «Bevi e dimentichi il tuo peggiore ricordo. Tre sorsi e dimentichi tutto il dolore. L'intero fiume e non ricordi di essere un eroe.»",
    testo_en: "The river is silver and silent. Reflected in the water you see not yourself but who you could have been: a satisfied baker, a country doctor, a mediocre but happy minstrel. The river's voice: 'Drink and forget your worst memory. Three sips and forget all pain. The entire river and you forget you're a hero.'",
    scelte: [
      { testo_it: 'Bevi un solo sorso', testo_en: 'Drink a single sip', proseguiA: 'n023' },
      { testo_it: 'Bevi tre sorsi', testo_en: 'Drink three sips', proseguiA: 'n025' },
      { testo_it: 'Non bevi e attraversi il fiume', testo_en: "Don't drink and cross the river", proseguiA: 'n026' },
      { testo_it: "Cerchi dove il fiume ha origine", testo_en: 'Search for where the river originates', proseguiA: 'n027' },
    ],
  },
  n020: {
    id: 'n020',
    testo_it: "La capanna è circondata da esattamente quaranta gatti in file precise come soldati. L'eremita Margit apre la porta prima che tu bussa. «So già tutto. Il patto, la foresta, il destino.» Ha l'aria di chi ha visto troppe profezie avverarsi parzialmente. «Ne sono arrivati diciassette, di eroi. Tutti hanno sbagliato.» Indica il cimitero dietro la capanna. «Non è quello dei gatti. Sono le lapidi degli eroi sbagliati.»",
    testo_en: "The hut is surrounded by exactly forty cats in neat rows like soldiers. Hermit Margit opens the door before you knock. 'I already know. The pact, the forest, the fate.' She has the look of someone who's watched too many prophecies partially come true. 'Seventeen heroes arrived. All took the wrong path.' She points to the cemetery behind the hut. 'Not for cats. Those are gravestones of the wrong heroes.'",
    scelte: [
      { testo_it: 'Chiedi a Margit qual è il percorso giusto', testo_en: 'Ask Margit which path is right', proseguiA: 'n024' },
      { testo_it: 'Chiedi dei diciassette eroi sbagliati', testo_en: 'Ask about the seventeen wrong heroes', proseguiA: 'n026' },
      { testo_it: 'Chiedi perché le lapidi sono nel cimitero dei gatti', testo_en: "Ask why the gravestones are in the cat cemetery", proseguiA: 'n027' },
      { testo_it: 'Chiedi a Margit di accompagnarti', testo_en: 'Ask Margit to come with you', proseguiA: 'n028' },
    ],
  },
  n021: {
    id: 'n021',
    testo_it: "Cinque statue di guerrieri si ergono in cerchio. Sono coperte di muschio con espressioni di chi ha realizzato qualcosa di sgradevole nell'ultimo momento. Mentre le esamini, una sbatte le ciglia. Poi le apre completamente. «Oh,» dice con voce di pietra scricchiolante. «Sei tornato.» Silenzio. «Aspetta, tu non sei quello. Chi sei?»",
    testo_en: "Five warrior statues stand in a circle. Moss-covered, with expressions of those who realized something unpleasant at the last moment. As you examine them, one blinks. Then fully opens its eyes. 'Oh,' it says with a creaking stone voice. 'You're back.' Silence. 'Wait, you're not the one. Who are you?'",
    scelte: [
      { testo_it: 'Ti presenti e chiedi chi aspetta', testo_en: 'Introduce yourself and ask who it waits for', proseguiA: 'n025' },
      { testo_it: "Chiedi cosa è successo alle statue", testo_en: 'Ask what happened to the statues', proseguiA: 'n027' },
      { testo_it: 'Chiedi della persona che la statua aspetta', testo_en: 'Ask about the person the statue waits for', proseguiA: 'n028' },
      { testo_it: 'Chiedi se le statue possono aiutarti', testo_en: 'Ask if the statues can help you', proseguiA: 'n029' },
    ],
  },
  n022: {
    id: 'n022',
    testo_it: "Il labirinto non è alto ma le sue spine sono lunghe quanto dita e si inclinano verso di te come un pubblico curioso. Dal centro si sente una voce che canta, o piange, o forse entrambe. La strega ti aveva avvertito: «Non entrare nel labirinto senza qualcosa di importante per te.» Guardi le tue mani.",
    testo_en: "The maze isn't tall but its thorns are finger-long and tilt toward you like a curious audience. From the center comes a voice that sings, or cries, or perhaps both. The witch had warned you: 'Don't enter the maze without something important to you.' You look at your hands.",
    scelte: [
      { testo_it: 'Entri tenendo alta la spada azzurra', testo_en: 'Enter holding the blue sword aloft', proseguiA: 'n026' },
      { testo_it: 'Entri tenendo qualcosa di personale', testo_en: 'Enter holding something personal', proseguiA: 'n028' },
      { testo_it: 'Aggiri il labirinto', testo_en: 'Go around the maze', proseguiA: 'n029' },
      { testo_it: 'Urli una risposta al centro', testo_en: 'Shout an answer toward the center', proseguiA: 'n030' },
    ],
  },
  n023: {
    id: 'n023',
    testo_it: "La radura ospita le anime dei morti che non hanno deciso di andarsene. Sembrano persone normali, solo leggermente traslucide. Un vecchio: «Non ho mai detto a mia moglie che mi piaceva il suo stufato. Mentivo sempre.» Una bambina: «Ho dimenticato di restituire un libro alla biblioteca. Sono qui da ottant'anni.» Un cavaliere: «La mia armatura era troppo stretta. Non ditelo a nessuno.»",
    testo_en: "The clearing holds the souls of the dead who haven't decided to leave. They look like normal people, only slightly translucent. An old man: 'I never told my wife I liked her stew. I always lied.' A girl: 'I forgot to return a library book. I've been here eighty years.' A knight: 'My armor was too tight to run. Don't tell anyone.'",
    scelte: [
      { testo_it: "Parli con il cavaliere dell'armatura stretta", testo_en: 'Talk to the knight about the tight armor', proseguiA: 'n027' },
      { testo_it: 'Cerchi un anima con informazioni utili', testo_en: 'Search for a soul with useful information', proseguiA: 'n029' },
      { testo_it: 'Chiedi se qualcuno conosce Soreth', testo_en: 'Ask if anyone knows Soreth', proseguiA: 'n030' },
      { testo_it: 'Ringraziate le anime e continuate', testo_en: 'Thank the souls and move on', proseguiA: 'n031' },
    ],
  },
  n024: {
    id: 'n024',
    testo_it: "Il cervo stellare emerge dalla nebbia con la mole di un cavallo da guerra e stelle intrappolate nel mantello. «Prima che tu dica qualcosa,» dice con voce di chi l'ha sentita troppe volte, «sì, posso concedere doni. No, non è 'forza, saggezza o velocità' — quella è per i bambini. Ho un catalogo.» Un cerbiatto si avvicina con un catalogo rilegato in pelle stellare. «Pagina quattordici, sezione poteri pratici.»",
    testo_en: "The star deer emerges, war-horse-sized with stars trapped in its coat. 'Before you say anything,' it says with the voice of someone who's heard it too many times, 'yes, I grant gifts. No, it's not strength-wisdom-speed — that's the children's version. I have a catalog.' A fawn approaches with a catalog bound in star-leather. 'Page fourteen, practical powers section.'",
    scelte: [
      { testo_it: 'Apri il catalogo a pagina quattordici', testo_en: 'Open the catalog to page fourteen', proseguiA: 'n028' },
      { testo_it: 'Chiedi il dono della comprensione delle lingue antiche', testo_en: 'Request the gift of understanding ancient languages', proseguiA: 'n030' },
      { testo_it: 'Chiedi del pericolo più grande che ti aspetta', testo_en: 'Ask about the greatest danger ahead', proseguiA: 'n031' },
      { testo_it: 'Chiedi perché il cervo aiuta i mortali', testo_en: 'Ask why the deer helps mortals', proseguiA: 'n032' },
    ],
  },
  n025: {
    id: 'n025',
    testo_it: "Il ponte parla prima che tu ci metta piede. «Fermo. Sono il Ponte della Giudicazione Equa. Prima di passare devo valutare il tuo cuore.» Piccola pausa. «Ho valutato duemilaquattrocentotrentasette persone. Solo tre hanno passato al primo tentativo. Uno era un bambino di sei anni che non capiva le domande.» Ti fissa. «Domanda etica: se salvi un villaggio perdendo l'unica cosa che ami, vale la pena?»",
    testo_en: "The bridge speaks before you step on it. 'Halt. I am the Bridge of Fair Judgment. I must evaluate your heart before you cross.' Brief pause. 'I have evaluated two thousand four hundred and thirty-seven people. Only three passed first try. One was a six-year-old who didn't understand the questions.' It stares at you. 'Ethical question: if saving a village costs you the only thing you love, is it worth it?'",
    scelte: [
      { testo_it: 'Rispondi «sì, vale la pena»', testo_en: "Answer 'yes, it's worth it'", proseguiA: 'n029' },
      { testo_it: 'Rispondi «dipende da cosa ami»', testo_en: "Answer 'depends what you love'", proseguiA: 'n031' },
      { testo_it: 'Dici che la domanda è mal formulata', testo_en: 'Say the question is poorly worded', proseguiA: 'n032' },
      { testo_it: 'Attraversi il ponte di corsa senza rispondere', testo_en: 'Sprint across the bridge without answering', proseguiA: 'n033' },
    ],
  },
  n026: {
    id: 'n026',
    testo_it: "La torre è avvolta in rovi che sembrano architettura più che crescita: muri di spine intrecciate con finestre formate da aperture. All'ingresso, su una pietra: «Torre di Isolamento Volontario — Occupata da Layla, ex-maga reale, in pensione. Visitatori: bussate forte. Ho rimosso tutti gli incantesimi di sorveglianza perché erano invadenti.» La porta è barricata ma senti passi avvicinarsi.",
    testo_en: "The tower is wrapped in thorns that look like architecture rather than growth: walls of woven briars with thorn-framed windows. At the entrance, on a stone: 'Tower of Voluntary Isolation — Occupied by Layla, former royal mage, retired. Visitors: knock loudly. I removed all surveillance enchantments because they were invasive.' The door is barricaded but you hear footsteps approaching.",
    scelte: [
      { testo_it: 'Bussi', testo_en: 'Knock', proseguiA: 'n030' },
      { testo_it: 'Cerchi un altra entrata', testo_en: 'Look for another entrance', proseguiA: 'n032' },
      { testo_it: 'Chiami il nome di Layla', testo_en: "Call Layla's name", proseguiA: 'n033' },
      { testo_it: 'Aspetti che la maga apra da sola', testo_en: 'Wait for the mage to open it herself', proseguiA: 'n034' },
    ],
  },
  n027: {
    id: 'n027',
    testo_it: "Il villaggio è grande quanto un tavolo da pranzo e ospita trecentoventi folletti con aspettative enormi. Il loro re — alto come un dito — ti si erge davanti su un fungo del trono. «Eroe! Ti aspettavamo da generazioni. Siamo tormentati dalla Maledizione delle Scarpe Bagnate: quando piove, le nostre scarpe si bagnano.» Ti guarda con occhi grandi. «Sei la nostra unica speranza.» Nota: piove da trecento anni.",
    testo_en: "The village is dining-table-sized and hosts three hundred and twenty pixies with enormous expectations. Their king — thumb-high — stands on a mushroom throne. 'Hero! We have awaited you for generations. We suffer the Curse of the Wet Shoes: when it rains, our shoes get wet.' He looks at you with big eyes. 'You are our only hope.' Note: it has been raining for three hundred years.",
    scelte: [
      { testo_it: 'Offri di aiutarli con le scarpe bagnate', testo_en: 'Offer to help them with the wet shoes', proseguiA: 'n031' },
      { testo_it: 'Chiedi informazioni utili in cambio', testo_en: 'Ask for useful information in exchange', proseguiA: 'n033' },
      { testo_it: 'Spieghi cos\'è un impermeabile', testo_en: "Explain what a raincoat is", proseguiA: 'n034' },
      { testo_it: 'Chiedi perché non si sono spostati', testo_en: "Ask why they didn't just move", proseguiA: 'n035' },
    ],
  },
  n028: {
    id: 'n028',
    testo_it: "Il cancello in fondo alla foresta è sorvegliato da una versione anziana di te stesso. Ha le tue cicatrici ma in più, i tuoi occhi ma più stanchi. «So cosa stai per dire,» dice il tuo io futuro. «Ti dico solo questo: il percorso che sceglierai adesso determina se arrivo qui ogni giorno o solo quando necessario.» Non vuole aggiungere altro. Apre il cancello.",
    testo_en: "The gate at the forest's far end is guarded by an elderly version of yourself. They have your scars but more, your eyes but wearier. 'I know what you're about to say,' says your future self. 'I'll only tell you this: the path you choose now determines whether I come here every day or only when necessary.' They won't say more. They open the gate.",
    scelte: [
      { testo_it: 'Chiedi al tuo io futuro la cosa più importante', testo_en: 'Ask your future self the one important thing', proseguiA: 'n032' },
      { testo_it: 'Passi il cancello senza dire nulla', testo_en: 'Pass through the gate in silence', proseguiA: 'n034' },
      { testo_it: 'Chiedi se il villaggio ce la fa', testo_en: 'Ask if the village makes it', proseguiA: 'n035' },
      { testo_it: "Chiedi se l'amore che senti è reale", testo_en: 'Ask if the love you feel is real', proseguiA: 'n036' },
    ],
  },
  n029: {
    id: 'n029',
    testo_it: "Ti accorgi dell'ombra quando smette di seguire i tuoi movimenti. Si gira. Ti guarda. Ha un'espressione propria e in questo momento sembra stanca. «Ho bisogno di parlarti.» Siedete entrambi sulla terra della foresta, fianco a fianco. «Sono il lato di te che conosce la verità,» dice. «Stai andando nella direzione sbagliata. Ma è la direzione giusta. Il paradosso è il punto.»",
    testo_en: "You notice the shadow when it stops following your movements. It turns. It looks at you. It has its own expression and right now it looks tired. 'I need to talk to you.' You both sit on the forest floor, side by side. 'I'm the part of you that knows the truth,' it says. 'You're going in the wrong direction. But it's the right direction. The paradox is the point.'",
    scelte: [
      { testo_it: "Chiedi alla tua ombra di spiegarsi", testo_en: 'Ask your shadow to explain', proseguiA: 'n033' },
      { testo_it: 'Accetti il paradosso e continui', testo_en: 'Accept the paradox and continue', proseguiA: 'n035' },
      { testo_it: "Chiedi all'ombra di tornare al suo posto", testo_en: 'Tell the shadow to get back in place', proseguiA: 'n036' },
      { testo_it: "Chiedi all'ombra se conosce la fine", testo_en: 'Ask the shadow if it knows the ending', proseguiA: 'n037' },
    ],
  },
  n030: {
    id: 'n030',
    testo_it: "Il campo di battaglia del Grande Massacro di Cent'anni Fa è ancora in corso. I soldati, morti da cent'anni, hanno dimenticato di smettere. Si combattono tra fantasmi con armi fantasma, con grande efficienza e nessun danno reale. Un ufficiale ti si avvicina: «Non interferire con le operazioni militari.» Ti guarda. «Aspetta, non sei un soldato. Vuoi esserlo? Abbiamo buone paghe fantasma.»",
    testo_en: "The battlefield of the Great Massacre of a Hundred Years Ago is still ongoing. The soldiers, dead for a hundred years, forgot to stop. They fight as ghosts with ghost weapons — great efficiency, no real harm. An officer approaches: 'Do not interfere with military operations.' Looks at you. 'Wait, you're not a soldier. Do you want to be one? We offer good ghost pay.'",
    scelte: [
      { testo_it: "Declini l'offerta e chiedi di attraversare", testo_en: 'Decline and ask for safe passage', proseguiA: 'n034' },
      { testo_it: "Accetti temporaneamente per avere accesso", testo_en: 'Accept temporarily for access', proseguiA: 'n036' },
      { testo_it: "Chiedi all'ufficiale del conflitto originale", testo_en: 'Ask the officer about the original conflict', proseguiA: 'n037' },
      { testo_it: 'Cerchi un modo per aiutare i fantasmi a finire la guerra', testo_en: 'Look for a way to help the ghosts end the war', proseguiA: 'n038' },
    ],
  },
  n031: {
    id: 'n031',
    testo_it: "La Torre degli Spiriti galleggia a tre metri di altezza sopra un lago di mercurio solido. È alta trenta piani di cui diciassette sono impossibili date le leggi della fisica. Un cartello galleggiante: «TORRE DEGLI SPIRITI — Accesso ai soli autorizzati. Definizione di 'autorizzato': chi riesce ad arrivarci.» Sotto, meno ufficialmente: «C'è un trampolino dietro gli alberi.»",
    testo_en: "The Tower of Spirits floats three meters above a lake of solid mercury. It's thirty floors tall, of which seventeen defy physics. A floating sign: 'TOWER OF SPIRITS — Authorized personnel only. Definition of authorized: whoever manages to get here.' Below, less officially: 'There's a trampoline behind the trees.'",
    scelte: [
      { testo_it: 'Cerchi il trampolino', testo_en: 'Find the trampoline', proseguiA: 'n035' },
      { testo_it: 'Cerchi un altro modo di salire', testo_en: 'Find another way up', proseguiA: 'n037' },
      { testo_it: 'Urli verso la torre', testo_en: 'Shout toward the tower', proseguiA: 'n038' },
      { testo_it: 'Esamini il lago di mercurio solido', testo_en: 'Examine the lake of solid mercury', proseguiA: 'n039' },
    ],
  },
  n032: {
    id: 'n032',
    testo_it: "Il guardiano è un ex-eroe in pensione di nome Brennus che fa il guardiano per mantenersi in forma. «Nessuno ha mai alzato le mani qui,» dice con aria dispiaciuta. «Il mio record di fermate è quarantadue. Il quarantatré sarebbe bellissimo.» Si ferma. «Ma tu potresti essere l'eroe vero. In quel caso devo lasciarti passare. Il regolamento è preciso.» Ti studia come si studia un avversario. «Sei l'eroe vero?»",
    testo_en: "The guardian is a retired ex-hero named Brennus who guards the tower to stay in shape. 'Nobody has ever raised their hands here,' he says with genuine regret. 'My record of stops is forty-two. Forty-three would be beautiful.' He pauses. 'But you might be the true hero. In that case I must let you pass. Regulations are clear.' He studies you like an opponent. 'Are you the true hero?'",
    scelte: [
      { testo_it: "Dici «sì, sono l'eroe vero» con sicurezza", testo_en: "Say 'yes, I am the true hero' with confidence", proseguiA: 'n036' },
      { testo_it: "Dici «non lo so ancora» onestamente", testo_en: "Say 'I don't know yet' honestly", proseguiA: 'n038' },
      { testo_it: 'Sfidi Brennus a un combattimento amichevole', testo_en: 'Challenge Brennus to a friendly bout', proseguiA: 'n039' },
      { testo_it: 'Chiedi a Brennus cosa sa della torre', testo_en: 'Ask Brennus what he knows about the tower', proseguiA: 'n040' },
    ],
  },
  n033: {
    id: 'n033',
    testo_it: "La biblioteca contiene libri non ancora scritti. I titoli: «Come Ho Salvato il Mondo Sbagliato: Memorie», «Manuale del Perfetto Anti-Eroe (Edizione Riveduta)», «Il Giorno in Cui il Male Vinse: Analisi Retrospettiva». Nell'angolo più remoto, un libro con copertina bianca che riporta solo il tuo nome. Quando lo apri, le pagine sono vuote tranne l'ultima: «Fine.»",
    testo_en: "The library contains books not yet written. Titles: 'How I Saved the Wrong World: Memoirs', 'The Perfect Anti-Hero Manual (Revised Edition)', 'The Day Evil Won: Retrospective Analysis'. In the farthest corner, a white-covered book bearing only your name. You open it: blank pages except the last one: 'The End.'",
    scelte: [
      { testo_it: 'Scrivi qualcosa nelle pagine bianche del tuo libro', testo_en: 'Write something in your book\'s blank pages', proseguiA: 'n037' },
      { testo_it: "Leggi il manuale dell'anti-eroe", testo_en: 'Read the anti-hero manual', proseguiA: 'n039' },
      { testo_it: 'Cerchi un libro che spieghi la torre', testo_en: 'Search for a book explaining the tower', proseguiA: 'n040' },
      { testo_it: 'Prendi il tuo libro con te', testo_en: 'Take your book with you', proseguiA: 'n041' },
    ],
  },
  n034: {
    id: 'n034',
    testo_it: "Il laboratorio è pieno di paure conservate in barattoli di vetro. Etichette: «Paura del buio — lotto 247», «Terrore di essere dimenticati — premium», «Ansia delle scarpe non abbinate — uso comune», «Il Terrore della Propria Sufficienza — raro, non aprire». Uno dei barattoli è rotto. La paura evasa è etichettata solo: «LA VERITÀ». La senti nell'aria.",
    testo_en: "The lab is full of fears preserved in glass jars. Labels: 'Fear of the dark — lot 247', 'Terror of being forgotten — premium', 'Mismatched shoe anxiety — common use', 'Terror of One's Own Sufficiency — rare, do not open.' One jar is broken. The escaped fear's label reads only: 'THE TRUTH.' You feel it in the air.",
    scelte: [
      { testo_it: "Cerchi il barattolo rotto e provi a richiudere «LA VERITÀ»", testo_en: "Find the broken jar and try to reseal 'THE TRUTH'", proseguiA: 'n038' },
      { testo_it: "Esamini la paura nell'aria", testo_en: 'Examine the fear in the air', proseguiA: 'n040' },
      { testo_it: 'Esci dal laboratorio velocemente', testo_en: 'Exit the laboratory quickly', proseguiA: 'n041' },
      { testo_it: 'Prendi un barattolo di paura come arma', testo_en: 'Take a jar of fear as a weapon', proseguiA: 'n042' },
    ],
  },
  n035: {
    id: 'n035',
    testo_it: "Ogni specchio mostra una versione diversa di te. A sinistra: vita semplice, aria molto riposata, taglia verdure con competenza. Al centro: armatura dorata, folla enorme, aria di chi crede in ciò che dice. A destra: invecchiato vicino a un fuoco con qualcuno che non riesci a vedere bene, e ride. Dietro di te, uno specchio che non mostra niente. Solo buio.",
    testo_en: "Every mirror shows a different you. Left: simple life, very rested, chops vegetables competently. Center: golden armor, enormous crowd, looks like you believe what you're saying. Right: aged, by a fire with someone you can't quite see, laughing. Behind you, a mirror that shows nothing. Just darkness.",
    scelte: [
      { testo_it: 'Guardi nello specchio buio', testo_en: 'Look into the dark mirror', proseguiA: 'n039' },
      { testo_it: 'Parli con il riflesso che ride vicino al fuoco', testo_en: 'Talk to the reflection laughing by the fire', proseguiA: 'n041' },
      { testo_it: "Chiedi allo specchio come diventare quell'eroe", testo_en: 'Ask the center mirror how to become that hero', proseguiA: 'n042' },
      { testo_it: 'Rompi lo specchio buio', testo_en: 'Break the dark mirror', proseguiA: 'n043' },
    ],
  },
  n036: {
    id: 'n036',
    testo_it: "Il suo nome è Aldena ed è morta vent'anni fa cercando di fare esattamente quello che stai facendo tu. È seduta su una poltrona consumata. «Ho sbagliato alla penultima scelta,» dice prima che tu possa salutarla. «Ti dico dove, se vuoi. Ma devi promettermi una cosa.» Indica un libro in grembo. «Restituiscilo alla biblioteca. È scaduto da vent'anni. Mi pesa sulla coscienza.»",
    testo_en: "Her name is Aldena and she died twenty years ago trying to do exactly what you're doing. She sits in a worn armchair. 'I made the wrong choice at the second-to-last decision,' she says before you can greet her. 'I'll tell you where, if you want. But promise me one thing.' She points to a book in her lap. 'Return this to the library. Twenty years overdue. It weighs on my conscience.'",
    scelte: [
      { testo_it: 'Prometti di restituire il libro e ascolti il consiglio', testo_en: 'Promise to return the book and hear her advice', proseguiA: 'n040' },
      { testo_it: "Chiedi dov'è sbagliata senza promettere nulla", testo_en: 'Ask where she went wrong without promising anything', proseguiA: 'n043' },
      { testo_it: 'Chiedi ad Aldena di accompagnarti', testo_en: 'Ask Aldena to come with you', proseguiA: 'n044' },
      { testo_it: 'Chiedi di Soreth il Consumatore', testo_en: 'Ask about Soreth the Devourer', proseguiA: 'n045' },
    ],
  },
  n037: {
    id: 'n037',
    testo_it: "L'archivio contiene i segreti di tutti, organizzati alfabeticamente. C'è la tua cartella. Contiene: una fotografia che non hai mai scattato di luoghi che non hai mai visitato, tre lettere che non hai mai scritto a qualcuno che non hai mai incontrato, e un certificato: «Questo individuo è autenticamente coraggioso. Emesso in anticipo.» Data: domani. Firma: Il Destino. P.S.: Non perdere il certificato.",
    testo_en: "The archive holds everyone's secrets, organized alphabetically. There's your file. It contains: a photograph you never took of places you never visited, three letters you never wrote to someone you never met, and a certificate: 'This individual is authentically courageous. Issued in advance.' Date: tomorrow. Signed: Fate. P.S.: Don't lose the certificate.",
    scelte: [
      { testo_it: 'Prendi il tuo certificato di coraggio', testo_en: 'Take your courage certificate', proseguiA: 'n041' },
      { testo_it: 'Leggi una delle lettere non scritte', testo_en: 'Read one of the unwritten letters', proseguiA: 'n043' },
      { testo_it: 'Cerchi la cartella di Soreth il Consumatore', testo_en: "Search for Soreth the Devourer's file", proseguiA: 'n044' },
      { testo_it: "Esci dall'archivio senza prendere nulla", testo_en: 'Exit the archive taking nothing', proseguiA: 'n045' },
    ],
  },
  n038: {
    id: 'n038',
    testo_it: "Il piano è trasparente e attraverso di esso vedi un abisso di buio con personalità. Ti guarda da sotto. «Sei più piccolo di quanto immaginassi.» Pausa. «Intendo la statura spirituale, non fisica. Quella è nella media.» Qualcosa nell'abisso pulsa lentamente — come molti cuori.",
    testo_en: "The floor is transparent and through it you see an abyss of darkness with personality. It looks back up at you. 'You're smaller than I imagined.' Pause. 'I mean spiritual stature, not physical. That's average.' Something in the abyss pulses slowly — like many hearts.",
    scelte: [
      { testo_it: "Parli con l'abisso", testo_en: 'Talk to the abyss', proseguiA: 'n042' },
      { testo_it: "Cerchi una via per scendere nell'abisso", testo_en: 'Find a way down into the abyss', proseguiA: 'n044' },
      { testo_it: "Ignori l'abisso e continui a salire", testo_en: 'Ignore the abyss and keep climbing', proseguiA: 'n045' },
      { testo_it: "Corri verso l'alto il più veloce possibile", testo_en: 'Run upward as fast as possible', proseguiA: 'n046' },
    ],
  },
  n039: {
    id: 'n039',
    testo_it: "Il consiglio dei morti tiene seduta ogni mercoledì. Sono sette: un'imperatrice, un filosofo, due gladiatori che non si parlano, un poeta drammatico, una bambina con un libro, e qualcuno avvolto in ombre che non vota mai ma annuisce. Hanno già votato sulla tua questione. Risultato: 4 a 3 in tuo favore. «L'imperatore dei vivi non conta come voto multiplo,» precisa l'imperatrice, «anche se tecnicamente mi deve favori.»",
    testo_en: "The council of the dead meets every Wednesday. Seven members: an empress, a philosopher, two gladiators who won't speak to each other, a dramatic poet, a girl with a book, and someone wrapped in shadows who never votes but nods. They've already voted on your matter. Result: 4 to 3 in your favor. 'The emperor of the living doesn't count as a multiple vote,' the empress notes, 'even though technically he owes me favors.'",
    scelte: [
      { testo_it: 'Chiedi per cosa hanno votato', testo_en: 'Ask what they voted on', proseguiA: 'n043' },
      { testo_it: 'Chiedi al consiglio aiuto pratico', testo_en: 'Ask the council for practical help', proseguiA: 'n045' },
      { testo_it: 'Chiedi chi è la figura avvolta in ombre', testo_en: 'Ask who the shadowed figure is', proseguiA: 'n046' },
      { testo_it: 'Ringrazi e vai via prima che cambino idea', testo_en: 'Thank them and leave before they change their minds', proseguiA: 'n047' },
    ],
  },
  n040: {
    id: 'n040',
    testo_it: "Il cartello sulla porta: «STANZA DEL TEMPO SPEZZATO — ATTENZIONE: il martedì si ripete.» Un uomo siede a un tavolo con la colazione del martedì mattina. «Un visitatore. Sono qui da... non so quanti martedì. Migliaia. Ho finito di mangiarla tredici volte e torna sempre uguale.» Si ferma. «Sai che giorno è fuori?»",
    testo_en: "The sign on the door: 'ROOM OF BROKEN TIME — WARNING: Tuesday repeats.' A man sits at a table with Tuesday breakfast. 'A visitor. I've been here for... I don't know how many Tuesdays. Thousands. I've finished eating it thirteen times and it always comes back.' He pauses. 'Do you know what day it is outside?'",
    scelte: [
      { testo_it: "Dici che è mercoledì e osservi cosa succede", testo_en: "Tell him it's Wednesday and watch", proseguiA: 'n044' },
      { testo_it: 'Cerchi la fonte dello spezzamento nella stanza', testo_en: 'Search for the source of the break in the room', proseguiA: 'n046' },
      { testo_it: "Porti l'uomo con te fuori dalla stanza", testo_en: 'Bring the man with you out of the room', proseguiA: 'n047' },
      { testo_it: 'Mangi la colazione con lui', testo_en: 'Eat breakfast with him', proseguiA: 'n048' },
    ],
  },
  n041: {
    id: 'n041',
    testo_it: "Il cuore della torre pulsa: una sfera di energia oscura grande come una carrozza. Attorno a essa, scritti nell'aria con luce: i nomi di tutti coloro che Soreth ha mai consumato. Centinaia di migliaia. Stai ancora cercando di contarli quando la sfera ti parla: «Non sono Soreth. Sono quello che Soreth ha mangiato. Tutti noi.» Pausa. «Siamo molto stanchi.»",
    testo_en: "The tower's heart pulses: a sphere of dark energy carriage-sized. Around it, names written in light in the air — all those Soreth ever consumed. Hundreds of thousands. You're still trying to count when the sphere speaks: 'I'm not Soreth. I'm what Soreth ate. All of us.' Pause. 'We are very tired.'",
    scelte: [
      { testo_it: 'Chiedi alle anime come liberarle', testo_en: 'Ask the souls how to free them', proseguiA: 'n045' },
      { testo_it: 'Chiedi dove trovare Soreth', testo_en: 'Ask where to find Soreth', proseguiA: 'n047' },
      { testo_it: 'Prometti che le libererai', testo_en: "Promise you'll free them", proseguiA: 'n048' },
      { testo_it: 'Cerchi un modo per rompere la sfera', testo_en: 'Search for a way to break the sphere', proseguiA: 'n049' },
    ],
  },
  n042: {
    id: 'n042',
    testo_it: "La figura che si offre non ha forma definita. «Posso darti il potere di sconfiggere Soreth in cambio di una piccola cosa.» Pausa. «La tua ombra. Non la perderesti visivamente — è solo quella metafisica. Quella che porta il peso delle tue azioni.» Ti fissa. «Molti la considerano un peso. Tu come la consideri?»",
    testo_en: "The figure making the offer has no defined form. 'I can give you the power to defeat Soreth in exchange for a small thing.' Pause. 'Your shadow. You wouldn't lose it visually — only the metaphysical one. The one that carries the weight of your actions.' It stares. 'Many consider it a burden. How do you consider it?'",
    scelte: [
      { testo_it: 'Rifiuti il patto', testo_en: 'Refuse the pact', proseguiA: 'n046' },
      { testo_it: 'Accetti il patto', testo_en: 'Accept the pact', proseguiA: 'n048' },
      { testo_it: 'Negozi condizioni diverse', testo_en: 'Negotiate different terms', proseguiA: 'n049' },
      { testo_it: 'Chiedi chi è questa figura', testo_en: 'Ask who this figure is', proseguiA: 'n050' },
    ],
  },
  n043: {
    id: 'n043',
    testo_it: "Il piano reale di Soreth: trasformare tutta la musica del mondo in musica di attesa telefonica. Non metaforicamente. Letteralmente. «Ho trascorso diecimila anni in attesa,» dice la voce dell'oscurità, «e ho concluso che la vera tortura è la musica di attesa. Se tutti la subiscono costantemente, il dolore si distribuisce equamente.» Pausa. «È un piano etico.»",
    testo_en: "Soreth's real plan: transform all the world's music into telephone hold music. Not metaphorically. Literally. 'I spent ten thousand years waiting,' says the voice of darkness, 'and concluded that the true torture is hold music. If everyone suffers it constantly, the pain is distributed equally.' Pause. 'It's an ethical plan.'",
    scelte: [
      { testo_it: 'Argomenti contro il piano', testo_en: 'Argue against the plan', proseguiA: 'n047' },
      { testo_it: 'Concordi che è etico e poi argomenti comunque', testo_en: 'Agree it sounds ethical, then argue anyway', proseguiA: 'n049' },
      { testo_it: 'Chiedi come esiste la musica di attesa in un mondo medievale', testo_en: 'Ask how hold music exists in a medieval world', proseguiA: 'n050' },
      { testo_it: 'Proponi un compromesso', testo_en: 'Propose a compromise', proseguiA: 'n051' },
    ],
  },
  n044: {
    id: 'n044',
    testo_it: "Il guardiano originale della torre è ancora qui: una figura antica che si è fusa con le pietre nel corso dei secoli. «Sono qui dal principio. Ho tenuto Soreth fuori per mille anni. Ora mi sto indebolendo.» Ti guarda con occhi di pietra. «Posso trasferire ciò che rimane della mia forza a te. Non sarà sufficiente da solo. Ma con te potrebbe bastare.»",
    testo_en: "The tower's original guardian is still here: an ancient figure fused with the stone walls over centuries. 'I've been here since the beginning. I've kept Soreth out for a thousand years. Now I'm weakening.' He looks at you with stone eyes. 'I can transfer what remains of my strength to you. It won't be enough alone. But with you it might be sufficient.'",
    scelte: [
      { testo_it: 'Accetti il trasferimento di forza', testo_en: 'Accept the strength transfer', proseguiA: 'n048' },
      { testo_it: "Chiedi se esiste un'alternativa al suo sacrificio", testo_en: 'Ask if there is an alternative to his sacrifice', proseguiA: 'n050' },
      { testo_it: "Chiedi perché non ha chiesto aiuto prima", testo_en: 'Ask why he never asked for help before', proseguiA: 'n051' },
      { testo_it: 'Accetti e prometti di completare il suo lavoro', testo_en: 'Accept and promise to finish his work', proseguiA: 'n052' },
    ],
  },
  n045: {
    id: 'n045',
    testo_it: "La porta ha sette serrature, sette simboli, e un post-it: «La combinazione è: non quello che temi, non quello che vuoi, ma quello che già sai.» Sopra, in lettere incise millenni fa: «LE ROVINE DELL'ABISSO.» La porta si apre da sola mentre ti avvicini. Dall'altra parte: odore di qualcosa che brucia dolcemente, vento attraverso pietre antiche, e luce viola.",
    testo_en: "The door has seven locks, seven symbols, and a sticky note: 'The combination is: not what you fear, not what you want, but what you already know.' Above it, carved millennia ago: 'RUINS OF THE ABYSS.' The door opens by itself as you approach. From the other side: the scent of something sweetly burning, wind through ancient stones, violet light.",
    scelte: [
      { testo_it: 'Entri con decisione', testo_en: 'Enter with conviction', proseguiA: 'n049' },
      { testo_it: 'Entri cauto cercando trappole', testo_en: 'Enter cautiously, checking for traps', proseguiA: 'n051' },
      { testo_it: 'Ti fermi sulla soglia e rifletti', testo_en: 'Pause at the threshold and reflect', proseguiA: 'n052' },
      { testo_it: 'Chiami qualcuno prima di entrare', testo_en: 'Call out to someone before entering', proseguiA: 'n053' },
    ],
  },
  n046: {
    id: 'n046',
    testo_it: "Le Rovine dell'Abisso sono, oggettivamente, bellissime. Colonne di ossidiana in archi impossibili, luce viola che filtra da crepe nella realtà, wind chime di ossa di draghi antichi. Una voce nell'aria: «Sì, lo so. Tutti si aspettano squallore. Ma il male esiste da trentamila anni. Abbiamo avuto tempo per arredare.»",
    testo_en: "The Ruins of the Abyss are, objectively, beautiful. Obsidian columns in impossible arches, violet light seeping through cracks in reality, wind chimes of ancient dragon bones. A voice in the air: 'Yes, I know. Everyone expects squalor. But evil has existed for thirty thousand years. We've had time to decorate.'",
    scelte: [
      { testo_it: 'Cerchi la fonte della voce', testo_en: 'Search for the source of the voice', proseguiA: 'n050' },
      { testo_it: "Ti avventuri più in profondità", testo_en: 'Venture deeper', proseguiA: 'n052' },
      { testo_it: 'Chiedi alla voce di Soreth', testo_en: 'Ask the voice about Soreth', proseguiA: 'n053' },
      { testo_it: 'Cerchi un punto debole nelle rovine', testo_en: 'Search for a weak point in the ruins', proseguiA: 'n054' },
    ],
  },
  n047: {
    id: 'n047',
    testo_it: "Soreth è più basso di quanto immaginassi. Non è una critica. «Lo so cosa stai pensando,» dice. «Tutti lo pensano.» Si aggiusta la corona, chiaramente troppo grande per lui. «L'ho comprata tre secoli fa pensando di crescere ancora. Non è successo.» Si ferma. «Comunque. Sei qui per fermarmi. Procediamo.»",
    testo_en: "Soreth is shorter than you imagined. Not a criticism. 'I know what you're thinking,' he says. 'Everyone thinks it.' He adjusts his crown, clearly too large for him. 'I bought it three centuries ago thinking I'd still grow. It didn't happen.' He pauses. 'Anyway. You're here to stop me. Let's proceed.'",
    scelte: [
      { testo_it: "Dici «Aspetta, prima parliamo»", testo_en: "Say 'Wait, let's talk first'", proseguiA: 'n051' },
      { testo_it: 'Attacchi immediatamente', testo_en: 'Attack immediately', proseguiA: 'n053' },
      { testo_it: 'Chiedi perché vuole distruggere tutto', testo_en: 'Ask why he wants to destroy everything', proseguiA: 'n054' },
      { testo_it: 'Chiedi della corona', testo_en: 'Ask about the crown', proseguiA: 'n055' },
    ],
  },
  n048: {
    id: 'n048',
    testo_it: "La crepa nella realtà è larga quanto due mani e profonda quanto l'eternità. Da essa emerge non oscurità ma burocrazia cosmica. Moduli volanti, sigilli, autorizzazioni. «Soreth mi usa per produrre documenti per ogni atto malvagio. Ogni male richiede un modulo in triplice copia.» Pausa. «Il male ha rallentato del 60% dall'implementazione dei nuovi moduli.»",
    testo_en: "The crack in reality is two hands wide and as deep as eternity. From it emerges not darkness but cosmic bureaucracy. Flying forms, seals, authorizations. 'Soreth uses me to produce documents for every evil act. Every evil deed requires a form in triplicate.' Pause. 'Evil has slowed by 60% since the new forms were implemented.'",
    scelte: [
      { testo_it: 'Cerchi di chiudere la crepa', testo_en: 'Try to seal the crack', proseguiA: 'n052' },
      { testo_it: 'Chiedi come funziona esattamente', testo_en: 'Ask exactly how it works', proseguiA: 'n054' },
      { testo_it: 'Proponi di aumentare ancora la burocrazia', testo_en: 'Propose increasing the bureaucracy further', proseguiA: 'n055' },
      { testo_it: 'Cerchi il modulo di annullamento del male', testo_en: 'Search for the evil cancellation form', proseguiA: 'n056' },
    ],
  },
  n049: {
    id: 'n049',
    testo_it: "Vreth, il demone-contabile che hai liberato dal pozzo, appare alle tue spalle. «Sapevo che avresti avuto bisogno di me.» Apre la sua cartella. «Ho passato tre secoli a documentare ogni violazione contrattuale di Soreth. Prove di trecentoquarantadue clausole infrante nel patto originale.» Indica la cartella. «Abbastanza per annullare qualsiasi accordo in qualsiasi corte cosmica.»",
    testo_en: "Vreth, the accountant demon you freed from the well, appears behind you. 'I knew you'd need me.' He opens his briefcase. 'I spent three centuries documenting every contractual violation by Soreth. Evidence of three hundred and forty-two breached clauses in the original pact.' He taps the briefcase. 'Enough to void any agreement in any cosmic court.'",
    scelte: [
      { testo_it: 'Usi le prove di Vreth come arma legale', testo_en: "Use Vreth's evidence as a legal weapon", proseguiA: 'n053' },
      { testo_it: 'Chiedi a Vreth cosa fare con le prove', testo_en: 'Ask Vreth what to do with the evidence', proseguiA: 'n055' },
      { testo_it: 'Chiedi a Vreth se questo risolve tutto', testo_en: 'Ask Vreth if this solves everything', proseguiA: 'n056' },
      { testo_it: 'Attacchi mentre Vreth distrae con le scartoffie', testo_en: 'Attack while Vreth distracts with paperwork', proseguiA: 'n057' },
    ],
  },
  n050: {
    id: 'n050',
    testo_it: "Il piano è su una lavagna nera, scritto con gessetto rosa. Le fasi: 1) rompere il settimo sigillo cosmico, 2) consumare le anime dei tre villaggi sacrificali, 3) musica di attesa mondiale, 4) dominare per l'eternità, 5) trovare finalmente un cappello che vada bene. Il punto cinque ha una stella e la nota: «PRIORITÀ ALTA — è anni che ci penso.»",
    testo_en: "The plan is on a blackboard, written in pink chalk. Phases: 1) break the seventh cosmic seal, 2) consume the souls of the three sacrificial villages, 3) worldwide hold music, 4) dominate for eternity, 5) finally find a hat that fits properly. Point five has a star and the note: 'HIGH PRIORITY — I've been thinking about this for years.'",
    scelte: [
      { testo_it: 'Sabotate il piano alla fase uno', testo_en: 'Sabotage the plan at phase one', proseguiA: 'n054' },
      { testo_it: 'Sabotate il piano al punto cinque', testo_en: 'Sabotage the plan at point five', proseguiA: 'n056' },
      { testo_it: 'Usate la lavagna come distrazione', testo_en: 'Use the blackboard as a distraction', proseguiA: 'n057' },
      { testo_it: 'Trovate il cappello perfetto per Soreth', testo_en: 'Find the perfect hat for Soreth', proseguiA: 'n058' },
    ],
  },
  n051: {
    id: 'n051',
    testo_it: "Il duello non avviene con armi ma nelle menti. Ti ritrovi in uno spazio bianco dove le idee hanno peso. Soreth è qui, o la sua essenza. «Mostrami,» dice, «perché il mondo merita di essere salvato.» Non è retorica. Lo sai dalla sua voce: è qualcuno che ha dimenticato la risposta e la chiede genuinamente. Il duello è questo: ricordargliela.",
    testo_en: "The duel happens not with weapons but in minds. You find yourself in a white space where ideas have weight. Soreth is here — or his essence. 'Show me,' he says, 'why the world deserves to be saved.' Not rhetorical. You know from his voice: he's someone who forgot the answer and is asking genuinely. The duel is this: reminding him.",
    scelte: [
      { testo_it: 'Mostri un ricordo reale di qualcosa di bello', testo_en: 'Show a real memory of something beautiful', proseguiA: 'n055' },
      { testo_it: "Dici «perché c'è ancora musica vera»", testo_en: "Say 'because there is still real music'", proseguiA: 'n057' },
      { testo_it: "Dici «perché persone come me continuano a combattere»", testo_en: "Say 'because people like me keep fighting'", proseguiA: 'n058' },
      { testo_it: "Dici «non lo so, ma continuerò comunque»", testo_en: "Say 'I don't know, but I'll keep going anyway'", proseguiA: 'n059' },
    ],
  },
  n052: {
    id: 'n052',
    testo_it: "Il sigillo che doveva contenere Soreth per l'eternità è spezzato da dentro e da fuori. Due entità lo tenevano: il male contenuto e il bene che lo tratteneva. Il bene si è stancato per primo. Trovi il suo frammento: una piccola luce che chiede scusa con ogni pulsazione. «Sono rimasto sveglio mille anni,» dice. «Poi mi sono addormentato un momento.»",
    testo_en: "The seal that was supposed to contain Soreth for eternity is broken from within and without. Two entities held it: the evil contained, and the good holding it. The good one tired first. You find its fragment: a small light that apologizes with every pulse. 'I stayed awake for a thousand years,' it says. 'Then I fell asleep for a moment.'",
    scelte: [
      { testo_it: 'Aiuti la luce a ricostituirsi', testo_en: 'Help the light reconstitute itself', proseguiA: 'n056' },
      { testo_it: 'Usi il frammento di luce come arma', testo_en: 'Use the light fragment as a weapon', proseguiA: 'n058' },
      { testo_it: 'Chiedi se la luce può richiudersi attorno a Soreth', testo_en: 'Ask if the light can close around Soreth again', proseguiA: 'n059' },
      { testo_it: "Cerchi un'altra soluzione invece del sigillo", testo_en: 'Search for a solution other than sealing', proseguiA: 'n060' },
    ],
  },
  n053: {
    id: 'n053',
    testo_it: "L'Abisso non è malvagio. È vecchio. «Ho visto nascere e morire mille ere,» dice la voce che risuona ovunque. «Soreth mi usa come strumento. Sono stanco di essere uno strumento.» Pausa cosmica. «Sai cosa voglio? Il silenzio. Non quello delle morti o della paura — il silenzio tranquillo. Come prima dell'alba. Puoi darmi questo?»",
    testo_en: "The Abyss is not evil. It's old. 'I've seen a thousand ages born and die,' says the voice resonating everywhere. 'Soreth has used me as a tool. I'm tired of being a tool.' Cosmic pause. 'Do you know what I want? Silence. Not the silence of death or fear — the quiet silence. Like just before dawn. Can you give me this?'",
    scelte: [
      { testo_it: "Prometti il silenzio dell'alba all'Abisso", testo_en: "Promise the Abyss the silence before dawn", proseguiA: 'n057' },
      { testo_it: "Chiedi all'Abisso di aiutarti a sconfiggere Soreth", testo_en: 'Ask the Abyss to help you defeat Soreth', proseguiA: 'n058' },
      { testo_it: "Dici «non posso prometterlo, ma posso provarci»", testo_en: "Say 'I can't promise it, but I can try'", proseguiA: 'n059' },
      { testo_it: "Ti siedi con l'Abisso in silenzio", testo_en: 'Sit with the Abyss in silence', proseguiA: 'n060' },
    ],
  },
  n054: {
    id: 'n054',
    testo_it: "Hai tre opzioni. La prima: usare il potere del sangue antico per sigillare Soreth per sempre, consumandoti nel processo. La seconda: negoziare una pace fragile che potrebbe reggersi o meno. La terza: qualcosa che non avresti mai previsto — la soluzione è ridicola, funzionerà, e nessuno la racconterà mai esattamente com'è andata. Scegli.",
    testo_en: "Three options before you. First: use the ancient blood's power to seal Soreth forever, consuming yourself in the process. Second: negotiate a fragile peace that may or may not hold. Third: something you never would have predicted — the solution is ridiculous, it will work, and no one will ever tell the story exactly as it happened. Choose.",
    scelte: [
      { testo_it: 'Prima opzione: il sigillo definitivo', testo_en: 'First option: the definitive seal', proseguiA: 'n055' },
      { testo_it: 'Seconda opzione: la pace negoziata', testo_en: 'Second option: the negotiated peace', proseguiA: 'n056' },
      { testo_it: 'Terza opzione: la soluzione ridicola', testo_en: 'Third option: the ridiculous solution', proseguiA: 'n057' },
      { testo_it: 'Improvvisi una quarta opzione', testo_en: 'Improvise a fourth option', proseguiA: 'n058' },
    ],
  },
  n055: {
    id: 'n055',
    testo_it: "Tutto porta qui. I secoli di profezie, i patti infranti, le anime consumate, i tre sindaci fantasma. Tutto converge. Il potere nel tuo sangue si risveglia completamente. Non è doloroso — è come ricordare qualcosa che sapevi da sempre. Soreth ti fronteggia. Per la prima volta sembra esitare.",
    testo_en: "Everything leads here. Centuries of prophecies, broken pacts, consumed souls, three ghost mayors in conflict — everything converges. The power in your blood fully awakens. Not painful — like remembering something you always knew. Soreth faces you. For the first time, he seems to hesitate.",
    scelte: [
      { testo_it: 'Attacchi con tutta la forza del sangue antico', testo_en: 'Attack with the full force of the ancient blood', proseguiA: 'n056' },
      { testo_it: "Offri un'ultima chance a Soreth", testo_en: 'Offer Soreth one last chance', proseguiA: 'n057' },
      { testo_it: "Invochi il potere per sigillare l'Abisso definitivamente", testo_en: 'Invoke the power to seal the Abyss for good', proseguiA: 'n058' },
      { testo_it: 'Decidi che la profezia aveva torto sul finale', testo_en: 'Decide the prophecy was wrong about the ending', proseguiA: 'n059' },
    ],
  },
  n056: {
    id: 'n056',
    testo_it: "Non è una battaglia tradizionale. Soreth e tu siete equivalenti per un momento — l'oscurità consumatrice e il sangue degli antichi — e in quel momento capisci che la vera battaglia è sempre stata una questione di scelta. Lui ha scelto di consumare. Tu hai scelto di proteggere. Le scelte hanno peso qui, dove la realtà è sottile come seta.",
    testo_en: "It's not a traditional battle. Soreth and you are equivalent for a moment — consuming darkness and ancient blood — and in that moment you understand the true battle has always been about choice. He chose to consume. You chose to protect. Choices have weight here, where reality is thin as silk.",
    scelte: [
      { testo_it: 'Credi con tutto te stesso che il bene ha più peso', testo_en: 'Believe with everything you have that good weighs more', proseguiA: 'n057' },
      { testo_it: 'Chiami le anime consumate a testimoniare', testo_en: 'Call the consumed souls to bear witness', proseguiA: 'n058' },
      { testo_it: "Usi l'umorismo come arma finale", testo_en: 'Use humor as a final weapon', proseguiA: 'n059' },
      { testo_it: 'Accetti che vincere e perdere siano la stessa cosa qui', testo_en: 'Accept that winning and losing are the same thing here', proseguiA: 'n060' },
    ],
  },
  n057: {
    id: 'n057',
    testo_it: "Il confronto finale si è concluso. Non nel modo che ti aspettavi — mai come ci si aspetta. Gravenhollow esiste ancora. Le anime consumate hanno trovato pace. Soreth è cambiato, in qualche modo. Il ragazzo con la spada ti aspetta fuori dalle rovine. I tre sindaci fantasma si stanno accordando su chi paga le spese del processo. La strega riscrive già la profezia. Cosa resta a te?",
    testo_en: "The final confrontation has ended. Not the way you expected — never the way one expects. Gravenhollow still stands. The consumed souls have found peace. Soreth is changed, somehow. The boy with the sword waits outside the ruins. The three ghost mayors are negotiating who pays the trial costs. The witch is already rewriting the prophecy. What remains for you?",
    scelte: [
      { testo_it: 'La gloria eterna come campione del mondo', testo_en: 'Eternal glory as champion of the world', proseguiA: 'n058' },
      { testo_it: "Tornare al villaggio come l'eroe per sbaglio che sei", testo_en: 'Return to the village as the accidental hero you became', proseguiA: 'n059' },
      { testo_it: "Scomparire nell'oscurità con la soddisfazione del giusto", testo_en: 'Disappear into the dark with the satisfaction of the righteous', proseguiA: 'n060' },
    ],
  },
  n058: {
    id: 'n058',
    testo_it: "Il tuo nome viene inciso nella pietra. Le canzoni parlano di te per mille anni. Il ragazzo con la spada — in realtà il guardiano del destino che aspettava l'eroe giusto — ti saluta con un inchino formale e scompare nella luce. I tre sindaci fantasma si riconciliano temporaneamente per applaudirti. Soreth, trasformato in qualcosa di meno oscuro, ti ringrazia per averlo ricordato di cosa era prima di diventare il Consumatore. La foresta smette di lamentarsi del quaranta per cento. Hai salvato il mondo. Il mondo lo sa.",
    testo_en: "Your name is carved in stone. Songs speak of you for a thousand years. The boy with the sword — actually the guardian of fate who awaited the right hero — bows formally and disappears into the light. The three ghost mayors temporarily reconcile to applaud you. Soreth, transformed into something less dark, thanks you for reminding him what he was before becoming the Devourer. The forest stops lamenting by forty percent. You saved the world. The world knows it.",
    scelte: [],
  },
  n059: {
    id: 'n059',
    testo_it: "Non è andata come da profezia, ma la profezia era comunque imprecisa sul piano della specificità. Hai sconfitto Soreth con: le prove contrattuali di un demone-contabile, la burocrazia cosmica di una crepa nella realtà, e un cappello che finalmente andava bene. Nessuno racconta la storia in modo accurato. La versione ufficiale dice che c'era un drago. Non c'era nessun drago. Il bambino con la spada ride ogni volta che la sente.",
    testo_en: "It didn't go as prophesied, but the prophecy was vague on specifics anyway. You defeated Soreth using: a demon accountant's contractual evidence, the cosmic bureaucracy of a crack in reality, and a hat that finally fit properly. No one tells the story accurately. The official version says there was a dragon. There was no dragon. The boy with the sword laughs every time he hears it.",
    scelte: [],
  },
  n060: {
    id: 'n060',
    testo_it: "Non hai vinto nel modo che conta nei libri di storia. Ma Gravenhollow esiste ancora. Le anime consumate sono libere. Il frammento di luce si è richiuso attorno a ciò che rimane di Soreth — non un sigillo perfetto, ma sufficiente per un'altra generazione. Il ragazzo ti tiene la mano mentre siedi sulle pietre delle rovine. «Hai fatto abbastanza,» dice con la sua voce troppo vecchia. Fuori, la Foresta del Lamento non si lamenta. Fa solo quel suono basso che, se ci fai attenzione, sembra quasi un respiro.",
    testo_en: "You didn't win in the way that counts in history books. But Gravenhollow still stands. The consumed souls are free. The light fragment has closed around what remains of Soreth — not a perfect seal, but sufficient for another generation. The boy holds your hand as you sit on the ruins stones. 'You did enough,' he says with his too-old voice. Outside, the Forest of Lament does not lament. It just makes that low sound that, if you listen closely, sounds almost like breathing.",
    scelte: [],
  },
}

export function getNodo(id: string): Nodo {
  return nodi[id] ?? nodi[NODO_INIZIALE]
}
