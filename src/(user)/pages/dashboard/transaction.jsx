import React from 'react'




const Transaction = () => {
    const spending = [
        {
          title: "domain",
          cost: "250",
        },
        {
          title: "hosting",
          cost: "125",
        },
        {
          title: "advertising",
          cost: "125",
        },
        {
            title: "sales",
            cost: "125",
          },
          {
            title: "hiring",
            cost: "125",
          },
          {
            title: "intern",
            cost: "125",
          },
          
      ]
      
  return (
    <div>
      <div class="bg-white">
  <div class=" overflow-x-auto">
    <div class=" min-w-full inline-block align-middle">
      <div class="border rounded-lg shadow overflow-hidden  ">
        <table class="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr class="divide-x divide-gray-200 ">
              <th scope="col" class="px-6 pr-36 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Spending title</th>
              
              <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Cost</th>
              <th scope="col" class="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 ">
          {spending.map((spending, index) => (
            <tr key={index}>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{spending.title}</td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">${spending.cost}</td>
              <td class="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ">edit</button>
              </td>
            </tr>
            ))}

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Transaction