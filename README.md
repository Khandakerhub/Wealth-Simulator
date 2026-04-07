This is a professional `README.md` file designed for your project. It explains what the calculator does, how the math works (including your specific "Net Profit" logic), and how to set it up.

You can save this text as a file named `README.md` in the same folder as your HTML file.

---

# 📈 Wealth Simulator

A high-precision, responsive web tool designed to simulate long-term investment growth. Unlike standard calculators, this tool focuses on **Net Performance**, tracking the difference between your out-of-pocket contributions and your final portfolio value.

## ✨ Key Features

* **Dual Frequency Logic:** Independently set your contribution schedule (Weekly/Monthly) and the asset's reinvestment schedule (Weekly/Monthly/Quarterly).
* **Total Return Support:** Accounts for both **Dividend Yield** and **Capital Appreciation (Stock Growth)**.
* **Negative Growth Handling:** Correctily simulates "compounding losses" if stock price drops exceed dividend yields.
* **Performance Metrics:** Real-time calculation of Total Contributions, Net Profit/Loss, and Annualized/Monthly net gains.
* **Mobile First:** A fully responsive, "Zero-Scroll" interface optimized for iOS and Android devices.

## 🧮 How the Math Works

The simulator uses the **Future Value of an Annuity** formula combined with standard compound interest:

$$A = P \left(1 + \frac{r}{n}\right)^{nt} + PMT_{adj} \times \frac{\left(1 + \frac{r}{n}\right)^{nt} - 1}{\frac{r}{n}}$$

### The "Net" Logic
The calculator defines "Income" as your profit over time, not just the dividend payout:
1.  **Total Invested:** $Initial + (Recurring \times Frequency \times Years)$
2.  **Net Profit:** $Final\ Portfolio - Total\ Invested$
3.  **Monthly Net:** $Net\ Profit \div (Years \times 12)$

## 🚀 Quick Start

1.  **Download:** Save the provided code as `index.html`.
2.  **Launch:** Open the file in any modern web browser (Chrome, Safari, Firefox, Edge).
3.  **Simulate:** * Enter your **Initial Investment**.
    * Set your **Recurring Additions** and how often you make them.
    * Input the expected **Dividend Yield** and **Stock Growth**.
    * Select the **Reinvest Frequency** (how often the asset compounds).

## 📱 Mobile Optimization

* **Input Modes:** Automatically triggers the numeric/decimal keypad on mobile devices.
* **Dynamic Viewport:** Uses `dvh` units to prevent the layout from breaking when browser toolbars appear.
* **Touch Friendly:** Large hit targets and 16px font sizes to prevent automatic browser zooming on inputs.

## 🛠️ Technology Stack

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox, CSS Grid, and Media Queries for responsiveness.
* **JavaScript (ES6):** Real-time calculation engine and `Intl.NumberFormat` for currency precision.

---

### 📝 License
This project is open-source and free to use for personal financial planning.
