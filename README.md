# CCC (Country Capital Currency)

Welcome to the CCC (Country Capital Currency), a simple interactive CLI program that provides information about countries, including what they are famous for, their capitals, and currencies.

## Features

- Welcome Message: A greeting message when the program starts.

- Country Information: Allows users to input a country name and receive information about what the country is famous for.

- Detailed Information: Users can request detailed information (capital and currency) for any country.

- Interactive Navigation: Users can choose to continue exploring or exit the program at any point.

## Requirements

- Node.js (v10.0.0 or later)

  [Install Node.js](https://nodejs.org/en/download/package-manager)

- readline-sync package

- chalk package

## Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/KatanaSword/country-capital-currency.git
   cd country-capital-currency
   ```

2. **Install the dependencies:**

   ```
   npm install readline-sync chalk
   ```

## Usage

1. **Run the program using Node.js:**

   ```
   node app.js
   ```

## Program Flow

1. **Greeting:**

- Displays a welcome message.

- Prompts the user to enter their country name.

2. **Country Information:**

- If the entered country is found in the database, it displays what the country is famous for.

- If not found, it prompts the user to enter the country name again.

3. **Continue or Exit:**

- After displaying information about the country, the user can choose to either:

  - Learn about other countries (by entering 'y').

  - Exit the program (by entering 'n').

1. **Detailed Information:**

- If the user chooses to continue, they can enter the name of another country.

- The program then displays the country's name, capital, and currency.

5. **Exit:**

- Displays a goodbye message and terminates the program.

## Example

```
🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
Hello and Welcome to the CCC my friend
🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
Please enter your country name: Japan
Japan - Technology, Sushi
Do you want to know about other countries [y/n]: y
Enter name of the country you want to know about: France
Country:  France
Capital:  Paris
Currency:  Euro
Do you want to know about other countries [y/n]: n
💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮
Thank's for using CCC, Have a great day! Goodbye!
💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮💮
```
