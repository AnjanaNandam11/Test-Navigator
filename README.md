# 🚀 TestNavigator

**Automate. Validate. Accelerate.**

TestNavigator is a VBScript-based automation framework built on **Micro Focus UFT (Unified Functional Testing)**. It enables QA engineers to design, execute, and manage automated test cases for web, desktop, and API applications efficiently — all with a focus on reliability, maintainability, and speed.

---

## 🧭 Overview

This project provides a reusable **VBScript test automation** suite that integrates with **UFT/QTP** to execute functional and regression tests. It streamlines test execution through parameterization, modular scripting, and result tracking, helping teams ensure consistent quality across builds.

### 🎯 Objectives
- Automate repetitive test cases for faster regression cycles
- Improve accuracy and reduce manual testing errors
- Enhance maintainability with modular VBScript architecture
- Support data-driven testing with parameterized input

---

## 🧰 Tech Stack & Tools

| Component | Description |
|-----------|-------------|
| **Language** | VBScript |
| **Testing Tool** | Micro Focus UFT / QTP |
| **Automation Type** | Functional & Regression Testing |
| **Reporting** | UFT HTML and XML reports |
| **Data Handling** | Excel parameterization / External data tables |
| **Execution** | UFT Test Batch Runner / Scheduler |

---

## ⚙️ Project Structure

UFT_Automation/
│
├── UFT_Automation.vbs # Core VBScript automation file
├── Data/ # Input data files (Excel/CSV)
├── Reports/ # UFT-generated reports
└── README.md # Project documentation

yaml
Copy code

---

## 🧪 Key Features

- ✅ **Scripted Automation** – Drive UFT test cases through VBScript
- 🔄 **Data-Driven Testing** – Fetch input dynamically from Excel sheets
- 🧱 **Modular Design** – Reusable function libraries for common workflows
- 📊 **Automated Reports** – UFT-native HTML/XML execution reports
- 🕒 **Scheduled Execution** – Supports batch runs and CI/CD integration

---

## 🚀 Getting Started

### Prerequisites
- Micro Focus UFT (12.x or above)
- Windows OS
- Excel (for data-driven tests)

### Steps to Run
1. Clone this repository
2. Open **UFT_Automation.vbs** in UFT or Notepad
3. Update test paths and data sources as needed
4. Execute via UFT or Windows Script Host:
   ```bash
   cscript UFT_Automation.vbs
View reports in the Reports folder or UFT’s Results Viewer

# 📁 Example Test Flow
Launch Application

Navigate to Test Module

Perform Data-Driven Actions

Validate UI and Business Rules

Capture Results and Generate Reports

# 📈 Roadmap
 Integrate with Jenkins for CI/CD pipelines

 Add dynamic reporting dashboard

 Expand test coverage with API modules
