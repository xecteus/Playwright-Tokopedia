# 🧠 Tokopedia Automation Testing Framework

This repository contains a **custom automation testing framework** built using **Playwright**, **Cucumber (BDD)**, and **JavaScript (Node.js)** — designed for UI testing of Tokopedia’s web application.

> ⚠️ **Disclaimer:**  
> This project is developed **solely for educational and portfolio purposes.**  
> It is **not affiliated with or endorsed by Tokopedia.**  
> Redistribution, modification, or commercial use of this project is **strictly prohibited.**

---

## 🚀 Features

- **Cucumber BDD Syntax** — Human-readable `.feature` files for test scenarios.  
- **Playwright Integration** — Fast, modern browser automation.  
- **Multi-Account Authentication** — Supports multiple login storage states (`newaccount`, `useraccount`).  
- **Tag-Based Hooks** — Automatically load different browser contexts depending on scenario tags.  
- **Dynamic Element Mapping** — All page selectors managed from a single `elements.js` file.  
- **Reusable Steps** — Shared Gherkin steps for navigation, element checks, and button actions.  
- **Visual Reports** — JSON report generation ready for dashboard integration.  

---

## 🗂️ Project Structure
```
├── auth/
│ ├── newaccount.json # Playwright storage for new account
│ ├── useraccount.json # Playwright storage for user account
│ └── (excluded from commit via .gitignore)
│
├── features/
│ ├── login.feature # Login and authentication tests
│ ├── profileSettings.feature # Profile and address management tests
│
├── hooks/
│ └── hooks.js # Global Playwright + Cucumber hooks
│
├── pages/
│ ├── elements.js # All element selectors centralized here
│ ├── urls/
│ │ └── pageURLs.js # Key-to-URL mapping for Given/Then steps
│
├── steps/
│ └── globalSteps.js # Shared Cucumber step definitions
│
├── reports/
│ └── cucumber-report.json # Test execution report output
│
├── cucumber.js # Cucumber configuration
├── package.json
└── README.md
```


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/tokopedia-automation-framework.git
cd tokopedia-automation-framework
```


### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Configure Auth Storage
You need to log in once manually to generate your Playwright storage files. For example:

```
node scripts/save-login.js
```

Then complete 2FA or OTP verification manually in the launched browser.

This will save your authenticated session to:

- ```auth/newaccount.json```
- ```auth/useraccount.json```


---

## ▶️ Running Tests

### Run a Specific Feature
```
npx cucumber-js "features/profileSettings.feature"
```

### Run Only Certain Tags
```
npx cucumber-js --tags "@useraccount"
```

### Run All Features
```
npx cucumber-js
```

---

## 🧩 Example Scenarios

### ✅ Check Profile Page
```
@useraccount
Scenario: Check biodata diri elements
  Given I navigate to the "Biodata Diri URL" page
  When I click the "Biodata Diri Tab" button
  Then I expect the following elements:
    | Element Name              | Assertion |
    | Biodata Diri Nama         | Visible   |
    | Biodata Diri Email        | Visible   |
    | Biodata Diri Nomor HP     | Visible   |
```

### Check Address Page (No Address)
```
@newaccount
Scenario: Check Daftar Alamat elements (No Address)
  Given I am on "Daftar Alamat URL" page
  When I see the "Address Search Alamat" element is visible
  Then I expect the following elements:
    | Element Name                    | Assertion |
    | Address Tambah Alamat Baru      | Visible   |
    | Address Semua Alamat            | Visible   |
    | Address Dari Teman              | Visible   |
```

---

## 🧠 Key Design Concepts
| Concept                  | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| **Reusable Hooks**       | `hooks.js` dynamically loads the correct account state before each test. |
| **Centralized Elements** | All element selectors are stored in `elements.js` for easy maintenance.  |
| **Page Key Mapping**     | `pageURLs.js` maps readable names to actual URLs.                        |
| **BDD Readability**      | Scenarios written in plain English for non-technical reviewers.          |


---

## 👨‍💻 Author

**Noka Arievaldy**  
*Software QA Tester | Playwright | Cucumber | JavaScript | Python* 

📧 [arievaldynoka@gmail.com](mailto:arievaldynoka@gmail.com)  
🌐 [github.com/xecteus](https://github.com/xecteus)  
💼 [linkedin.com/in/noka-arievaldy-58202521b](https://www.linkedin.com/in/noka-arievaldy-58202521b/)
