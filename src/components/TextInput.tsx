export default function TextInput({
    value,
    setValue
}: {
    value: string,
    setValue: (value: string)=> void
}) {
  return (
    <div className='p-3 rounded-md bg-base-200 w-12/12 md:w-10/12 lg:w-6/12 mb-4 md:mb-7'>
        <textarea
            onKeyUp={(e)=> { setValue(e.target?.value ?? '') }}
            className='w-full border-0 outline-0 resize-y text-lg min-h-25' 
            placeholder='Your text here...'
            value={value}
        >{value}</textarea>
    </div>
  )
}
