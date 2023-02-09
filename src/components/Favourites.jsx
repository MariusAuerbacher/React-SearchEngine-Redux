import { useSelector } from "react-redux";



const Favourites = () => {

 const favourites = useSelector((state) => {
    return state.favourites
  })


  return <div>
    {favourites.map((favourite)=>{
      return <h3>{favourite.title}</h3>
    })}
  </div>;
};

export default Favourites;
