# 🚀 React Autocomplete Component

Un progetto React + TypeScript realizzato con Vite e SCSS che implementa un componente di **Autocomplete** moderno, performante e accessibile, **senza l'uso di librerie esterne**.

L'app consente la ricerca di prodotti tramite un campo di input che offre suggerimenti in tempo reale. I dati provengono da una vera API pubblica: [dummyjson.com/products](https://dummyjson.com/products).

---

## 📦 Stack Tecnologico

- ⚛️ **React 19**
- 💡 **TypeScript**
- ⚡ **Vite**
- 🎨 **SCSS (Sass)**
- 🧠 **ESLint** per analisi statica del codice

---

🔍 Funzionalità
✨ Autocomplete dinamico con evidenziazione del testo

⌨️ Supporto tastiera (freccia su/giù + invio + esc)

⏳ Debounce per evitare chiamate API eccessive

🟢 Messaggio di caricamento e nessun risultato trovato

📦 Visualizzazione dei prodotti selezionati con:

Immagine (thumbnail)

Titolo

Prezzo

Brand

Categoria

Descrizione

---


🧪 Script disponibili
npm run dev → Avvia il server in sviluppo

npm run build → Compila il progetto per la produzione

npm run preview → Visualizza la build in locale

npm run lint → Analizza il codice con ESLint

---

🌐 API usata
https://dummyjson.com/products

Restituisce una lista di oggetti Product con title, description, price, brand, category, thumbnail, ecc.

---

## 🧰 Come installare ed eseguire il progetto

Per eseguire il progetto in locale:

```bash
# Clona il repository
git clone https://github.com/tuo-username/react-autocomplete.git

# Entra nella cartella del progetto
cd react-autocomplete

# Installa le dipendenze
npm install
# oppure
# yarn

# Avvia il server di sviluppo
npm run dev
# oppure
# yarn dev
