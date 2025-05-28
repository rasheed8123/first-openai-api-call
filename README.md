# First OpenAI API Call

This script demonstrates how to make a successful call to the OpenAI API using the `gpt-3.5-turbo` model in Node.js.

## ✅ Features

- Takes user input from the console
- Uses a fixed system prompt
- Prints the assistant’s response
- Displays token usage from the API response

## 🚀 How to Run

### 1. Clone the repository

-git clone https://github.com/rasheed8123/first-openai-api-call.git

-cd first-openai-api-call

---

#### 2. Install dependencies

npm install 

---


##### 3. Add your OpenAI API key

Create a file called .env in the project root with the following content:

OPENAI_API_KEY=your_openai_key_here

---

###### 4. Run the script

node first_call.js

------

🧠 Flow of Execution
User starts the script by running node first_call.js.

The script:

Loads your OpenAI API key from a .env file.

Prompts you to enter a message in the console.

The script combines:

A fixed system prompt (e.g., “You are a helpful assistant.”)

Your user input

These messages are sent to the OpenAI API via the chat.completions.create() call.

The assistant's reply is printed to the console.

Token usage (input, output, total) is displayed.
