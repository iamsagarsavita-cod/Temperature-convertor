import { useState } from "react";
import bgImage from "../Components/backgroundImage.jpg";


function Temperature() {

    const [temperature, setTemperature] = useState("");
    const [fromUnit, setFromUnit] = useState("Celsius");
    const [toUnit, setToUnit] = useState("Fahrenheit");
    const [result, setResult] = useState(null);

    const convertTemp = () =>{
        if(temperature.trim() === ""){
            alert("Enter the temperature");
            return;
        }

        
    }

        const resetData = () =>{
        setTemperature("")
        setConversion("ctof")
        result(null)
    }


    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-cover bg-center " style={{ backgroundImage: `url(${bgImage})` }}>

                <div className="bg-white p-8 rounded-2xl shadow-2xl w-[500px]">

                    <div className="text-center mb-6">
                        <h1 className="text-3xl text-center font-bold text-gray-800">
                            🌡️ Temperature Converter
                        </h1>
                    </div>

                    <input
                        type="number"
                        placeholder="Enter Temperature"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 mb-5"
                        value={temperature} onChange={(e) => setTemperature(e.target.value)}
                    />

                    <div className="flex justify-between gap-4 mb-6">

                        <div className="w-1/2">
                            <label
                                htmlFor="data1"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                From
                            </label>

                            <select
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                                id="data1"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                            >
                                <option value="Celsius">Celsius</option>
                                <option value="Fahrenheit">Fahrenheit</option>
                                <option value="Kelvin">Kelvin</option>
                            </select>
                        </div>

                        <div className="w-1/2">
                            <label
                                htmlFor="data2"
                                className="block mb-2 font-semibold text-gray-700"
                            >
                                To
                            </label>

                            <select
                                id="data2"
                                className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:border-blue-500 outline-none"
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                            >
                                <option value="Celsius">Celsius</option>
                                <option value="Fahrenheit">Fahrenheit</option>
                                <option value="Kelvin">Kelvin</option>
                            </select>
                        </div>

                    </div>

                    <div className="flex gap-4">

                        <button className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
                        onClick={convertTemp}
                        >
                            Convert
                        </button>

                        <button className="w-1/2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition duration-300"
                        onClick={resetData}
                        >
                            Reset
                        </button>

                    </div>
                       

                </div>

            </div>
        </>
    );
}

export default Temperature;