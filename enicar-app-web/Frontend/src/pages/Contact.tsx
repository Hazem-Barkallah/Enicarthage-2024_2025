export default function Contact(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-2">We would love to hear from you!</p>
            <form className="w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                    <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                    <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                    <textarea id="message" rows={4} className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200">Send Message</button>
            </form>
        </div>
    );
}