import { useDispatch } from "react-redux";
import {
  fetchRecipeByIdStart,
  resetRecipeByIdModal,
} from "../../store/recipe/recipe.action";
import {
  ButtonConatiner,
  DeleteButton,
  Entity,
  EntityDetail,
  EntityDetailsContainer,
  EntityImage,
  RecipeLogo,
} from "./entity-item.style";
import { useNavigate } from "react-router-dom";

type DeleteableProps = {
  isdeletable: boolean;
  handleDeleteFunc: (entityId: number) => void;
};

type EntityProps = {
  entityId: number;
  imageSrc: string;
  name: string;
  deletable?: DeleteableProps;
};

const Entityitem = ({ entityId, imageSrc, name, deletable }: EntityProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDisplayModel = () => {
    dispatch(resetRecipeByIdModal());
    navigate("/recipes");
    dispatch(fetchRecipeByIdStart(entityId));
  };

  const handleDelete = () => {
    deletable?.handleDeleteFunc(entityId);
  };

  return (
    <>
      <Entity onClick={handleDisplayModel}>
        {imageSrc ? <EntityImage src={imageSrc} /> : <RecipeLogo />}
        <EntityDetailsContainer>
          <EntityDetail>{name}</EntityDetail>
        </EntityDetailsContainer>
      </Entity>
      <ButtonConatiner isdeletable={deletable?.isdeletable ? true : false}>
        <DeleteButton onClick={handleDelete} />
      </ButtonConatiner>
    </>
  );
};

export default Entityitem;
