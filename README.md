# Recurring Date Picker Component

This is a reusable and highly customizable recurring date picker component built with React. It allows users to select complex recurrence rules, similar to the functionality found in modern calendar applications like Google Calendar or TickTick.

### Features

* **Multiple Frequencies:** Supports Daily, Weekly, Monthly, and Yearly recurrence.
* **Custom Intervals:** Set rules to repeat every 'X' days, weeks, months, or years.
* **Weekly Selection:** Easily select specific days of the week for weekly schedules.
* **Advanced Monthly Patterns:** Supports both specific days of the month (e.g., "on the 15th") and pattern-based rules (e.g., "on the second Tuesday").
* **Date Range:** Select a start date and an optional end date to constrain the recurrence.
* **Live Preview:** An interactive mini-calendar provides immediate visual feedback on the selected dates.
* **Dynamic Summary:** A human-readable summary of the current rule is generated in real-time.

### Tech Stack

* **Framework:** [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Date Manipulation:** [date-fns](https://date-fns.org/)
* **Testing:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
* **Icons:** [Lucide React](https://lucide.dev/)

### Getting Started

To run this project on your local machine, please follow the steps below.

#### Prerequisites

You must have **Node.js** (version 18 or later) and **npm** installed on your computer. You can download them from [nodejs.org](https://nodejs.org/).

#### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ksaha-055/Recurring-_Date_Picker.git](https://github.com/ksaha-055/Recurring-_Date_Picker.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Recurring-_Date_Picker
    ```

3.  **Install dependencies:**
    This command will download all the required packages from npm and create the `node_modules` folder.
    ```bash
    npm install
    ```

4.  **Run the development server:**
    This will start the application on a local server, usually at `http://localhost:5173`.
    ```bash
    npm run dev
    ```

### Testing

The project includes a comprehensive suite of unit and integration tests to ensure reliability.

To run the tests, use the following command:
```bash
npm run test
