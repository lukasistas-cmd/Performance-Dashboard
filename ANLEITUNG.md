# 🚀 Performance Dashboard - Schritt-für-Schritt Anleitung

## **Schritt 1: Dateien herunterladen** ✅

Du hast gerade eine ZIP-Datei oder Ordner mit diesen Dateien:

```
performance-dashboard/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── .gitignore
└── src/
    ├── App.jsx
    ├── main.jsx
    └── index.css
```

**Wichtig:** Alle Dateien **müssen** in dieser Struktur sein!

---

## **Schritt 2: GitHub löschen (cleanup)**

Dein aktuelles Repository auf GitHub ist noch "kaputt". Wir machen einen Fresh Start:

1. Gehe zu: https://github.com/lukasistas-cmd/Performance-Dashboard
2. Klick auf **Settings** (oben rechts)
3. Scroll runter zu **"Danger Zone"**
4. Klick auf **"Delete this repository"**
5. Tippe den Namen ein und bestätige

---

## **Schritt 3: Neues Repository erstellen**

1. Gehe zu: https://github.com/new
2. **Repository name:** `Performance-Dashboard`
3. **Public** auswählen
4. Klick **"Create repository"**

---

## **Schritt 4: Mit GitHub Desktop hochladen**

### **Option A: Via GitHub Desktop (einfacher für Anfänger)**

1. **GitHub Desktop öffnen**
2. Klick auf **"File"** → **"Clone repository"**
3. Wähle dein GitHub Repository aus der Liste
4. Wähle einen **lokalen Ordner** aus (z.B. `Documents/performance-dashboard`)
5. Klick **"Clone"**

Jetzt hast du einen lokalen Ordner mit dem leeren Repository.

6. **Alle Dateien**, die du heruntergeladen hast, **in diesen Ordner kopieren**
   - index.html
   - package.json
   - vite.config.js
   - etc.
   - **Die `src/` Ordner auch kopieren!**

7. Zurück zu **GitHub Desktop**:
   - Links solltest du unter "Changes" nun eine Liste mit allen Dateien sehen
   - Unten: Gib eine Commit Message ein: `Initial commit - Dashboard ready`
   - Klick **"Commit to main"**

8. Oben rechts: Klick **"Push origin"** (deine Dateien gehen zu GitHub hoch)

9. ✅ Fertig! Gehe zu deinem Repository: https://github.com/lukasistas-cmd/Performance-Dashboard
   - Du solltest nun alle Dateien sehen!

---

### **Option B: Via Drag & Drop (noch einfacher)**

1. Gehe zu: https://github.com/lukasistas-cmd/Performance-Dashboard
2. Klick auf **"Add file"** → **"Upload files"**
3. **Alle Dateien** (außer dem `src/` Ordner) hier reinziehen
4. Scroll runten → **"Commit changes"**

5. Dann nochmal:
   - Klick **"Add file"** → **"Create new file"**
   - Pfad: `src/App.jsx`
   - Inhalt: Copy-paste aus der heruntergeladenen `src/App.jsx`
   - Commit

(Wiederholen für `src/main.jsx` und `src/index.css`)

---

## **Schritt 5: Auf Vercel deployen**

Sobald deine Dateien auf GitHub sind:

1. Gehe zu: https://vercel.com
2. Melde dich an (oder erstelle Account mit GitHub)
3. Klick **"Add New..."** → **"Project"**
4. Wähle **"Import Git Repository"**
5. Dein **Performance-Dashboard** sollte in der Liste sein
6. Klick drauf und dann **"Import"**
7. Vercel erkennt automatisch:
   - Framework: **Vite** ✅
   - Build Command: **npm run build** ✅
8. Klick **"Deploy"**
9. Warte ~2-3 Minuten...
10. ✅ **FERTIG!** Du bekommst eine URL wie: `performance-dashboard-xyz.vercel.app`

---

## **Schritt 6: Dashboard testen**

Gehe zu deiner Vercel URL und teste:

**Admin Login:**
- Email: `admin@dashboard.com`
- Passwort: `admin123`

**Kunde Login:**
- Email: `kunde1@example.com`
- Passwort: `pass123`

---

## **Wenn was schiefgeht:**

### "Vercel zeigt "Build fehlgeschlagen""
→ Schau in die Vercel Logs
→ Meist: Dateien sind nicht richtig hochgeladen
→ Überprüfe auf GitHub, dass ALLE Dateien im Root sind!

### "GitHub zeigt meine Dateien nicht"
→ Warte ein paar Sekunden und refresh
→ Oder nutze GitHub Desktop (zuverlässiger)

### "Vercel findet mein Repository nicht"
→ Repository muss auf GitHub sein
→ Repository muss **public** sein
→ Vercel muss mit deinem GitHub Account verbunden sein

---

## 🎉 Fertig!

Sobald Vercel deployed ist, hast du:
- ✅ Ein Live-Dashboard
- ✅ Admin Panel zum Daten einpflegen
- ✅ Kunden Logins zum Dashboard anschauen
- ✅ Professionelles Dunkelblau-Grün Design

Deine Kunden kriegen einfach den Link + Login-Daten! 🚀

---

**Noch Fragen?** Schreib mir! 💪
