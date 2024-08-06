function Header({ title, username }) {
  return (
    <div className="flex flex-col-reverse  md:flex-row md:justify-around items-center">
      <h2 className="text-gray-700 font-mono text-2xl my-4">{title}</h2>
      <h3 className="text-gray-700 font-mono text-2xl my-4">
        Bienvenido, {username}
      </h3>
    </div>
  );
}

export default Header;
