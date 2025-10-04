import { useState, useCallback } from "react";

export function useCopytoClipboard(text){
    const [isCopied, setIsCopied] = useState(false)

    const copy = useCallback(() => {
        if(navigator.clipboard && window.isSecureContext){
            navigator.clipboard.writeText(text)
            .then(()=>{
                console.log("Copied")
                setIsCopied(true)
            })
            .catch((err)=>{
                console.log("Copy failed:",err)
                setIsCopied(false)
            })
        }else{
            const textArea = document.createElement("textarea")
            textArea.value = text
            textArea.style.position = "fixed"
            textArea.style.opacity = 0
            document.body.appendChild(textArea)
            textArea.focus()
            textArea.select()
                
            try{
                const success = document.execCommand("copy")
                success ? console.log("Copied") : console.log("Copy command failed")
                setIsCopied(success)
            }catch(err){
                console.log("Copy failed:", err)
                setIsCopied(false)
            }finally{
                document.body.removeChild(textArea)
            }

        }
    },[text])

    return [isCopied, copy]
}