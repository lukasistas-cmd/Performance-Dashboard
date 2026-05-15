# 📊 Performance Dashboard für Kunden

Ein **professionelles, auf Dunkelblau-Grün ausgelegtes Dashboard** für deine Kunden, um ihre Marketing-, Webdesign- und Recruiting-Performance zu sehen.

---

## 🎯 Features

✅ **Login-System** - Admin + Customer Login
✅ **Admin Panel** - Daten für bis zu 4+ Kunden verwalten
✅ **Customer Dashboard** - Schöne Visualisierung der Performance
✅ **Responsive Design** - Funktioniert auf Desktop, Tablet, Handy
✅ **Dunkelblau-Grün Branding** - Modern und professionell
✅ **Charts & Graphen** - Liniendiagramme, Kreisdiagramme, KPI-Cards
✅ **Wöchentliche Updates** - Daten jede Woche einfach updaten

---

## 🚀 Quick Start

### Option 1: Local Development (zum Testen)

```bash
# 1. Node.js installieren (falls noch nicht vorhanden)
# Gehe zu: https://nodejs.org/ → Download LTS

# 2. Projekt-Ordner öffnen und Dependencies installieren
npm install

# 3. Lokalen Server starten
npm run dev

# 4. Browser öffnet sich automatisch → http://localhost:5173
```

**Test-Logins:**
- Admin: `admin@dashboard.com` / `admin123`
- Kunde: `kunde1@example.com` / `pass123`

---

### Option 2: Auf Vercel Deployen (empfohlen!)

Schau in die `DEPLOYMENT.md` Datei für detaillierte Anleitung.

**Kurz:** 
1. Code auf GitHub hochladen
2. Vercel verbinden
3. Deploy klicken
4. Live URL bekommen → Fertig! ✅

---

## 📁 Projekt-Struktur

```
performance-dashboard/
├── src/
│   ├── Dashboard.jsx      # Haupt-Komponente
│   ├── main.jsx          # React Entry Point
│   └── index.css         # Tailwind Styles
├── index.html            # HTML Template
├── vite.config.js        # Vite Konfiguration
├── tailwind.config.js    # Tailwind Konfiguration
├── package.json          # Dependencies
└── DEPLOYMENT.md         # Deployment Guide
```

---

## 🎨 Anpassen & Branding

### Farben später ändern:
- **Dunkelblau:** `from-slate-900`, `from-slate-700`
- **Grün:** `from-teal-600`, `from-teal-700`
- Diese in der `Dashboard.jsx` suchen und anpassen

### Logo einfügen:
In `src/Dashboard.jsx` suche nach "LOGO HERE" und füge dein Logo als `<img>` ein.

---

## 👥 Kunden-Management

### Im Admin Panel (admin@dashboard.com):
1. Kunde auswählen
2. "Bearbeiten" klicken
3. Für jeden Service (Webdesign, Marketing, Recruiting) eingeben:
   - **Besucher:** Wie viele Leute die Seite besucht haben
   - **Conversions:** Wie viele sich gemeldet/gekauft haben
   - **Budget:** Wie viel ausgegeben wurde (in €)
4. "Speichern" klicken
5. Kunde sieht sofort die neuen Zahlen!

---

## 📊 Metriken

Folgende Daten können pro Service eingetragen werden:

| Service | Metric | Bedeutung |
|---------|--------|-----------|
| **Webdesign** | Besucher | Seitenaufrufe |
| | Conversions | Kontaktanfragen |
| | Budget | Kosten für Ads |
| **Marketing** | Besucher | Clicks auf Ads |
| | Conversions | Tatsächliche Käufe/Anfragen |
| | Budget | Ad-Spend |
| **Recruiting** | Besucher | Clicks auf Stellenanzeige |
| | Conversions | Bewerbungen |
| | Budget | Kosten für Job-Posting |

---

## 🔐 Test-Daten

**Admin-Account:**
```
E-Mail: admin@dashboard.com
Passwort: admin123
```

**Kunden (zum Testen):**
```
Kunde 1: kunde1@example.com / pass123
Kunde 2: kunde2@example.com / pass123
Kunde 3: kunde3@example.com / pass123
Kunde 4: kunde4@example.com / pass123
```

---

## 🔧 Technologie-Stack

- **React 18** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Recharts** - Diagramme & Charts
- **Lucide React** - Icons

---

## 📈 Später: Automatisierung

Wenn du später die Daten automatisch ziehen möchtest (Google Analytics, Facebook Ads etc.):

1. Firebase Realtime Database hinzufügen (kostenlos)
2. API-Integrationen schreiben (Google Analytics, Facebook Ads API)
3. Automatische Datensynchronisierung

Das baue ich dir dann, wenn du es brauchst! 🚀

---

## ❓ Häufige Fragen

**F: Kann ich mehr als 4 Kunden hinzufügen?**
A: Ja! In `Dashboard.jsx` die `initialData.customers` Array erweitern.

**F: Bleiben die Daten speichern, wenn ich die Seite neu lade?**
A: Derzeit nicht (nur Lokal). Mit Firebase könnten wir das ändern.

**F: Kann ich das Design anpassen?**
A: Ja! Alle Farben sind in `tailwind.config.js` konfigurierbar.

**F: Wie gebe ich Kunden den Login?**
A: Schreib ihnen:
```
Dashboard-URL: https://dein-dashboard-xyz.vercel.app
E-Mail: kunde1@example.com
Passwort: pass123
```

---

## 📞 Support

Fragen oder Probleme? Schreib mir hier! 🚀

---

**Viel Spaß mit deinem Dashboard!** 🎉
