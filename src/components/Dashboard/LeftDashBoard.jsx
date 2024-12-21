import { ArrowLongUpIcon } from "@heroicons/react/24/solid";

const LeftDashBoard = () => {
  return (
    <div className="hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center">
      {/* Background logo */}
      <img
        src="/assets/Logo.svg"
        alt="logo"
        className="absolute left-0 bottom-0 w-[300px] opacity-20"
      />
      {/* Main content container */}
      <div className="flex flex-col w-full max-w-[400px] bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex items-center border-b p-4">
          <img src="/assets/logo.png" alt="logo" className="w-6 h-6 mr-2" />
          <span className="font-semibold">AI to Detect & Autofix Bad Code</span>
        </div>
        {/* Statistics */}
        <div className="flex justify-between items-center p-4">
          <div className="text-center">
            <span className="font-semibold text-lg">30+</span>
            <div className="text-sm">Language Support</div>
          </div>
          <div className="text-center">
            <span className="font-semibold text-lg">10K+</span>
            <div className="text-sm">Developers</div>
          </div>
          <div className="text-center">
            <span className="font-semibold text-lg">100K+</span>
            <div className="text-sm">Hours Saved</div>
          </div>
        </div>
      </div>
      {/* Issues Fixed */}
      <div className="flex flex-col items-center p-4 px-8 bg-white rounded-lg shadow-lg transform translate-x-1/2 -translate-y-2">
        <div className="flex justify-between items-center w-full mb-2 gap-4">
          <img src="/assets/Ant.svg" alt="graph" className="w-16 h-16" />
          <div className="flex flex-col items-end">
            <div className="flex items-center text-green-500">
              <ArrowLongUpIcon className="w-5 h-5 mr-1" />
              <span>14%</span>
            </div>
            <div className="text-xs text-gray-500">This week</div>
          </div>
        </div>
        <div className="text-left w-full">
          <span className="font-semibold">Issues Fixed</span>
          <div className="font-semibold text-2xl">500K+</div>
        </div>
      </div>
    </div>
  );
};

export default LeftDashBoard;