import React from "react";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 border-b border-red-600">
        <h1 className="text-2xl font-bold text-red-600">Tricia's Bar & Lounge</h1>
        <div className="space-x-4">
          <a href="#menu" className="hover:text-red-500">Menu</a>
          <a href="#dj" className="hover:text-red-500">DJ Lineup</a>
          <a href="#events" className="hover:text-red-500">Events</a>
          <a href="#beerpong" className="hover:text-red-500">Beer Pong</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-[80vh] flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-5xl font-extrabold text-red-600 mb-4">Where Nights Come Alive</h2>
        <p className="max-w-xl text-gray-300">Experience the best vibes, music, and drinks in town. Join us every week for unforgettable nights and epic beer pong battles.</p>
      </section>

      {/* Menu Section */}
      <section id="menu" className="p-10 bg-zinc-900">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Menu</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Drinks</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Beer - ₱100</li>
              <li>Cocktails - ₱250</li>
              <li>Whiskey - ₱300</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Food</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Nachos - ₱180</li>
              <li>Chicken Wings - ₱220</li>
              <li>Fries - ₱120</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DJ Lineup */}
      <section id="dj" className="p-10">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Today's DJ Lineup</h3>
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <p className="text-lg">DJ Nightfire - 9:00 PM</p>
          <p className="text-lg">DJ Pulse - 11:00 PM</p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="p-10 bg-zinc-900">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Upcoming Events</h3>
        <ul className="space-y-4">
          <li className="border-l-4 border-red-600 pl-4">Friday Party Night</li>
          <li className="border-l-4 border-red-600 pl-4">Ladies Night - Free Drinks</li>
          <li className="border-l-4 border-red-600 pl-4">Live Band Saturday</li>
        </ul>
      </section>

      {/* Beer Pong Section */}
      <section id="beerpong" className="p-10">
        <h3 className="text-3xl font-bold text-red-600 mb-6">Weekly Beer Pong Champions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {["Team Alpha", "Team Blaze", "Team Vortex"].map((team, i) => (
            <div key={i} className="bg-zinc-900 p-6 rounded-2xl text-center shadow-lg">
              <h4 className="text-xl font-bold">{team}</h4>
              <p className="text-gray-400">Week {i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="p-5 text-center border-t border-red-600">
        <p className="text-gray-400">© 2026 Tricia's Bar & Lounge. All rights reserved.</p>
      </footer>
    </div>
  );
}
