import { useSelector } from "react-redux";



const Favourites = () => {

 const favourites = useSelector((state) => {
    return state.favourites
  })


  return <div>
    {favourites.map((favourite)=>{
      return (
        <>
<h3>{favourite.title}</h3>
<p>{favourite.company_name}</p>
<p>{favourite.category}</p>
</>

      )
    })}
  </div>;
};

export default Favourites;
