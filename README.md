# 🧑‍💻 Projektarbete – Java & UX

Detta projekt är en del av kursen **Frontendutveckling med ramverk**, där vi fokuserar på att kombinera tekniker inom React, TypeScript och UX/UI.

## 🚀 Teknologier
- React
- TypeScript
- Vite
- Keen Slider
- CSS Modules

## 📁 Projektstruktur

app/
├── components/
│   └── buttons/
│   └── cards/
├── history/
├── challenges/

## 🛠 Installation

git clone https://github.com/mpkhonde/projektarbete-java-ux.git
cd projektarbete-java-ux
npm install
npm run dev

## 📦 Deployment

Du kan enkelt publicera projektet med GitHub Pages eller Vercel/Netlify.

---

### ✨ TODO
- [ ] Finslipa design
- [ ] Lägg till fler interaktiva komponenter
- [ ] Sluttesta med användare


# 🧑‍💻 Projektarbete – Java & UX

Detta projekt är en del av kursen **Frontendutveckling med ramverk**, där vi fokuserar på att kombinera tekniker inom React, TypeScript och UX/UI.

## 🚀 Teknologier
- React
- TypeScript
- Vite
- Keen Slider
- CSS Modules

## 📁 Projektstruktur

app/
├── components/
│   └── buttons/
│   └── cards/
├── history/
├── challenges/

## 🛠 Installation

git clone https://github.com/mpkhonde/projektarbete-java-ux.git
cd projektarbete-java-ux
npm install
npm run dev

## 📦 Deployment

Du kan enkelt publicera projektet med GitHub Pages eller Vercel/Netlify.

---

### ✨ TODO
- [ ] Finslipa design
- [ ] Lägg till fler interaktiva komponenter
- [ ] Sluttesta med användare

/--------------------------------------------------------------------------------------------------------/
# Balanza – Komplettering: Funktionell feature

## Feature: Lägg till aktiviteter per dag

Den här kompletteringen är framtagen enligt feedback från kursansvarig och inkluderar en egenutvecklad funktion som:

- Uppfyller funktionalitetskravet
- Använder `useState` och `interface` i TypeScript
- Har minst 3 commits
- Är individuellt genomförd
- Är relaterad till veckodagar i projektet

---

## Funktion

Användaren kan:
1. Klicka på en veckodag (t.ex. "Onsdag")
2. Skriva in en aktivitet i ett inputfält
3. Klicka "Lägg till"
4. Se aktiviteter visas under rätt dag

---

## Teknik

- React + TypeScript
- `useState` för hantering av dag, input och lista
- `interface DayActivity` för typstruktur
- Komponenten `DayActivity` är importerad i `Challenges.tsx` utan att påverka övrig kod

---

## Kodexempel (interface)

```ts
interface DayActivity {
  day: string;
  activities: string[];
}
