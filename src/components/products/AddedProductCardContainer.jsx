import { capitalize } from "../../utils/helpers";
import NewlyAddedProductCard from "./AddedProductCard";

function NewlyAddedProductCardContainer({ recentProducts }) {
  
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex items-start">
        <div className="font-semibold">Recently added products</div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5">
        {
          recentProducts?.slice(0, 3)?.map((product, i) => (
            <NewlyAddedProductCard data={product} key={i}/>
          ))
        }
      </div>
    </div>
  );
}

export default NewlyAddedProductCardContainer;


