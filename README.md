
# FAQ Backend API

This project is designed to manage Frequently Asked Questions (FAQs) for a multilingual audience. It uses Node.js with Express.js framework and MongoDB as a data store. The system supports dynamic translations of FAQs using the Google Translate API and includes Redis caching to enhance performance by storing translated FAQs. This setup ensures fast retrieval and supports high read volumes. The API allows fetching FAQs in multiple languages to cater to a diverse user base.

## Features
- **CRUD Operations**: Manage FAQs through create, read, update, and delete operations.
- **Multilingual Support**: Fetch FAQs in multiple languages, including English, Hindi, and Bengali.
- **Caching**: Uses Redis for caching translated FAQs to reduce response times and load on the server.
- **Google Translate API**: Automatic translations during FAQ creation to support multiple languages.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/its-kundan/assignment-BharatFD
   cd assignment-BharatFD
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the application:**
   ```bash
   docker-compose up
   ```

## API Usage
- **Fetch FAQs in English (default):**
  ```bash
  curl http://localhost:8000/api/faqs/
  ```
- **Fetch FAQs in Hindi:**
  ```bash
  curl http://localhost:8000/api/faqs/?lang=hi
  ```
- **Fetch FAQs in Bengali:**
  ```bash
  curl http://localhost:8000/api/faqs/?lang=bn
  ```

## Running Tests
Execute unit tests by running:
```bash
npm test
```

## Contact Information  
- **LinkedIn**: [Kundan Kumar](https://www.linkedin.com/in/its-kundan/)  
- **Portfolio**: [Kundan's Portfolio](https://kundan-cv-portfolio.vercel.app/)  
- **Email**: [kundan51kk@gmail.com](mailto:kundan51kk@gmail.com)  
- **GitHub**: [its-kundan](https://github.com/its-kundan)  

Feel free to connect with me on LinkedIn or check out my portfolio for more interesting projects and professional information. If you have any questions, suggestions, or need further assistance with the project, please email me or open an issue on GitHub.
