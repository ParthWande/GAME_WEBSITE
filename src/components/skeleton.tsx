import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const SkeletonCard = () => {
  return (
    <Card width={'350px'} overflow='hidden' borderRadius={10}>
        <Skeleton height={'250px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default SkeletonCard;