import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Recommendation = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [customDietaryPreference, setCustomDietaryPreference] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [customFitnessLevel, setCustomFitnessLevel] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [customStressLevel, setCustomStressLevel] = useState('');
  const [healthGoal, setHealthGoal] = useState('');
  const [customHealthGoal, setCustomHealthGoal] = useState('');
  const [sleepHours, setSleepHours] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [mentalHealth, setMentalHealth] = useState('');
  const [exerciseFrequency, setExerciseFrequency] = useState('');
  const [customExerciseFrequency, setCustomExerciseFrequency] = useState('');
  const [recommendation, setRecommendation] = useState('');

  const generateRecommendation = async () => {
    try {
      const dietaryInput = customDietaryPreference || dietaryPreferences;
      const fitnessInput = customFitnessLevel || fitnessLevel;
      const stressInput = customStressLevel || stressLevel;
      const healthGoalInput = customHealthGoal || healthGoal;
      const exerciseInput = customExerciseFrequency || exerciseFrequency;

      const userInput = {
        dietaryPreferences: dietaryInput,
        fitnessLevel: fitnessInput,
        stressLevel: stressInput,
        healthGoal: healthGoalInput,
        sleepHours,
        heartRate,
        waterIntake,
        mentalHealth,
        exerciseFrequency: exerciseInput,
      };

      const prompt = `User data: ${JSON.stringify(userInput)}. Provide a health recommendation.`;

      const apiKey = process.env.REACT_APP_GROQ_API_KEY; 
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gemma2-9b-it',
          messages: [{ role: 'user', content: prompt }],
          //max_tokens: 100,
        }),
      });

      const data = await response.json();
      const recommendationText = data?.choices?.[0]?.message?.content.trim();
      setRecommendation(recommendationText || 'Sorry, we couldn’t retrieve a complete recommendation. Please try again.');
    } catch (error) {
      console.error('Error generating recommendation:', error);
      toast.error('Error generating recommendation');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-100 to-blue-50 mt-16">
       <header
          className="h-64 flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/006/712/985/small/abstract-health-medical-science-healthcare-icon-digital-technology-science-concept-modern-innovation-treatment-medicine-on-hi-tech-future-blue-background-for-wallpaper-template-web-design-vector.jpg')`,
          }}
       >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
      
      {/* Content */}
      <div className="relative bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl text-blue-800 font-bold mb-4">Your Health & Wellness Tracker</h1>
        <p className="text-lg text-blue-700">Get personalized health recommendations based on your input.</p>
      </div>
       </header>

      {/* Features Section */}
      <section className="py-12 bg-sky-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Our Features</h2>
          <div className="flex flex-wrap -mx-4">
            {/* Feature Card 1 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
                <div className="text-blue-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.654 1.343 3 3 3s3-1.346 3-3c0-1.657-1.343-3-3-3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7m5-7v7m-10-7v7m12-11a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Personalized Plans</h3>
                <p className="text-blue-600 text-center">Receive tailored health and wellness plans based on your unique data.</p>
              </div>
            </div>
            {/* Feature Card 2 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
                <div className="text-blue-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Real-Time Feedback</h3>
                <p className="text-blue-600 text-center">Get instant insights and recommendations to stay on track with your goals.</p>
              </div>
            </div>
            {/* Feature Card 3 */}
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow">
                <div className="text-blue-500 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 text-center mb-2">Comprehensive Tracking</h3>
                <p className="text-blue-600 text-center">Monitor various health metrics seamlessly in one place.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Form Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-sky-50 rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Enter Your Health Details</h2>
            <div className="flex flex-col md:flex-row md:space-x-6">
              {/* Left Side Form Fields */}
              <div className="md:w-1/2 space-y-4">
                {/* Dietary Preferences */}
                <label className="block text-lg font-medium text-blue-700">
                  Dietary Preferences
                  <select
                    value={dietaryPreferences}
                    onChange={(e) => setDietaryPreferences(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Keto">Keto</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Low-Carb">Low-Carb</option>
                    <option value="Other">Other</option>
                  </select>
                  {dietaryPreferences === 'Other' && (
                    <input
                      type="text"
                      value={customDietaryPreference}
                      onChange={(e) => setCustomDietaryPreference(e.target.value)}
                      className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your own dietary preference"
                    />
                  )}
                </label>

                {/* Fitness Level */}
                <label className="block text-lg font-medium text-blue-700">
                  Fitness Level
                  <select
                    value={fitnessLevel}
                    onChange={(e) => setFitnessLevel(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Other">Other</option>
                  </select>
                  {fitnessLevel === 'Other' && (
                    <input
                      type="text"
                      value={customFitnessLevel}
                      onChange={(e) => setCustomFitnessLevel(e.target.value)}
                      className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your fitness level"
                    />
                  )}
                </label>

                {/* Stress Level */}
                <label className="block text-lg font-medium text-blue-700">
                  Stress Level (1-10)
                  <select
                    value={stressLevel}
                    onChange={(e) => setStressLevel(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Low">Low</option>
                    <option value="Moderate">Moderate</option>
                    <option value="High">High</option>
                    <option value="Other">Other</option>
                  </select>
                  {stressLevel === 'Other' && (
                    <input
                      type="text"
                      value={customStressLevel}
                      onChange={(e) => setCustomStressLevel(e.target.value)}
                      className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your stress level"
                    />
                  )}
                </label>

                {/* Health Goal */}
                <label className="block text-lg font-medium text-blue-700">
                  Health Goal
                  <select
                    value={healthGoal}
                    onChange={(e) => setHealthGoal(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option value="Muscle Gain">Muscle Gain</option>
                    <option value="Maintain Health">Maintain Health</option>
                    <option value="Other">Other</option>
                  </select>
                  {healthGoal === 'Other' && (
                    <input
                      type="text"
                      value={customHealthGoal}
                      onChange={(e) => setCustomHealthGoal(e.target.value)}
                      className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your health goal"
                      required
                    />
                  )}
                </label>
              </div>

              {/* Right Side Form Fields */}
              <div className="md:w-1/2 space-y-4 mt-6 md:mt-0">
                {/* Sleep Hours */}
                <label className="block text-lg font-medium text-blue-700">
                  Sleep Hours (Last Night)
                  <input
                    type="number"
                    value={sleepHours}
                    onChange={(e) => setSleepHours(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter hours of sleep"
                    required
                  />
                </label>

                {/* Heart Rate */}
                <label className="block text-lg font-medium text-blue-700">
                  Heart Rate (BPM)
                  <input
                    type="number"
                    value={heartRate}
                    onChange={(e) => setHeartRate(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your resting heart rate"
                  />
                </label>

                {/* Water Intake */}
                <label className="block text-lg font-medium text-blue-700">
                  Water Intake (Liters)
                  <input
                    type="number"
                    value={waterIntake}
                    onChange={(e) => setWaterIntake(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter water intake"
                    
                  />
                </label>

                {/* Mental Health */}
                <label className="block text-lg font-medium text-blue-700">
                  Mental Health (1-10)
                  <input
                    type="number"
                    value={mentalHealth}
                    onChange={(e) => setMentalHealth(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Rate your mental health"
                    required
                  />
                </label>

                {/* Exercise Frequency */}
                <label className="block text-lg font-medium text-blue-700">
                  Exercise Frequency
                  <select
                    value={exerciseFrequency}
                    onChange={(e) => setExerciseFrequency(e.target.value)}
                    className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="Daily">Daily</option>
                    <option value="A few times a week">A few times a week</option>
                    <option value="Rarely">Rarely</option>
                    <option value="Never">Never</option>
                    <option value="Other">Other</option>
                  </select>
                  {exerciseFrequency === 'Other' && (
                    <input
                      type="text"
                      value={customExerciseFrequency}
                      onChange={(e) => setCustomExerciseFrequency(e.target.value)}
                      className="mt-2 p-3 w-full border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your exercise frequency"
                    />
                  )}
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={generateRecommendation}
              className="w-full mt-6 p-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
            >
              Get Recommendation
            </button>

            {/* Recommendation Output */}
            {recommendation && (
              <div className="mt-6 bg-blue-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-2">Your Personalized Recommendation:</h3>
                <p className="text-blue-700">{recommendation}</p>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-800 text-blue-200 py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} HealthSync. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/recommendation" className="hover:text-white">Home</Link>
            <Link to="/recommendation" className="hover:text-white">About</Link>
            <Link to="/recommendation" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </footer>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default Recommendation;
