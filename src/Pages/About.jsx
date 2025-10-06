import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full text-gray-800">
        <h1 className="text-4xl font-extrabold text-gray-700 text-center pb-10 sm:text-5xl md:text-6xl mx-auto">About Us</h1>

        <section className="space-y-8 text-lg leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-[tomato]">Food Recipe Tracker</span> — your personal companion in the world of food discovery.
          </p>

          <p>
            We believe that every meal tells a story. Whether you're exploring global cuisines, searching for the perfect recipe, or simply curious about what’s cooking in your region, Food Recipe Tracker is here to guide you.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">🌍 What We Do</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>🔍 Search meals by name, category, area, or even starting letter.</li>
              <li>📊 Explore global cuisines from Canadian comfort food to exotic Thai dishes.</li>
              <li>📁 Save and revisit your favorite recipes anytime.</li>
              <li>🧠 Learn about ingredients and cooking methods with ease.</li>
            </ul>
            <p className="mt-2 text-sm text-gray-500">
              Powered by real-time data from <a href="https://www.themealdb.com" target="_blank" rel="noopener noreferrer" className="text-[tomato] underline">TheMealDB</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">👨‍🍳 Why We Built This</h2>
            <p>
              We’re passionate about food — not just eating it, but understanding it. We wanted to create a space where:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Food lovers can discover new meals effortlessly.</li>
              <li>Home cooks can find inspiration without the clutter.</li>
              <li>Curious minds can learn about cultures through cuisine.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">💡 Our Vision</h2>
            <p>
              To make food exploration simple, joyful, and accessible to everyone — one recipe at a time.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
