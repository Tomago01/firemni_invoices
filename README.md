
<p align="center">
  <a href="http://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Firemní faktury – Backend API

Jednoduchá backendová aplikace v **NestJS** pro správu firemních faktur a uživatelů.  
Obsahuje REST API s dokumentací ve **Swaggeru** a propojení s **SQLite** databází.

---

##  Technologie
- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [SQLite](https://www.sqlite.org/)
- [Swagger (OpenAPI)](https://swagger.io/)

---

##  Požadavky na software
Aby aplikace fungovala, musíš mít nainstalováno:
- **Node.js** (verze 18+) ideal v22.11.0
- **npm** (součást Node.js)
- volitelně: **Git**, pokud budeš klonovat repozitář

---

## Jak aplikaci spustit lokálně

1. Naklonuj repozitář:
```bash
git clone https://github.com/Tomago01/firemni_invoices.git
cd firemni-invoices/backend
```

2. Nainstaluj závislosti:
```bash
npm install
```

3. Spusť aplikaci v režimu vývoje:
```bash
npm run start:dev
```

4. Otevři prohlížeč na:
```
http://localhost:3000
```

---

##  Dokumentace API (Swagger)

Swagger dokumentace je dostupná na endpointu:

 **http://localhost:3000/api**

V rozhraní Swaggeru lze prohlížet všechny endpointy, zkoušet je přímo posílat a vidět návratové hodnoty.

---

##  Přehled endpointů

### Faktury (`/invoices`)
| Metoda | Endpoint | Popis |
|--------|----------|-------|
| `GET` | `/invoices` | Vrátí všechny faktury |
| `POST` | `/invoices` | Vytvoří novou fakturu |
| `DELETE` | `/invoices/:id` | Smaže fakturu podle ID |
| `PATCH` | `/invoices/:id/approve` | Schválí fakturu |
| `PATCH` | `/invoices/:id/pay` | Označí fakturu jako zaplacenou |
| `GET` | `/invoices/statistics` | Vrátí statistiky platební morálky |

### Uživatelé (`/users`)
| Metoda | Endpoint | Popis |
|--------|----------|-------|
| `GET` | `/users` | Vrátí seznam uživatelů |
| `POST` | `/users` | Vytvoří nového uživatele |
| `POST` | `/auth/login` | Přihlášení uživatele (JWT) |

---

##  Databáze

Aplikace používá **SQLite** (soubor `db.sqlite` v kořenové složce backend).  
NestJS ji vytvoří automaticky při prvním spuštění aplikace.  

---

##  Autor

Tomáš Bureš – Student WA projekt 2025  

---

##  Licence

MIT
