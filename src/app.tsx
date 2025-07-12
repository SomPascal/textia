import { useState } from 'preact/hooks'
import TextInput from './components/TextInput'
import ConvertionResult from './components/ConvertionResult'
import { convertText } from './utils/converters'
import conversions from './config/conversions'

export function App() {
  const defaultText: string = 'Type your text here...'
  const [text, setText] = useState<string>(defaultText)

  return (
    <section class='flex flex-col items-center gap-3 px-3 mb-20'>
      <TextInput
        value={text}
        setValue={setText}
      />

      {
        Object.keys(conversions).map(style => (
          <ConvertionResult
            result={convertText(text, style)}
            convertion={style}
          />
        ))
      }
    </section>
  )
}
