import React from 'react'
import WorkoutForm from './components/WorkoutForm';

import "@aws-amplify/ui-react/styles.css"
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react"

function App({ signOut }) {
  
  return (
    <div>
        <View className='App'>
          <Card>
            {/* <Image src={logo192.png} className='App-logo' /> */}
            <Heading level={1}>We now have Auth!</Heading>
          </Card>
          <Button onClick={signOut}>Sign Out</Button>
        </View>
        <h3>Fitness App</h3>
        <WorkoutForm />
    </div>

  )
}

export default withAuthenticator(App)