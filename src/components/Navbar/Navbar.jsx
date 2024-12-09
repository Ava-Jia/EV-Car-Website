
const navbar = () => {
  return (
    <div className="text-white absolute top-0 w-full flex justify-between items-center my-10 mx-8 px-20">
      <div className="font-serif text-5xl font-medium">EV-olution</div>

      <ul className="font-sans flex justify-end gap-20 text-2xl items-center">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className="cursor-pointer rounded-full bg-white text-black p-4 w-32 text-center"><a href="#">Contact</a></li>
      </ul>

    </div>
  )
}

export default navbar
