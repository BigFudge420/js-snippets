import { useState } from "react";
import {useCopyToClipboard} from '../react-hooks/useCopyToClipboard'
import '../output.css'

export const CopyButton = () => {
    const [copied, copy] = useCopyToClipboard()
    const [text, setText] = useState('')
    
    return (
        <div className="flex flex-col gap-2 w-full max-w-sm m-3">
            <input
                type="text"
                name="toCopy"
                id="toCopy"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Text to copy"
            />
            <button
                onClick={() => copy(text)}
                className={`px-4 py-2 rounded text-white ${copied ? 'bg-green-600' : 'bg-blue-600'} hover:opacity-90`}
                aria-label="Copy text"
            >
                {copied ? "Copied!" : "Copy"}
            </button>
        </div>
    )
}

export default CopyButton