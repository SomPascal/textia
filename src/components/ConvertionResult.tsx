import useClipboard from "../hooks/useClipboard"
import { truncate } from "../utils/string"

export default function ConvertionResult({
    result,
    convertion
}: {
    result: string,
    convertion: string
}) {

  const {copy, isCopied} = useClipboard()

  return (
    <div className='p-3 rounded-md bg-base-200 w-12/12 md:w-10/12 lg:w-6/12'>
        <div className='flex flex-row items-center justify-between'>
            <span>Converted in: {convertion}</span>

            <div className="tooltip mb-1" data-tip="copy">
                <button className="btn btn-sm btn-secondary" onClick={()=> copy(result)}>
                    {
                      isCopied ? (
                        <i className='ri-check-line text-lg'></i>
                      ) : (
                        <i className="ri-clipboard-line text-lg"></i>
                      )
                    }
                </button>
            </div>
        </div>
        <hr className='mb-5 opacity-10' />
        <p className='text-lg'>{truncate(result, 500)}</p>
    </div>
  )
}
