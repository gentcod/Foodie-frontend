import {
  EnitityContainer,
  EntitiesContainer,
} from "./entity-blocks.style";
import Entityitem from "../entity-item/entity-item.component";
import Spinner from "../spinner/spinner.component";

type EntityListProps = {
  id: number;
  imageSrc: string;
  name: string;
};

type DeleteableProps = {
  isdeletable: boolean;
  handleDeleteFunc: (entityId) => void;
};

type EntityBlocksProps = {
  contentLoading?: boolean;
  entityType: string;
  searchString?: string;
  entityList: EntityListProps[];
  deletable?: DeleteableProps;
  spinnerSize?: number;
};

const EntityBlocks = ({
  contentLoading,
  entityList,
  deletable,
  spinnerSize,
}: EntityBlocksProps) => {
  return (
    <EntitiesContainer>
      {contentLoading ? (
        <Spinner size={spinnerSize}/>
      ) : (
        entityList.map((rec) => (
          <EnitityContainer key={rec.id}>
            <Entityitem
              entityId={rec.id}
              imageSrc={rec.imageSrc}
              name={rec.name}
              deletable={deletable}
            />
          </EnitityContainer>
        ))
      )}
    </EntitiesContainer>
  );
};

export default EntityBlocks;
