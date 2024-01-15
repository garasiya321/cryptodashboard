import React,{useState} from 'react'
import SideNav from '../../components/Sidenav'
import TopNav from '../../components/Topnav'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'


import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import TableData from './components/TableData';


function Transaction() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] =useState("All");
  const [loader,setLoader] = useState(false)


  const downloadPDF = ()=>{
    const capture = document.querySelector(".actual-data");
    setLoader(true);
    html2canvas(capture, { 
      scale: 2,
      height: 1000 // Specify the desired height
    }).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png')
      const doc = new jsPDF('p', 'pt', [210, 297]);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();

      doc.addImage(imgData, 'PNG' ,0,4,componentWidth,componentHeight)
      setLoader(false)
      doc.save("transaction.pdf");

    })
  }

  const data = [
    {
      label: "ALL",
      value: "All",
      total:122,
     
    },
    {
      label: "Deposit",
      value: "DEPOSIT",
      total:40,
     
    },
    {
      label: "Withdraw",
      value: "WITHDRAW",
      total:95,
      
    },
    {
      label: "Trade",
      value: "TRADE",
      total:70,
     
    },
   
  ];

  // eslint-disable-next-line 
  return (
    <>
    
    <div className='flex  bg-violet-100'>
      <div className='hidden lg:flex'>  <SideNav/></div>
      <div className='w-full'><TopNav title="Transactions"/>

      <div className='flex justify-around mt-3 mb-3'>
        <button className=' bg-violet-700 w-28 text-white rounded' onClick={downloadPDF} type="button"><i className="bi bi-download"></i> Export CSV</button>
        <div className="flex">
  <label htmlFor="exampleSearch" className='mt-3 mx-2'><i className="bi bi-search "  style={{"font-size": 23,}}></i></label>
  <input
        type="search"
        className="w-full mt-3 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding py-[0.25rem] font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black-200 dark:focus:border-primary"
        id="exampleSearch"
        placeholder="Search by ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
</div> 
      </div>

      <div className='bg-white rounded'>
     
      <Tabs value={activeTab}>
      <TabsHeader
  className="rounded-none mx-3 border-b border-blue-gray-50 bg-transparent p-0"
  indicatorProps={{
    className:
      "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
  }}
>
  {data.map(({ label, value, total }) => (
    <div className="flex" key={value}>
      <Tab
        key={value}
        value={value}
        onClick={() => setActiveTab(value)}
        className={activeTab === value ? 'text-black-400 underline' : ''}
      >
        {label}{' '}
        <span className="inline-flex items-center rounded-full bg-green-50 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
          {total}
        </span>
      </Tab>
    </div>
  ))}
</TabsHeader>



      <TabsBody className='actual-data'>

      
      <TableData data={data} activeTab={activeTab} searchQuery={searchQuery} />
      
      
        
      </TabsBody>
    </Tabs>
     
    
      
      </div>

      
    
      
      </div>
      
    </div>
    
 
    </>
   
  )
}

export default Transaction
