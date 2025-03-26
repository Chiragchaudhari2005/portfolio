import React from "react";

function Table(){
    
    return(
    <>
        <div class="overflow-x-auto mt-4 flex justify-center items-center">
                    <table class="mt-4 min-w-6xl divide-y divide-gray-200">
                        <thead class="bg-[#2A313C] border-gray-600 border-2">
                        <tr>
                            <th scope="col" class="border-2 border-gray-600 px-6 py-3 text-center text-lg font-semibold text-white uppercase tracking-wider">
                            Degree
                            </th>
                            <th scope="col" class="border-2 border-gray-600 px-6 py-3 text-center text-lg font-medium text-white uppercase tracking-wider">
                            Institution
                            </th>
                            <th scope="col" class="border-2 border-gray-600 px-6 py-3 text-center text-lg font-medium text-white uppercase tracking-wider">
                            Year
                            </th>
                            <th scope="col" class="border-2 border-gray-600 px-6 py-3 text-center text-lg font-medium text-white uppercase tracking-wider">
                            Percentage/GPA
                            </th>
                        </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 text-center bg-[#2A313C] border-2 border-gray-600">
                        <tr>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">SSC</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">St Joseph's High School</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">2010-2021</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">74.40%</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">Diploma</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">Saraswati Institute of Technology</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">2022-2024</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">91.49%</div>
                            </td>
                        </tr>
                        <tr>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">BTech (Pursuing)</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">Vidyalankar Institute of Technology</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">2024-2027</div>
                            </td>
                            <td class="border-2 border-gray-600 px-6 py-4 whitespace-nowrap">
                            <div class="text-lg text-white">-</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
    </>
    );
}

export default Table;