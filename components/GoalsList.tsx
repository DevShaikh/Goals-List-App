import React from 'react'

// NATIVE-BASE COMPONENTS
import {
  Alert,
  Button,
  CloseIcon,
  Flex,
  Heading,
  HStack,
  Input,
  ScrollView,
  Text,
  useToast,
  VStack,
} from 'native-base'

// INTERFACES
import { GoalsState } from '../interfaces/Interfaces'

const GoalsList = ({ goals, setGoals }: GoalsState) => {
  const toast = useToast()

  const removeGoal = (id: number) => {
    let newList = goals

    newList.splice(id, 1)

    setGoals(newList)

    !toast.isActive('removeGoalToast') &&
      toast.show({
        id: 'removeGoalToast',
        status: 'success',
        title: 'Goal removed!',
      })
  }

  return (
    <VStack width='100%' space='2'>
      <Heading size='sm'>Goals</Heading>
      <ScrollView>
        {goals.length > 0 ? (
          goals.sort().map((goal, key) => (
            <Alert
              variant='left-accent'
              status='info'
              py='1'
              pr='0'
              my='1'
              key={key}
            >
              <HStack
                justifyContent='space-between'
                width='100%'
                alignItems='center'
              >
                <Text>{goal}</Text>
                <Button
                  colorScheme='red'
                  p='1'
                  onPress={removeGoal.bind(this, key)}
                >
                  <CloseIcon size='10px' color='#fff' />
                </Button>
              </HStack>
            </Alert>
          ))
        ) : (
          <Alert variant='subtle' status='warning'>
            <HStack alignItems='center' w='100%'>
              <Alert.Icon />
              <Text mx='3'>Goals list is empty.</Text>
            </HStack>
          </Alert>
        )}
      </ScrollView>
    </VStack>
  )
}

export default GoalsList
