import React from 'react'

function Score() {
    const [score, setScore] = React.useState(0);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <div className="bg-white p-8 rounded-2xl shadow-green-500 text-center w-[350px]">

            <h2 className="text-2xl font-bold text-gray-700 mb-2">Cricket Score</h2>

            <p className="hidden text-gray-600 mb-4">State Example Using <span className="font-bold"><br></br>useState()</span></p>
            <p className="text-7xl font-extrabold text-blue-600 mb-8">{score}</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded hover:shadow-lg transition duration-300 shadow-[0_0_10px_0_rgba(0,0,0,1)]" onClick={() => setScore(score + 1)}>
                Increment
            </button>
        </div>
    </div>
  )
}

export default Score