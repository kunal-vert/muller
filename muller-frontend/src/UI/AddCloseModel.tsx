const AddCloseModel = ({ open, Close }) => {
  return (
    <div>
      {open ? (
        
        <div className="fixed inset-0 h-screen w-screen bg-gray-600 flex items-center justify-center opacity-60">
          
        
          <div className="bg-white w-96 h-80 rounded-2xl p-6 shadow-2xl flex flex-col justify-between">
            <h2 className="text-xl font-bold text-black">Add Content</h2>
            
           
            <button 
              onClick={Close} 
              className="bg-red-500 text-white py-2 px-4 rounded-xl font-semibold self-end cursor-pointer"
            >
              Close
            </button>
          </div>

        </div>
      ) : null}
    </div>
  )
}

export default AddCloseModel