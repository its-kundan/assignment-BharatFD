# FAQ Backend API

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/its-kundan/assignment-BharatFD
   cd assignment-BharatFD
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   docker-compose up
   ```

## API Usage
- Fetch FAQs in English (default):
  ```bash
  curl http://localhost:8000/api/faqs/
  ```
- Fetch FAQs in Hindi:
  ```bash
  curl http://localhost:8000/api/faqs/?lang=hi
  ```
- Fetch FAQs in Bengali:
  ```bash
  curl http://localhost:8000/api/faqs/?lang=bn
  ```

## Running Tests
```bash
npm test