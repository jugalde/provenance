    let previewFile = (file) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
            let img = document.createElement('img')
            img.src = reader.result
            document.getElementById('gallery').appendChild(img)
        }
    }


    let preventDefaults = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    let uploadFile = (file) => {
        let url = 'http://localhost:8002'
        let formData = new FormData()

        formData.append('file', file)

            // fetch(url, {
            //   method: 'POST',
            //   body: formData
            // })
            //.then(() => {
            //    /* Done. Inform the user */ })
            //.catch(() => {
            //    /* Error. Inform the user */ })
    }

  let handleFiles = (files) => {
        let _ =([...files]).map(uploadFile)
       _= ([...files]).map(previewFile)
    }
    let handleDrop = (e) => {
        let dt = e.dataTransfer
        let files = dt.files

        handleFiles(files)
    }

    document.addEventListener('DOMContentLoaded', function() {
        let dropArea = document.getElementById('drop-area');
       
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false)
        })

        let highlight = (e) => {
            dropArea.classList.add('highlight')
        }

        let unhighlight = (e) => {
            dropArea.classList.remove('highlight')
        }

        ;['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false)
        })

        ;['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false)
        })






        dropArea.addEventListener('drop', handleDrop, false)
    });
