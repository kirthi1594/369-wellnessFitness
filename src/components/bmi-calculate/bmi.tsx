
import { useState } from 'react';
import ButtonLink from '../common/button';

const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [bmi, setBmi] = useState<string | null>(null);
    const [category, setCategory] = useState('');
    const [message, setMessage] = useState('');

    const calculateBmi = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const weightInKg = Number(weight);
        const heightInMeters = Number(height) / 100;

        if (isNaN(weightInKg) || isNaN(heightInMeters) || heightInMeters <= 0) {
            setMessage('Please enter valid weight and height values.');
            return;
        }

        const bmiValue = weightInKg / (heightInMeters * heightInMeters);
        setBmi(bmiValue.toFixed(2));

        if (bmiValue < 18.5) {
            setCategory('Underweight');
            setMessage('Focus on a balanced diet and consult with a healthcare provider for the best approach.');
        } else if (bmiValue < 24.9) {
            setCategory('Normal weight');
            setMessage('Great job! Keep maintaining your healthy lifestyle!');
        } else if (bmiValue < 29.9) {
            setCategory('Overweight');
            setMessage('Consider incorporating more physical activity into your routine. You’ve got this!');
        } else {
            setCategory('Obesity');
            setMessage('It’s a great time to make positive changes. Every step counts towards a healthier you!');
        }
    };

    return (
        <div className="bg-bmi-image bg-cover bg-top bg-fixed">
            <h1 className='text-white bg-primary font-serif text-center text-xl'>BMI Calculator</h1>
            <div className="mx-auto p-6 rounded-lg shadow-md mb-5 h-fit w-auto object-left-bottom flex items-center justify-center">
                <form className="space-y-4 flex flex-col md:flex-row justify-evenly bg-gray-200 gap-5 items-end bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-10 m-5 rounded-md w-full max-w-4xl" onSubmit={calculateBmi}>
                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="flex flex-col">
                            <label className="block mb-3 text-white text-xl">Weight (kg)</label>
                            <input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none hide-spin"
                                placeholder="Enter your weight"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block mb-3 text-white text-xl">Height (cm)</label>
                            <input
                                type="number"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none hide-spin"
                                placeholder="Enter your height"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 w-full">
                        <div className="flex flex-col">
                            <label className="block mb-3 text-white text-xl">Age</label>
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none hide-spin"
                                placeholder="Enter your age"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="block mb-3 text-white text-xl">Gender</label>
                            <select
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none"
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="bg-white text-primary py-2 px-4 rounded-md font-bold hover:bg-primary hover:text-white">
                        Calculate
                    </button>
                </form>
            </div>

            {bmi && (
                <div className="relative mb-6 p-4 border rounded bg-white max-w-md m-auto">
                    <button
                        className="absolute top-2 right-2 text-gray-400 text-xl hover:text-gray-600"
                        onClick={() => setBmi(null)}
                    >
                        &times;
                    </button>
                    <h2 className="text-lg font-bold">Your BMI: {bmi}</h2>
                    <h3 className="text-md">{category}</h3>
                    <p>{message}</p>
                </div>

            )}
        </div>
    );
};

export default BmiCalculator;
