import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: string[] =[];
  userMessage: string;

  constructor() {
    this.messages.push('Welcome to the chatbot! How can I assist you today?');
  }

  sendMessage() {
    if (this.userMessage && this.userMessage.trim() !== '') {
      const userMessage = this.userMessage.trim();
      this.messages.push(`User: ${userMessage}`);
      this.generateBotResponse(userMessage);
      this.userMessage = ''
    }
  }

  generateBotResponse(userMessage: string) {
    // Add your logic to generate appropriate bot responses based on user input
    // You can use if/else statements or switch cases to handle different user messages
    // For simplicity, we'll just provide some basic predefined responses

    let botResponse: string;

    // Handle different user inputs
    switch (userMessage.toLowerCase()) {
      case 'hi':
      case 'hello':
        botResponse = 'Hi there!';
        break;
      case 'how are you?':
        botResponse = "I'm a chatbot, so I don't have feelings, but thanks for asking!";
        break;
      case 'what is your name?':
        botResponse = "I'm a chatbot, you can call me ChatBot!";
        break;
      default:
        botResponse = "I'm sorry, I don't understand. Can you please rephrase or ask something else?";
    }

    // Add the bot response to the chat history
    setTimeout(() => {
      this.messages.push(`Bot: ${botResponse}`);
    }, 500);
  }
}
