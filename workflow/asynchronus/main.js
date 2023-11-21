const url = 'https://api.thecatapi.com/v1/images/search';
const urlPreloader = './images/preloader.gif'
const imagesContainer = document.querySelector('.images');
let count = 0;


function createImageElement(){
    const imageWrapper = document.createElement('div');
    const image = document.createElement('img');

    image.src = urlPreloader;
    image.classList.add('img');
    imageWrapper.classList.add('images__item');
    imageWrapper.append(image);

    imagesContainer.append(imageWrapper);

    return image;
}

function loadingImagesOneByOneCallback(...urls){
    const arr = urls;
    function loadingImages(url) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => {
            const response = xhr.response;
            const image = createImageElement();
            setTimeout(() => {
                image.src = response[0].url;
            }, 500)

            if(count < 4) {
                count++;
                loadingImages(arr[count]);
            }
        }
    }

    return loadingImages(arr[count]);
}

function loadingImagesOneByOnePromise(){

    function loadUrlImage(url){
        return fetch(url).then(
            (response) => {
                return response.json();
            }
        )
    }

    function renderImage(data){
        let image = createImageElement();
        setTimeout(() => {
            image.src = data[0].url;
        }, 500)

        return loadUrlImage(url);
    }

    loadUrlImage(url)
        .then(renderImage)
        .then(renderImage)
        .then(renderImage)
        .then(renderImage)
        .then(renderImage)
}

async function loadingImagesOneByOneAsync(...urls){
    let arr = [];

    for(let url of urls){
        arr.push(await getImageData(url));
    }

    arr.map(item => {
        let image = createImageElement();
        image.src = item[0].url;
    })
}
async function getImageData(url){
    try {
        const response = await fetch(url);
        return await response.json()
    } catch (err) {
        const image = createImageElement();
        image.src = '#';
        image.alt = `${err.message}`;
    }
}

function loadingImagesOneByOneFuncGeneratorMethod(...urls) {
    async function* createGenerator(urls) {
        for (let url of urls) {
            yield renderImage(url);
        }
    }

    const generator = createGenerator(urls);

    function ssss(generator){
        generator.next();
    }

    for(let i = 0; i < urls.length; i++){
        ssss(generator);
    }
}


/////////////////


function loadingImagesAtTheSameTimeCallback(...urls){
    urls.forEach((url) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => {
            if(xhr.status !== 200) {
                const image = createImageElement();
                image.src = '#';
                image.alt = `Error: ${xhr.status} ${xhr.statusText}`;
            }else{
                const response = xhr.response;
                const image = createImageElement();
                setTimeout(() => {
                    image.src = response[0].url;
                },500);
            }
        }
    })
}

function loadingImagesAtTheSameTimePromise(...urls){
    Promise.allSettled(urls.map((url) => fetch(url)))
        .then(responses => {
            responses.forEach((response) => {
                if(response.value.ok) {
                    response.value.json()
                        .then((data) => {
                            createImageElement().src = data[0].url;
                        })
                }

                if (!response.value.ok){
                    const img = createImageElement();
                    img.src = '#';
                    img.alt = `Error: ${response.value.status} ${response.value.statusText}`;
                }
            })
        })
}

function loadingImagesAtTheSameTimeAsync(...urls){
    async function loadImages(url){
        await renderImage(url);
    }

    urls.forEach((url) => loadImages(url));
}

function loadingImagesAtTheSameTimeGenerator(...urls){
    function* loadingImagesAtTheSameTimeGenerator(urls){
        for(let url of urls){
            yield renderImage(url);
        }
    }

    const generator = loadingImagesAtTheSameTimeGenerator(urls);

    for (let item of generator) {
        generator.next();
    }
}

async function renderImage(url) {
    try {
        const response = await fetch(url);
        const responseData = await response.json();
        const image = createImageElement();

        setTimeout(() => {
            image.src = responseData[0].url;
        }, 500);
    } catch (err) {
        const image = createImageElement();
        image.src = '#';
        image.alt = `${err.message}`;
    }
}


//////////////


function loadingImagesAtTheSameTimeCallbackOne(...urls){
    let arr = [];
    for (let i = 0; i < urls.length; i++){
        const xhr = new XMLHttpRequest();
        let a = urls[i];

        xhr.open('GET', a);
        xhr.responseType = 'json';
        xhr.send();

        xhr.onload = () => {
            if(xhr.status !== 200) {
                const image = createImageElement();
                image.src = '#';
                image.alt = `Error: ${xhr.status} ${xhr.statusText}`;
            }else{
                const response = xhr.response;
                arr.push(response);
            }
        }
    }

    const image = createImageElement();

    setTimeout(() => {
        image.src = arr[0][0].url;
    },500);
}

function loadingImagesAtTheSameTimePromiseOne(...urls){
    function getData(url){
        return fetch(url).then((response) => {
            return response.json();
        })
    }

    const dataImages = urls.map((url) => getData(url));

    Promise.any(dataImages).then((value) => {
        createImageElement().src = value[0].url;
    })
}

async function newRenderImage(url) {
    try {
        const response = await fetch(url);
        return await response.json();

    } catch (err) {
        const image = createImageElement();
        image.src = '#';
        image.alt = `${err.message}`;
    }
}
function loadingImagesAtTheSameTimeAsyncOne(...urls){
    let arr = [];
    async function loadImages(url){
       arr.push(await newRenderImage(url));
    }

    urls.forEach((url) => loadImages(url));

    const image = createImageElement();

    setTimeout(() => {
        image.src = arr[0][0].url;
    }, 500);
}

function loadingImagesAtTheSameTimeGeneratorOne(...urls){
    let arr = [];

    function* loadingImagesAtTheSameTimeGenerator(urls){
        for(let url of urls){
            yield arr.push(newRenderImage(url));
        }
    }

    const generator = loadingImagesAtTheSameTimeGenerator(urls);

    for (let item of generator) {
        generator.next();
    }

    arr[0].then((response) => {
        const image = createImageElement();

        setTimeout(() => {
            image.src = response[0].url;
        }, 500);
    })
}


