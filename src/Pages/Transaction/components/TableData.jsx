import React from 'react'

function TableData({ data, activeTab, searchQuery }) {
    const tableData = [
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
            trans:"deposit"
          },
          amount: "+₹81,123",
          status: "pending",
        },
        {
          id: "HD82NA4H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "INR Widthdraw",
            tag: "Wire Transfer",
            trans:"withdraw"
          },
          amount: "-₹55,123",
          status: "processing",
        },
        {
          id: "HD82NA5H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "Buy",
            tag: "BTC",
            trans:"trade"
          },
          amount: "12.0554484 BTC",
          status: "cancelled",
        },
        {
          id: "HD82NA6H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "Sell",
            tag: "BTC",
            trans:"trade"
          },
          amount: "-2.0554484 BTC",
          status: "completed",
        },
        {
          id: "HD82NA7H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "BTC Deposit",
            trans:"deposit"
          },
          amount: "+15.5000000",
          status: "pending",
        },
        {
          id: "HD82NA8H",
          date: "2023-06-18",
          time: "07:00 AM",
          type: {
            name: "BTC Widthdraw",
            trans:"withdraw"
          },
          amount: "-5.05555544",
          status: "completed",
        },
      ];



      const statusColor = {
        pending: "#797E82",
        processing: "#F5A50B",
        completed: "#059669",
        cancelled: "#DC2626",
      };
    

  return (
   <div className='xl:mx-24 mt-2'>

<table className="w-full font-bold">
  <thead className=''>
    <tr className=''>
      <td>ID</td>
      <td >Date & Time</td>
      <td >Type</td>
      <td >Amount</td>
      <td>Status</td>
    </tr>
  </thead>

  <tbody className="">
  {tableData
    .filter(
      (item) =>
        (item.type.trans.toLowerCase().includes(activeTab.toLowerCase()) ||
          activeTab === 'All') &&
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map((data) => (
      <tr className="font-semibold border border-slate-300">
        <td className="">{data.id}</td>
        <td>
          <div>
            <p>{data.date}</p>
            <p className="text-xs text-gray-500">{data.time}</p>
          </div>
        </td>
        <td>
          <div>
            <p>{data.type.name}</p>
            <p className="text-xs text-gray-500">{data.type?.tag}</p>
          </div>
        </td>
        <td>{data.amount}</td>
        <td>
          <p
            className="rounded-full text-center pt-1 pb-1 border border-black"
            style={{ background: statusColor[data.status] }}
          >
            {data.status}
          </p>
        </td>
      </tr>
    ))}
</tbody>

  </table>
   </div>
   

  )
}

export default TableData;
