function SmallCard({ icon, title, detail }) {
  return (
    <div
      className={` flex w-11/12 md:full justify-around  p-6  border border-gray-400 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 "`}
    >
      <div className="  p-2  ">{icon}</div>
      <div className="flex flex-col justify-end mr-2  items-center text-black">
        <p>{title}</p>
        <p> {detail}</p>
      </div>
    </div>
  );
}

export default SmallCard;
