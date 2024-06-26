import { RestaurantContainer, RestaurantContent, RestaurantImage, RestaurantImageContainer, RestaurantImageLogo, RestaurantInnerLeft, RestaurantInnerRight, RestaurantName } from './restaurant-card.style';

type RestaurantProps = {
   name: string;
   imgSrc: string;
   location: string;
}

const RestaurantCard = ({name, imgSrc, location}: RestaurantProps) => {
   return(
      <RestaurantContainer>
         <RestaurantInnerLeft>
            <RestaurantImageContainer>
            { imgSrc === "" ? <RestaurantImageLogo/> : <RestaurantImage src={imgSrc}/>}
            </RestaurantImageContainer>
         </RestaurantInnerLeft>
         <RestaurantInnerRight>
            <RestaurantName>{name}</RestaurantName>
            <RestaurantContent>{location}</RestaurantContent>
         </RestaurantInnerRight>
      </RestaurantContainer>
   )
}

export default RestaurantCard;