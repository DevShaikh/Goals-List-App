import React, { useState } from 'react'

// NATIVE-BASE COMPONENTS
import { Button, Flex, Heading, Input, useToast, VStack } from 'native-base'

// INTERFACES
import { GoalsState } from '../interfaces/Interfaces'

const AddGoalInput = ({ goals, setGoals }: GoalsState) => {
  // States
  const [goalInput, setGoalInput] = useState('')

  const toast = useToast()

  const addNewGoal = () => {
    if (goalInput !== '') {
      setGoals([...goals, goalInput])

      setGoalInput('')

      !toast.isActive('addGoalToast') &&
        toast.show({
          id: 'addGoalToast',
          status: 'success',
          title: 'Goal added!',
        })
    } else {
      !toast.isActive('errorGoalToasts') &&
        toast.show({
          id: 'errorGoalToast',
          status: 'error',
          title: 'Please type your goal!',
        })
    }
  }

  return (
    <VStack width='100%' space='2'>
      <Heading size='sm'>Add New Goal</Heading>
      <Flex flexDirection='row' justifyContent='space-between'>
        <Input
          mr='3'
          placeholder='Type your goal here...'
          flex='1'
          value={goalInput}
          onChangeText={(goal: any) => setGoalInput(goal)}
          _focus={{ borderColor: 'red.300' }}
        />
        <Button colorScheme='red' onPress={addNewGoal}>
          ADD
        </Button>
      </Flex>
    </VStack>
  )
}

export default AddGoalInput
