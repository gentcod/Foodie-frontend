import { ReactComponent as ArrowLeft } from '../../assets/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import { PageIndicator, PageNavigationButton, PageNavigationContainer } from "./page-navigation.style"

import { MetaData } from '../../app/models/pagination';

type NavigationProps = {
   metaData: MetaData;
   handlerFunc: (pageNum: number) => void
}

const PageNavigation = ({metaData, handlerFunc}: NavigationProps) => {
   return (
      <PageNavigationContainer>
        <PageNavigationButton 
          isFirstPage={metaData.currentPage === 1 ? true 
          : false} 
          onClick={() => handlerFunc(metaData.currentPage - 1)}
        >
          <ArrowLeft/>
        </PageNavigationButton>
        <PageIndicator>{metaData.currentPage} of {metaData.totalPages}</PageIndicator>
        <PageNavigationButton 
          isFirstPage={metaData.currentPage === metaData.totalPages ? true 
            : false} 
          onClick={() => handlerFunc(metaData.currentPage + 1)}
        >
          <ArrowRight/>
        </PageNavigationButton>
      </PageNavigationContainer>
   );
};

export default PageNavigation;