const URL = 'https://api.thecatapi.com/v1/images/search';
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

async function getImageData(url) {
    try {
        const response = await fetch(url);
        const responseData = await response.json()
        const image = await createImageElement();

        image.src = await responseData[0].url;
    } catch (err) {
        const image = createImageElement();
        image.src = '#';
        image.alt = `${err.message}`;
    }
}

async function renderImage(url) {
    try {
        const response = await fetch(url);
        const responseData = await response.json();
        const image = createImageElement();

        image.src = responseData[0].url;

    } catch (err) {
        const image = createImageElement();
        image.src = '#';
        image.alt = `${err.message}`;
    }
}

function loadingImagesOneByOneCallback(...urls){
    function loadingImages(url) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();

        const image = createImageElement();

        xhr.onload = () => {
            const response = xhr.response;

            image.src = response[0].url;

            if(count < 4) {
                count++;
                loadingImages(urls[count]);
            }
        }
    }

    return loadingImages(urls[count]);
}

function loadingImagesOneByOnePromise(){
    function loadUrlImage(url){
        // debugger
        return fetch(url)
            .then((response) => response.json())
            .then(renderImage)
    }

    function renderImage(data){
        let image = createImageElement();

        image.src = data[0].url;
    }

    loadUrlImage(URL)
        .then(() => loadUrlImage(URL))
        .then(() => loadUrlImage(URL))
        .then(() => loadUrlImage(URL))
        .then(() => loadUrlImage(URL))

}

async function loadingImagesOneByOneAsync(...urls){
    for(let url of urls){
        await getImageData(url);
    }
}

function loadingImagesOneByOneFuncGeneratorMethod(...urls) {
    async function* createGenerator(urls) {
        for (let url of urls) {
            yield renderImage(url);
        }
    }

    const generator = createGenerator(urls);

    function loadNextImage(generator){
        generator.next();
    }

    for(let i = 0; i < urls.length; i++){
        loadNextImage(generator);
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


