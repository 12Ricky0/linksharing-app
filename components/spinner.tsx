export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100%] fixed z-[5000]">
      <div className="w-[40px] h-[40px] animate-spin border-[4px] rounded-[50%] border-[#7e63e9] border-t-4 border-t-[#633CFF]"></div>
      <p className="font-bold text-[15px] animate-pulse ml-3 text-[#633CFF]">
        Loading...
      </p>
    </div>
  );
}
