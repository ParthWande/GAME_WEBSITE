import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const SkeletonCard = () => {
  return (
    <Card  overflow='hidden' borderRadius={10}>
        <Skeleton height={'250px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default SkeletonCard;