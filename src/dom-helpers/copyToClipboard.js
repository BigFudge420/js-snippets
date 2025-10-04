export function copyToClipboard (text) {
    if (navigator.clipboard && window.isSecureContext){
        return navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Copied")
            return true
        })
        .catch((err) => {
            console.log("Copy failed", err)
            return false
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
            return true
        }catch(err){
            console.log("Copy failed:", err)
            return false
        }finally{
            document.body.removeChild(textArea)
        }
    }
}