import React from 'react';


function BookingForm() {
    return (

        <div class="flex items-center min-h-screen bg-gray-50 dark:bg-gray-900">
            <div class="container mx-auto">
                <div class="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm">
                    <div class="text-center">
                        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Boka klipptid</h1>
                        <p class="text-gray-400 dark:text-gray-400">Fyll i fälten nedan</p>
                        <p class="text-gray-400 dark:text-gray-400">Du får en bekräftelse på mail direkt!</p>
                    </div>
                    <div class="m-7">
                        <form id="form">
                            <div class="mb-6">
                                <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">För och efternamn</label>
                                <input type="text" name="name" id="name" placeholder="För och efternamn.." required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">
                                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Adress</label>
                                <input type="email" name="email" id="email" placeholder="Fyll i din email adress.." required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">

                                <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Telefonnummer</label>
                                <input type="text" name="phone" id="phone" placeholder="079 331 48 77" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">

                                <label for="date" class="text-sm text-gray-600 dark:text-gray-400">Datum</label>
                                <input type="datetime-local" name="date" id="date" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Meddelande</label>

                                <textarea rows="5" name="message" id="message" placeholder="Om du önskar en speciell frisör eller funderar över något annat, vi svarar så fort det går!" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"></textarea>
                            </div>
                            <div class="mb-6">
                                <button type="submit" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Boka tid</button>
                            </div>
                            <p class="text-base text-center text-gray-400" id="result">
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingForm;