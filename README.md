# 🎓 ENICarthage Student Success Predictor

<b>ENICarthage Student Success Predictor</b> is a comprehensive educational tool that leverages machine learning and modern web development technologies to help engineering students track and predict their academic success. Built using the <b>MERN stack</b> (MongoDB, Express.js, React, Node.js) alongside a FastAPI service for AI-driven predictions, this application enables users to input their first-semester grades and instantly receive insightful success forecasts powered by machine learning models.

## 🚀 Features

- **Machine Learning Predictions**: AI-powered prediction service implemented with FastAPI to analyze student grades and provide success likelihood.
- **Interactive User Interface**: Responsive React frontend with dynamic components for grade input and visual feedback.
- **Data Visualization**: Charts and graphs to help students understand their academic performance.
- **API-Driven Architecture**: Seamless communication between frontend, backend, and ML prediction service.
- **Scalable and Modular Design**: Easily extendable for future enhancements and educational use cases.

## 🧠 Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Machine Learning API**: FastAPI (Python)
- **Other Tools**: Axios (for API calls), Chart.js (or similar for visualization)

## 🛠️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ENICarthage-Student-Success-Predictor.git
   cd ENICarthage-Student-Success-Predictor

2. Install Frontend
   ```bash
   cd app-web/frontend
   npm install
   npm run dev

3. Install Backend (Express + FastAPI)
      #### Express (Node.js backend):
        cd ../backend
        npm install
        npm run dev

      #### FastAPI (ML microservice):
   Make sure you have <b><i>Python</i></b> and <b><i>pip</i></b> installed.
   ```bash
   cd ../../../grades
   pip install -r requirements.txt
   uvicorn main:app --reload
Make sure your .env files in both backend services are properly configured (PORT, MONGO_URI, OPENAI_API_KEY, etc.)

## 🧪 Prediction Flow
1.User enters first-semester grades in the frontend.

2.Frontend sends a POST request to /api/predict (Express backend).

3.Express forwards the data to FastAPI.

4.FastAPI loads the ML model, runs inference, and sends back prediction and confidence score.

5.Frontend displays the results in an animated dashboard.

## 📌 Future Possibilities
If officially adopted, this app could evolve to offer:
<ul>
   <li>Digital request systems (certificates, transcripts)</li>
   
   <li>Internship and job portals</li>
   
   <li>Course registration & grade dashboards</li>
   
   <li>AI-based academic risk detection</li>
   
   <li>Chatbot assistants for students and staff</li>
</ul>


👤 Author
Built with passion by Hazem Barkallah — engineering student, full-stack developer, and AI enthusiast.

📫 [barkhazem@gmail.com](barkhazem@gmail.com) | [LinkedIn](https://www.linkedin.com/in/hazem-barkallah-a682b4338/)

