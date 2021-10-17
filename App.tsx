import React, { useState } from 'react'

// NATIVE-BASE COMPONENTS
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
  Box,
  Flex,
  Input,
  Button,
  Divider,
  useToast,
} from 'native-base'

// CUSTOM COMPONENTS
import AddGoalInput from './components/AddGoalInput'
import GoalsList from './components/GoalsList'

const App = () => {
  // States
  const [goals, setGoals] = useState<string[]>([])

  const toast = useToast()

  return (
    <NativeBaseProvider>
      <Box
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
        p={4}
        pt={10}
        flex={1}
        overflow='hidden'
      >
        <VStack alignItems='center' space='4'>
          <Heading borderBottomWidth={2} borderColor='red.500'>
            The Goals List
          </Heading>
          <Divider />
          <AddGoalInput goals={goals} setGoals={setGoals} />
          <Divider />
          <GoalsList goals={goals} setGoals={setGoals} />
        </VStack>
      </Box>
    </NativeBaseProvider>
  )
}

export default App
