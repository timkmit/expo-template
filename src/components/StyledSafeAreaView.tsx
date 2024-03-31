import { SafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'tamagui'

const StyledSafeAreaView = styled(SafeAreaView, {
  name: 'StyledSafeAreaView',
  flex: 1,
  backgroundColor: '$background'
})

export default StyledSafeAreaView
