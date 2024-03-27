// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  Paragraph,
  Paragraph1,
  Heading,
  Image,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const slicedText = reactHooksDescription.slice(0, 170)

  const [value, setFunction] = useState(false)

  const onClickChange = () => {
    setFunction(prevState => !prevState)
  }

  const out = value ? reactHooksDescription : slicedText
  const out1 = value ? 'Read Less' : 'Read More'

  return (
    <MainContainer>
      <Heading>React Hooks</Heading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Paragraph1>{out}</Paragraph1>
      <Button type="button" onClick={onClickChange}>
        {out1}
      </Button>
    </MainContainer>
  )
}
export default ReadMore
