function LargeCard({ icon, title, detail, className }) {
  return (
    <div
      className={`${className} text-black font-semibold flex w-11/12   justify-evenly  p-6  border border-w-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "`}
    >
      <div className="  p-2 ">{icon}</div>
      <div className="flex justify-end mr-2  gap-8 items-center text-black font-semibold">
        <p>{title}</p>
        <p> {detail}</p>
      </div>
    </div>
  );
}

export default LargeCard;
