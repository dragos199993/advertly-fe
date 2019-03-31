import React, { FunctionComponent, ReactNode } from 'react';
import ListPageContainer from '../../../core/listpage/ListPageContainer/ListPageContainer';
import { IListPageContainerState } from '../../../core/listpage/ListPageContainer/IListPageContainerProps';
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap';

export const ListPage: FunctionComponent<IListPageContainerState> = ({ posts }) => {
  return (
    <Container>
      { posts.map((post) => (
        <Card>
          <CardBody>
            <CardTitle><h4>{ post.title }</h4></CardTitle>
            <CardText>{ post.body }</CardText>
          </CardBody>
        </Card>
      ))
      }
    </Container>
  );
};

export const ListPageRender: ReactNode = (
  <ListPageContainer>
    { (props) => <ListPage { ...props } /> }
  </ListPageContainer>
);
