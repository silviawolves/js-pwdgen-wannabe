const nomeUtente = prompt('Qual è il tuo nome?');
const cognomeUtente = prompt('Qual è il tuo cognome?');
const coloreUtente = prompt('Qual è il tuo colore preferito?');

const benvenutoUtente = document.getElementById('benvenuto-utente');
benvenutoUtente.innerHTML = nomeUtente;

const passwordGenerata = document.getElementById('password-generata');
passwordGenerata.innerHTML = `${nomeUtente}${cognomeUtente}${coloreUtente}22`; 

/* Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito22 */