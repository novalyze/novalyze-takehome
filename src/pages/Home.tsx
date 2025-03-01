import Chatbot from "../components/Chatbot";

const Home: React.FC = () => {
  return (
      <div className="flex flex-col h-screen">
        {/* PDF Viewer - Fully Responsive */}
        <div className="w-full flex-1 p-4 flex justify-center items-center">
          <div className="w-full h-full">
            <h2 className="text-xl font-semibold mb-2 text-center md:text-left">PDF Viewer</h2>
            
            <div className="border rounded-md overflow-hidden">
              <embed
                src="/src/resources/sample.pdf"
                type="application/pdf"
                className="w-full h-[70vh] md:h-[85vh] lg:h-[90vh] min-h-[400px]"
              />
            </div>
          </div>
        </div>

        {/* Floating Chatbot */}
        <Chatbot />
      </div>
  );
};

export default Home;
