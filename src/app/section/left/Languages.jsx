function Languages() {
  return (
    <div id="languages" className="flex-col px-5 mt-5">
      <p className="text-white font-semibold text-lg mb-3">LANGUAGES</p>
      <p className="text-white tracking-wide">Indonesia</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
          style={{ width: "100%" }}
        ></div>
      </div>
      <p className="text-white tracking-wide">English</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
          style={{ width: "90%" }}
        ></div>
      </div>
      <p className="text-white tracking-wide">Japanese</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700 my-2">
        <div
          className="bg-blue-600 h-2.5 rounded-full dark:bg-blue-500"
          style={{ width: "20%" }}
        ></div>
      </div>
    </div>
  );
}

export default Languages;
