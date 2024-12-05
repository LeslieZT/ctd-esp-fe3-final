import { useContext } from "react";
import { ContextGlobal } from "../Context/global.context";
import Card from "../Components/Card";

const Home = () => {
  const { data } = useContext(ContextGlobal);

  return (
    <main>
      <h1 className="my-5 font-semibold">Home</h1>
      <div className="flex flex-wrap justify-evenly gap-10 mx-auto w-[80vw] h-auto">
        {data.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            username={user.username}
            id={user.id}
            isFavorite={user.isFavorite}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
