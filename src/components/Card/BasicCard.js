import React from 'react';
import {
  Card, CardBody,
} from 'reactstrap';

const BasicCard = ({ children }) => {
  return (
    <div>
      <Card>
        <CardBody>
          {children}
        </CardBody>
      </Card>
    </div>
  );
};

export default BasicCard;